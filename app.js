(function () {
  "use strict";

  var KEY = "english-srs-v1";
  var MAX_INTERVAL = 180;
  var app = document.getElementById("app");
  var LESSONS = window.LESSONS || {};

  // ---------- helpers ----------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function today() {
    var d = new Date();
    return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000);
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function norm(s) {
    return String(s).toLowerCase().replace(/[’‘`]/g, "'").replace(/\s+/g, " ").trim().replace(/[.!?]$/, "");
  }
  function normSentence(s) {
    return String(s).toLowerCase().replace(/[’‘`]/g, "'").replace(/[.,!?;:"“”]/g, "").replace(/\s+/g, " ").trim();
  }
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { alert("Скопировано в буфер обмена."); },
        function () { prompt("Скопируй вручную:", text); });
    } else { prompt("Скопируй вручную:", text); }
  }
  function $(id) { return document.getElementById(id); }

  // ---------- cards ----------
  var ALL = [];
  var BY_ID = {};
  var UNIT_BY_ID = {};
  window.UNITS.forEach(function (u) {
    UNIT_BY_ID[u.id] = u;
    u.items.forEach(function (it, i) {
      var c = { id: u.id + "-" + i, unit: u, item: it };
      ALL.push(c);
      BY_ID[c.id] = c;
    });
  });

  // ---------- state ----------
  function defaults() {
    return {
      cards: {},
      daily: { day: today(), newDone: 0, reviewDone: 0 },
      settings: { newPerDay: 10, reviewCap: 30 },
      streak: { last: null, count: 0 },
      theorySeen: {},
      write: {},
      own: {},
      dict: { total: 0, ok: 0 }
    };
  }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return defaults();
      return merge(defaults(), JSON.parse(raw));
    } catch (e) {
      return defaults();
    }
  }
  function merge(d, s) {
    return {
      cards: s.cards || d.cards,
      daily: s.daily || d.daily,
      settings: Object.assign(d.settings, s.settings || {}),
      streak: s.streak || d.streak,
      theorySeen: s.theorySeen || d.theorySeen,
      write: s.write || d.write,
      own: s.own || d.own,
      dict: s.dict || d.dict
    };
  }
  var state = load();
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }
  function rollDaily() {
    if (state.daily.day !== today()) {
      state.daily = { day: today(), newDone: 0, reviewDone: 0 };
      save();
    }
  }

  // карточки из собственных предложений
  function getCard(id) {
    if (BY_ID[id]) return BY_ID[id];
    var o = state.own[id];
    if (!o) return null;
    var u = UNIT_BY_ID[o.unit];
    if (!u) return null;
    return { id: id, unit: u, own: true, item: { t: "fill", q: o.q, a: [o.a], e: "Твоё предложение целиком: " + o.full } };
  }
  function allCards() {
    var arr = ALL.slice();
    Object.keys(state.own).forEach(function (id) {
      var c = getCard(id);
      if (c) arr.push(c);
    });
    return arr;
  }

  // ---------- SRS (упрощённый SM-2) ----------
  function grade(id, ok) {
    var t = today();
    var c = state.cards[id];
    var isNew = !c;
    if (!c) c = { ease: 2.5, interval: 0, reps: 0, due: t, lapses: 0 };
    if (ok) {
      if (c.reps === 0) c.interval = 1;
      else if (c.reps === 1) c.interval = 3;
      else c.interval = Math.min(MAX_INTERVAL, Math.round(c.interval * c.ease));
      c.reps++;
    } else {
      c.reps = 0;
      c.interval = 1;
      c.lapses++;
      c.ease = Math.max(1.3, c.ease - 0.2);
    }
    c.due = t + c.interval;
    state.cards[id] = c;

    if (isNew) state.daily.newDone++; else state.daily.reviewDone++;

    if (state.streak.last !== t) {
      state.streak.count = state.streak.last === t - 1 ? state.streak.count + 1 : 1;
      state.streak.last = t;
    }
    save();
  }

  function dueCards() {
    var t = today();
    return allCards().filter(function (c) { return state.cards[c.id] && state.cards[c.id].due <= t; })
      .sort(function (a, b) { return state.cards[a.id].due - state.cards[b.id].due; });
  }
  function newCards() {
    return ALL.filter(function (c) { return !state.cards[c.id]; });
  }
  function toQueue(cards) {
    return cards.map(function (c) { return { id: c.id, retry: false }; });
  }
  function buildQueue() {
    rollDaily();
    var reviewsLeft = Math.max(0, state.settings.reviewCap - state.daily.reviewDone);
    var newLeft = Math.max(0, state.settings.newPerDay - state.daily.newDone);
    var q = dueCards().slice(0, reviewsLeft).concat(newCards().slice(0, newLeft));
    return toQueue(shuffle(q));
  }
  function unitQueue(uid) {
    var t = today();
    var due = dueCards().filter(function (c) { return c.unit.id === uid; });
    var fresh = ALL.filter(function (c) { return c.unit.id === uid && !state.cards[c.id]; });
    return toQueue(due.concat(fresh));
  }
  function unitSeenAll(uid) {
    var u = UNIT_BY_ID[uid];
    return u.items.every(function (_, i) { return state.cards[uid + "-" + i]; });
  }
  function unitHasSentences(uid) {
    var w = state.write[uid];
    return !!(w && w.join("").trim());
  }

  // ---------- session ----------
  var session = null;

  function startSession(queue) {
    var q = queue || buildQueue();
    if (!q.length) { renderHome(); return; }
    session = { queue: q, total: q.length, answered: {}, firstTryOk: 0, firstTryAll: 0, current: null, units: {} };
    nextCard();
  }

  function nextCard() {
    if (!session.queue.length) { renderDone(); return; }
    var cur = session.queue[0];
    var card = getCard(cur.id);
    if (!card) { session.queue.shift(); nextCard(); return; }
    if (!card.own && LESSONS[card.unit.id] && !state.theorySeen[card.unit.id]) {
      renderTheoryGate(card.unit);
      return;
    }
    showCard();
  }
  function showCard() {
    session.current = session.queue.shift();
    renderCard();
  }

  function blankify(q) {
    return esc(q).replace("___", '<span class="blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>');
  }

  function theoryHtml(uid) {
    var L = LESSONS[uid];
    if (!L) return "";
    return '<div class="theory">' +
      '<div class="formula">' + esc(L.formula) + '</div>' +
      '<ul>' + L.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + '</ul>' +
      '<div class="ex">' + L.examples.map(function (p) { return "<div>" + esc(p) + "</div>"; }).join("") + '</div>' +
      '<div class="watch"><b>Осторожно:</b> ' + esc(L.watch) + '</div>' +
      '</div>';
  }

  function renderTheoryGate(u) {
    app.innerHTML =
      '<div class="meta">Новый юнит</div>' +
      '<h1>' + esc(u.title) + '</h1>' +
      theoryHtml(u.id) +
      '<button id="go" class="btn">Понятно, к упражнениям</button>' +
      '<div class="foot"><button id="quit" class="link">Выйти</button></div>';
    $("go").addEventListener("click", function () {
      state.theorySeen[u.id] = true; save();
      showCard();
    });
    $("quit").addEventListener("click", renderHome);
  }

  function renderCard() {
    var cur = session.current;
    var card = getCard(cur.id);
    var it = card.item;
    session.units[card.unit.id] = true;
    var doneCount = session.total - session.queue.length - 1;
    var pct = Math.max(0, Math.min(100, Math.round((doneCount / session.total) * 100)));
    var body = '<div class="bar"><div style="width:' + pct + '%"></div></div>' +
      '<div class="meta">' + esc(card.unit.title) + (card.own ? " · моё предложение" : "") + (cur.retry ? " · повтор" : "") + '</div>' +
      '<div class="q">' + blankify(it.q) + '</div>';

    if (it.t === "choice") {
      body += '<div class="opts">' + shuffle(it.o).map(function (o) {
        return '<button class="opt" data-v="' + esc(o) + '">' + esc(o) + '</button>';
      }).join("") + '</div>';
    } else {
      body += '<input id="ans" class="inp" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="впиши в пропуск">' +
        '<button id="check" class="btn">Проверить</button>';
    }
    body += '<div id="fb"></div>';
    body += '<div class="foot"><button id="quit" class="link">Выйти</button></div>';
    app.innerHTML = body;

    if (it.t === "choice") {
      Array.prototype.forEach.call(app.querySelectorAll(".opt"), function (b) {
        b.addEventListener("click", function () { answer(b.getAttribute("data-v"), b); });
      });
    } else {
      var inp = $("ans");
      inp.focus();
      var go = function () { if (inp.value.trim()) answer(inp.value); };
      $("check").addEventListener("click", go);
      inp.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
    }
    $("quit").addEventListener("click", function () {
      if (confirm("Выйти? Прогресс уже отвеченных карточек сохранён.")) renderHome();
    });
  }

  function answer(value, btn) {
    var cur = session.current;
    var it = getCard(cur.id).item;
    var ok = it.t === "choice" ? value === it.a : it.a.map(norm).indexOf(norm(value)) !== -1;

    if (!session.answered[cur.id]) {
      session.answered[cur.id] = true;
      session.firstTryAll++;
      if (ok) session.firstTryOk++;
      grade(cur.id, ok);
    }
    if (!ok) session.queue.push({ id: cur.id, retry: true });

    Array.prototype.forEach.call(app.querySelectorAll(".opt"), function (b) {
      b.disabled = true;
      var v = b.getAttribute("data-v");
      if (it.t === "choice" && v === it.a) b.classList.add("good");
      if (b === btn && !ok) b.classList.add("bad");
    });
    var inp = $("ans");
    if (inp) inp.disabled = true;
    var chk = $("check");
    if (chk) chk.remove();

    var right = it.t === "choice" ? it.a : it.a[0];
    $("fb").innerHTML =
      '<div class="fb ' + (ok ? "ok" : "no") + '">' +
      '<b>' + (ok ? "Верно" : "Неверно") + '</b>' +
      (ok ? "" : ' — правильно: <b>' + esc(right) + '</b>') +
      '<div class="exp">' + esc(it.e) + '</div></div>' +
      '<button id="next" class="btn">Дальше</button>';
    var next = $("next");
    next.focus();
    next.addEventListener("click", nextCard);
  }

  function renderDone() {
    var s = session;
    session = null;
    // юниты, где все карточки пройдены, а предложений ещё нет
    var todo = window.UNITS.filter(function (u) {
      return LESSONS[u.id] && unitSeenAll(u.id) && !unitHasSentences(u.id);
    });
    var html =
      '<h1>Готово 🎉</h1>' +
      '<p class="big">С первого раза верно: ' + s.firstTryOk + ' из ' + s.firstTryAll + '</p>' +
      '<p class="muted">Серия дней: ' + state.streak.count + '</p>';
    if (todo.length) {
      html += '<div class="card center">Следующий шаг: напиши свои предложения<br><b>' + esc(todo[0].title) + '</b></div>' +
        '<button id="wr" class="btn">Написать предложения</button>';
    }
    html += '<button id="home" class="btn sec">На главную</button>';
    app.innerHTML = html;
    $("home").addEventListener("click", renderHome);
    if (todo.length) $("wr").addEventListener("click", function () { renderWrite(todo[0].id); });
  }

  // ---------- unit page ----------
  function renderUnit(uid) {
    var u = UNIT_BY_ID[uid];
    state.theorySeen[uid] = true; save();
    var seen = 0;
    u.items.forEach(function (_, i) { if (state.cards[uid + "-" + i]) seen++; });
    var dueN = dueCards().filter(function (c) { return c.unit.id === uid; }).length;
    var freshN = u.items.length - seen;
    var q = unitQueue(uid);
    var ownN = Object.keys(state.own).filter(function (id) { return state.own[id].unit === uid; }).length;

    app.innerHTML =
      '<div class="foot left"><button id="back" class="link">← Назад</button></div>' +
      '<h1>' + esc(u.title) + '</h1>' +
      '<h2>1. Теория</h2>' + theoryHtml(uid) +
      '<h2>2. Упражнения</h2>' +
      '<div class="card"><div class="row"><span>Новых</span><b>' + freshN + '</b></div>' +
      '<div class="row"><span>К повторению</span><b>' + dueN + '</b></div></div>' +
      (q.length ? '<button id="ex" class="btn">Упражнения (' + q.length + ')</button>' : '<div class="card center">Здесь всё повторено ✅</div>') +
      '<h2>3. Мои предложения</h2>' +
      '<div class="card center">' + (unitHasSentences(uid) ? 'Написано. Карточек для повторения: ' + ownN : 'Ещё не написано') + '</div>' +
      '<button id="wr" class="btn sec">' + (unitHasSentences(uid) ? "Открыть мои предложения" : "Написать предложения") + '</button>';
    $("back").addEventListener("click", renderHome);
    if (q.length) $("ex").addEventListener("click", function () { startSession(q); });
    $("wr").addEventListener("click", function () { renderWrite(uid); });
  }

  // ---------- own sentences ----------
  function renderWrite(uid) {
    var u = UNIT_BY_ID[uid];
    var L = LESSONS[uid];
    if (!L) { renderUnit(uid); return; }
    var saved = state.write[uid] || [];
    var html =
      '<div class="foot left"><button id="back" class="link">← К юниту</button></div>' +
      '<h1>Мои предложения</h1><div class="meta">' + esc(u.title) + '</div>' +
      '<div class="formula">' + esc(L.formula) + '</div>' +
      '<p class="muted small">Возьми ту часть, которую хочешь запомнить, в [квадратные скобки]. Из неё я сделаю карточку для повторения. Пример: I [am studying] English now. Одна строка — одно предложение.</p>';
    L.write.prompts.forEach(function (p, i) {
      html += '<div class="wp"><label for="w' + i + '">' + esc(p) + '</label>' +
        '<textarea id="w' + i + '" class="ta" rows="3" spellcheck="false">' + esc(saved[i] || "") + '</textarea></div>';
    });
    html += '<h2>Проверь себя</h2><div class="card">' +
      L.write.check.map(function (c, i) {
        return '<label class="chk"><input type="checkbox" id="c' + i + '"> ' + esc(c) + '</label>';
      }).join("") + '</div>' +
      '<button id="save" class="btn">Сохранить</button>' +
      '<button id="copy" class="btn sec">Скопировать на проверку</button>';
    app.innerHTML = html;

    function readTexts() {
      return L.write.prompts.map(function (_, i) { return $("w" + i).value; });
    }
    $("back").addEventListener("click", function () { renderUnit(uid); });
    $("save").addEventListener("click", function () {
      var made = processWrite(uid, readTexts());
      alert("Сохранено. Карточек для повторения: " + made +
        (made ? ". Первый раз они появятся завтра." : ". Возьми нужную часть предложения в [скобки], чтобы получилась карточка."));
      renderUnit(uid);
    });
    $("copy").addEventListener("click", function () { copyText(checkText(uid, readTexts())); });
  }

  function processWrite(uid, texts) {
    state.write[uid] = texts;
    var fresh = {};
    texts.forEach(function (t, pi) {
      t.split("\n").forEach(function (line, li) {
        line = line.trim();
        var m = line.match(/\[([^\]]+)\]/);
        if (!m) return;
        var id = "own-" + uid + "-" + pi + "-" + li;
        fresh[id] = {
          unit: uid,
          q: line.replace(/\[[^\]]*\]/, "___").replace(/[\[\]]/g, ""),
          a: m[1].trim(),
          full: line.replace(/[\[\]]/g, "")
        };
      });
    });
    Object.keys(state.own).forEach(function (id) {
      if (state.own[id].unit !== uid) return;
      var n = fresh[id];
      if (!n || n.full !== state.own[id].full) {
        delete state.own[id];
        delete state.cards[id];
      }
    });
    Object.keys(fresh).forEach(function (id) {
      state.own[id] = fresh[id];
      if (!state.cards[id]) state.cards[id] = { ease: 2.5, interval: 1, reps: 1, due: today() + 1, lapses: 0 };
    });
    save();
    return Object.keys(fresh).length;
  }

  function checkText(uid, texts) {
    var u = UNIT_BY_ID[uid];
    var L = LESSONS[uid];
    var lines = texts.join("\n").split("\n").map(function (s) { return s.replace(/[\[\]]/g, "").trim(); })
      .filter(Boolean);
    return "Проверь мои предложения по английской грамматике. Тема: " + u.title + ".\n" +
      "Правило: " + L.formula + "\n" +
      "Исправь ошибки и коротко объясни по-русски, почему так.\n\n" +
      lines.map(function (s, i) { return (i + 1) + ". " + s; }).join("\n");
  }

  // ---------- dictation ----------
  var dict = null;

  function sentenceOf(card) {
    var it = card.item;
    var ans = it.t === "choice" ? it.a : it.a[0];
    var s = it.q.replace(/\s*\([^)]*\)/g, "").replace("___", ans).replace(/\s+/g, " ").trim();
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  function speak(text, slow) {
    if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) return false;
    try {
      window.speechSynthesis.cancel();
      var u = new window.SpeechSynthesisUtterance(text);
      u.lang = "en-US";
      u.rate = slow ? 0.7 : 0.95;
      window.speechSynthesis.speak(u);
      return true;
    } catch (e) { return false; }
  }

  function startDictation() {
    var seen = allCards().filter(function (c) { return state.cards[c.id]; });
    if (!seen.length) { alert("Сначала пройди хотя бы несколько упражнений."); return; }
    var items = shuffle(seen).slice(0, 8).map(sentenceOf);
    dict = { items: items, i: 0, ok: 0 };
    renderDict();
  }

  function renderDict() {
    if (dict.i >= dict.items.length) {
      var d = dict; dict = null;
      app.innerHTML =
        '<h1>Диктант окончен</h1>' +
        '<p class="big">Верно: ' + d.ok + ' из ' + d.items.length + '</p>' +
        '<button id="home" class="btn">На главную</button>';
      $("home").addEventListener("click", renderHome);
      return;
    }
    var sentence = dict.items[dict.i];
    var pct = Math.round((dict.i / dict.items.length) * 100);
    app.innerHTML =
      '<div class="bar"><div style="width:' + pct + '%"></div></div>' +
      '<div class="meta">Диктант · ' + (dict.i + 1) + ' из ' + dict.items.length + '</div>' +
      '<p class="muted">Послушай предложение и напиши его целиком.</p>' +
      '<div class="two"><button id="play" class="btn">🔊 Слушать</button><button id="slow" class="btn sec">🐢 Медленно</button></div>' +
      '<input id="ans" class="inp" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="что ты услышал">' +
      '<button id="check" class="btn">Проверить</button><div id="fb"></div>' +
      '<div class="foot"><button id="quit" class="link">Выйти</button></div>';
    var supported = !!(window.speechSynthesis && window.SpeechSynthesisUtterance);
    if (!supported) {
      $("fb").innerHTML = '<div class="fb no">Озвучка недоступна в этом браузере. Предложение: <b>' + esc(sentence) + '</b></div>';
    } else {
      speak(sentence, false);
    }
    $("play").addEventListener("click", function () { speak(sentence, false); $("ans").focus(); });
    $("slow").addEventListener("click", function () { speak(sentence, true); $("ans").focus(); });
    var inp = $("ans");
    inp.focus();
    var go = function () { if (inp.value.trim()) checkDict(sentence, inp.value); };
    $("check").addEventListener("click", go);
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
    $("quit").addEventListener("click", function () { dict = null; renderHome(); });
  }

  function checkDict(sentence, typed) {
    var ok = normSentence(sentence) === normSentence(typed);
    state.dict.total++;
    if (ok) { state.dict.ok++; dict.ok++; }
    save();
    $("ans").disabled = true;
    $("check").remove();
    $("play").disabled = true;
    $("slow").disabled = true;
    $("fb").innerHTML =
      '<div class="fb ' + (ok ? "ok" : "no") + '"><b>' + (ok ? "Верно" : "Неверно") + '</b>' +
      (ok ? "" : '<div class="exp">Правильно: <b>' + esc(sentence) + '</b><br>Ты написал: ' + esc(typed) + '</div>') + '</div>' +
      '<button id="next" class="btn">Дальше</button>';
    var n = $("next");
    n.focus();
    n.addEventListener("click", function () { dict.i++; renderDict(); });
  }

  // ---------- home ----------
  function renderHome() {
    rollDaily();
    var t = today();
    var dueAll = dueCards().length;
    var q = buildQueue();
    var unitsHtml = window.UNITS.map(function (u) {
      var total = u.items.length, seen = 0, mature = 0;
      u.items.forEach(function (_, i) {
        var c = state.cards[u.id + "-" + i];
        if (c) { seen++; if (c.interval >= 21) mature++; }
      });
      return '<div class="unit" data-u="' + u.id + '"><div class="uh"><span>' + esc(u.title) + '</span><span class="muted">' + seen + '/' + total + '</span></div>' +
        '<div class="bar sm"><div style="width:' + Math.round(seen / total * 100) + '%"></div></div>' +
        (mature ? '<div class="muted small">закреплено (интервал ≥ 21 дня): ' + mature + '</div>' : "") + '</div>';
    }).join("");
    var dictLine = state.dict.total ? '<div class="muted small center">Диктант за всё время: ' + state.dict.ok + ' из ' + state.dict.total + '</div>' : "";

    app.innerHTML =
      '<h1>English SRS</h1>' +
      '<div class="card">' +
      '<div class="row"><span>К повторению сегодня</span><b>' + dueAll + '</b></div>' +
      '<div class="row"><span>Новых сегодня</span><b>' + state.daily.newDone + ' / ' + state.settings.newPerDay + '</b></div>' +
      '<div class="row"><span>Повторов сегодня</span><b>' + state.daily.reviewDone + ' / ' + state.settings.reviewCap + '</b></div>' +
      '<div class="row"><span>Серия дней</span><b>' + (state.streak.last === t || state.streak.last === t - 1 ? state.streak.count : 0) + '</b></div>' +
      '</div>' +
      (q.length
        ? '<button id="start" class="btn">Начать (' + q.length + ')</button>'
        : '<div class="card center">На сегодня всё. Возвращайся завтра ✅</div>') +
      '<button id="dict" class="btn sec">🎧 Диктант на слух</button>' + dictLine +
      '<h2>Юниты</h2><p class="muted small">Нажми на юнит: теория, упражнения, свои предложения.</p>' + unitsHtml +
      '<h2>Настройки</h2>' +
      '<div class="card">' +
      '<label class="row"><span>Новых в день</span><input id="sNew" class="num" type="number" min="0" max="100" value="' + state.settings.newPerDay + '"></label>' +
      '<label class="row"><span>Максимум повторов в день</span><input id="sRev" class="num" type="number" min="0" max="300" value="' + state.settings.reviewCap + '"></label>' +
      '</div>' +
      '<div class="foot">' +
      '<button id="exp" class="link">Экспорт прогресса</button>' +
      '<button id="imp" class="link">Импорт</button>' +
      '<button id="rst" class="link danger">Сбросить</button>' +
      '</div>';

    var st = $("start");
    if (st) st.addEventListener("click", function () { startSession(); });
    $("dict").addEventListener("click", startDictation);
    Array.prototype.forEach.call(app.querySelectorAll(".unit"), function (el) {
      el.addEventListener("click", function () { renderUnit(parseInt(el.getAttribute("data-u"), 10)); });
    });
    $("sNew").addEventListener("change", function (e) {
      state.settings.newPerDay = Math.max(0, Math.min(100, parseInt(e.target.value, 10) || 0)); save(); renderHome();
    });
    $("sRev").addEventListener("change", function (e) {
      state.settings.reviewCap = Math.max(0, Math.min(300, parseInt(e.target.value, 10) || 0)); save(); renderHome();
    });
    $("exp").addEventListener("click", function () { copyText(JSON.stringify(state)); });
    $("imp").addEventListener("click", function () {
      var s = prompt("Вставь экспортированный JSON:");
      if (!s) return;
      try {
        var p = JSON.parse(s);
        if (!p || typeof p.cards !== "object") throw new Error("bad");
        state = merge(defaults(), p);
        save(); renderHome();
      } catch (e) { alert("Не получилось прочитать JSON."); }
    });
    $("rst").addEventListener("click", function () {
      if (confirm("Стереть весь прогресс?")) { state = defaults(); save(); renderHome(); }
    });
  }

  renderHome();
})();
