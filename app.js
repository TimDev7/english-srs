(function () {
  "use strict";

  var KEY = "english-srs-v1";
  var MAX_INTERVAL = 180;
  var app = document.getElementById("app");

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

  // ---------- cards ----------
  var ALL = []; // {id, unit, item}
  window.UNITS.forEach(function (u) {
    u.items.forEach(function (it, i) {
      ALL.push({ id: u.id + "-" + i, unit: u, item: it });
    });
  });
  var BY_ID = {};
  ALL.forEach(function (c) { BY_ID[c.id] = c; });

  // ---------- state ----------
  function defaults() {
    return {
      cards: {},
      daily: { day: today(), newDone: 0, reviewDone: 0 },
      settings: { newPerDay: 10, reviewCap: 30 },
      streak: { last: null, count: 0 }
    };
  }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return defaults();
      var s = JSON.parse(raw);
      var d = defaults();
      return {
        cards: s.cards || d.cards,
        daily: s.daily || d.daily,
        settings: Object.assign(d.settings, s.settings || {}),
        streak: s.streak || d.streak
      };
    } catch (e) {
      return defaults();
    }
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
    return ALL.filter(function (c) { return state.cards[c.id] && state.cards[c.id].due <= t; })
      .sort(function (a, b) { return state.cards[a.id].due - state.cards[b.id].due; });
  }
  function newCards() {
    return ALL.filter(function (c) { return !state.cards[c.id]; });
  }
  function buildQueue() {
    rollDaily();
    var reviewsLeft = Math.max(0, state.settings.reviewCap - state.daily.reviewDone);
    var newLeft = Math.max(0, state.settings.newPerDay - state.daily.newDone);
    var q = dueCards().slice(0, reviewsLeft).concat(newCards().slice(0, newLeft));
    return shuffle(q).map(function (c) { return { id: c.id, retry: false }; });
  }

  // ---------- session ----------
  var session = null;

  function startSession() {
    var q = buildQueue();
    if (!q.length) { renderHome(); return; }
    session = { queue: q, total: q.length, answered: {}, firstTryOk: 0, firstTryAll: 0, current: null };
    nextCard();
  }

  function nextCard() {
    if (!session.queue.length) { renderDone(); return; }
    session.current = session.queue.shift();
    renderCard();
  }

  function blankify(q) {
    return esc(q).replace("___", '<span class="blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>');
  }

  function renderCard() {
    var cur = session.current;
    var card = BY_ID[cur.id];
    var it = card.item;
    var doneCount = session.total - session.queue.length - 1;
    var pct = Math.round((doneCount / session.total) * 100);
    var body = '<div class="bar"><div style="width:' + pct + '%"></div></div>' +
      '<div class="meta">' + esc(card.unit.title) + (cur.retry ? " · повтор" : "") + '</div>' +
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
      var inp = document.getElementById("ans");
      inp.focus();
      var go = function () { if (inp.value.trim()) answer(inp.value); };
      document.getElementById("check").addEventListener("click", go);
      inp.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
    }
    document.getElementById("quit").addEventListener("click", function () {
      if (confirm("Выйти? Прогресс уже отвеченных карточек сохранён.")) renderHome();
    });
  }

  function answer(value, btn) {
    var cur = session.current;
    var it = BY_ID[cur.id].item;
    var ok = it.t === "choice" ? value === it.a : it.a.map(norm).indexOf(norm(value)) !== -1;

    if (!session.answered[cur.id]) {
      session.answered[cur.id] = true;
      session.firstTryAll++;
      if (ok) session.firstTryOk++;
      grade(cur.id, ok);
    }
    if (!ok) session.queue.push({ id: cur.id, retry: true });

    // lock inputs
    Array.prototype.forEach.call(app.querySelectorAll(".opt"), function (b) {
      b.disabled = true;
      var v = b.getAttribute("data-v");
      if (it.t === "choice" && v === it.a) b.classList.add("good");
      if (b === btn && !ok) b.classList.add("bad");
    });
    var inp = document.getElementById("ans");
    if (inp) inp.disabled = true;
    var chk = document.getElementById("check");
    if (chk) chk.remove();

    var right = it.t === "choice" ? it.a : it.a[0];
    document.getElementById("fb").innerHTML =
      '<div class="fb ' + (ok ? "ok" : "no") + '">' +
      '<b>' + (ok ? "Верно" : "Неверно") + '</b>' +
      (ok ? "" : ' — правильно: <b>' + esc(right) + '</b>') +
      '<div class="exp">' + esc(it.e) + '</div></div>' +
      '<button id="next" class="btn">Дальше</button>';
    var next = document.getElementById("next");
    next.focus();
    next.addEventListener("click", nextCard);
  }

  function renderDone() {
    var s = session;
    session = null;
    app.innerHTML =
      '<h1>Готово 🎉</h1>' +
      '<p class="big">С первого раза верно: ' + s.firstTryOk + ' из ' + s.firstTryAll + '</p>' +
      '<p class="muted">Серия дней: ' + state.streak.count + '</p>' +
      '<button id="home" class="btn">На главную</button>';
    document.getElementById("home").addEventListener("click", renderHome);
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
      return '<div class="unit"><div class="uh"><span>' + esc(u.title) + '</span><span class="muted">' + seen + '/' + total + '</span></div>' +
        '<div class="bar sm"><div style="width:' + Math.round(seen / total * 100) + '%"></div></div>' +
        (mature ? '<div class="muted small">закреплено (интервал ≥ 21 дня): ' + mature + '</div>' : "") + '</div>';
    }).join("");

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
      '<h2>Юниты</h2>' + unitsHtml +
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

    var st = document.getElementById("start");
    if (st) st.addEventListener("click", startSession);
    document.getElementById("sNew").addEventListener("change", function (e) {
      state.settings.newPerDay = Math.max(0, Math.min(100, parseInt(e.target.value, 10) || 0)); save(); renderHome();
    });
    document.getElementById("sRev").addEventListener("change", function (e) {
      state.settings.reviewCap = Math.max(0, Math.min(300, parseInt(e.target.value, 10) || 0)); save(); renderHome();
    });
    document.getElementById("exp").addEventListener("click", function () {
      var json = JSON.stringify(state);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(json).then(function () { alert("Скопировано в буфер обмена."); },
          function () { prompt("Скопируй вручную:", json); });
      } else { prompt("Скопируй вручную:", json); }
    });
    document.getElementById("imp").addEventListener("click", function () {
      var s = prompt("Вставь экспортированный JSON:");
      if (!s) return;
      try {
        var p = JSON.parse(s);
        if (!p || typeof p.cards !== "object") throw new Error("bad");
        state = Object.assign(defaults(), p);
        save(); renderHome();
      } catch (e) { alert("Не получилось прочитать JSON."); }
    });
    document.getElementById("rst").addEventListener("click", function () {
      if (confirm("Стереть весь прогресс?")) { state = defaults(); save(); renderHome(); }
    });
  }

  renderHome();
})();
