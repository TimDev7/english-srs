// Теория и задания «напиши сам» для каждого юнита (нумерация как в книге).
// Всё написано своими словами по темам юнитов.
// formula — короткая формула; points — основные пункты; examples — примеры;
// watch — на что обратить внимание; write.prompts — задания на свои предложения;
// write.check — вопросы для самопроверки.
window.LESSONS = {
  1: {
    formula: "am / is / are + глагол-ing",
    points: [
      "Действие идёт прямо сейчас или в эти дни: I'm working. I'm reading a good book (в последнее время).",
      "Меняющаяся ситуация: The weather is getting colder.",
      "Вопрос: Are you working? Отрицание: I'm not working. He isn't working.",
      "Правописание: write → writing, run → running, lie → lying."
    ],
    examples: ["She is cooking dinner right now.", "We aren't watching TV.", "Is it raining?"],
    watch: "Привычка («каждый день работаю») — это не Continuous, а Present Simple.",
    write: {
      prompts: ["Напиши 2 предложения о том, что ты делаешь прямо сейчас.", "Напиши предложение о том, что сейчас меняется в твоей жизни."],
      check: ["Перед глаголом стоит am/is/are?", "Глагол заканчивается на -ing?"]
    }
  },
  2: {
    formula: "I/you/we/they + глагол;  he/she/it + глагол-s",
    points: [
      "Привычки и регулярные действия: I get up at 7.",
      "Факты и постоянные ситуации: She works in a bank. Water boils at 100°C.",
      "Вопрос: do/does + подлежащее + глагол. Отрицание: don't/doesn't + глагол.",
      "Правописание: watch → watches, study → studies, go → goes."
    ],
    examples: ["He plays tennis on Sundays.", "Do you like jazz?", "She doesn't eat meat."],
    watch: "-s только в утверждении с he/she/it. После does/doesn't глагол без -s: He doesn't work.",
    write: {
      prompts: ["Напиши 2 предложения о своих привычках.", "Напиши предложение о том, что регулярно делает твой друг или родственник (he/she)."],
      check: ["Для he/she/it добавлено -s/-es?", "В вопросе и отрицании после do/does глагол без -s?"]
    }
  },
  3: {
    formula: "Continuous — сейчас/временно;  Simple — обычно/всегда",
    points: [
      "Simple — то, что бывает регулярно или постоянно: I work every day.",
      "Continuous — то, что идёт сейчас или временно: I'm working today.",
      "Маркеры: now, at the moment, today, this week → Continuous; always, usually, every day → Simple.",
      "always + Continuous выражает раздражение: You're always losing your keys!"
    ],
    examples: ["I usually walk to work, but today I'm taking the bus.", "She's staying with friends this week."],
    watch: "Научные факты и общие истины — Simple: The Earth goes round the Sun.",
    write: {
      prompts: ["Напиши предложения: что ты обычно делаешь, и что делаешь сегодня иначе.", "Напиши предложение с always + Continuous (то, что тебя раздражает)."],
      check: ["Привычка — Simple, временное — Continuous?", "Есть маркер времени (usually, today, now)?"]
    }
  },
  4: {
    formula: "Глаголы состояния почти не используют в Continuous",
    points: [
      "Без -ing: know, understand, believe, like, love, hate, want, need, prefer, own, belong, seem.",
      "Некоторые глаголы меняют смысл: I think you're right (считаю) — I'm thinking about it (размышляю).",
      "have = «иметь» — Simple (I have a car); have = «делать что-то» — можно Continuous (I'm having lunch).",
      "Чувства: look, taste, smell, sound обычно в Simple: This soup tastes great."
    ],
    examples: ["I don't understand this word.", "What do you want?", "I'm having a shower."],
    watch: "Нельзя: I'm knowing, I'm wanting. Правильно: I know, I want.",
    write: {
      prompts: ["Напиши 2 предложения с глаголами состояния (know, want, need, like…).", "Напиши два предложения с think: в значении «считать» и в значении «размышлять»."],
      check: ["У глаголов состояния нет -ing?", "think = считать → Simple; think = размышлять → Continuous?"]
    }
  },
  5: {
    formula: "глагол-ed или 2-я форма;  did/didn't + глагол",
    points: [
      "Законченное действие в прошлом: I watched a film yesterday.",
      "Правильные глаголы: + -ed (work → worked). Неправильные нужно учить: go → went, see → saw.",
      "Вопрос и отрицание: did/didn't + глагол в начальной форме.",
      "to be: was/were. Вопрос и отрицание без did: Was she ill? She wasn't ill."
    ],
    examples: ["I didn't see him.", "Did you enjoy the party?", "We were tired."],
    watch: "Did you went? — ошибка. После did/didn't глагол всегда в начальной форме: Did you go?",
    write: {
      prompts: ["Напиши 2 предложения о том, что ты делал вчера.", "Напиши один вопрос и одно отрицание в прошедшем времени."],
      check: ["Неправильные глаголы стоят во 2-й форме?", "После did/didn't глагол в начальной форме?"]
    }
  },
  6: {
    formula: "was / were + глагол-ing",
    points: [
      "Процесс в конкретный момент прошлого: At 8 pm I was watching TV.",
      "Длинный фон + короткое событие: I was walking home when I met Tom.",
      "while + Continuous: While I was cooking, the phone rang.",
      "Отрицание и вопрос: wasn't/weren't doing, Were you doing…?"
    ],
    examples: ["It was raining when I left.", "What were you doing at 10 o'clock?"],
    watch: "Короткое законченное событие — Past Simple: I met Tom (не I was meeting Tom).",
    write: {
      prompts: ["Напиши, что ты делал вчера в 9 вечера.", "Напиши предложение «длинное действие + короткое событие» (when или while)."],
      check: ["Длинное действие: was/were + -ing?", "Короткое событие в Past Simple?"]
    }
  },
  7: {
    formula: "have / has + 3-я форма (V3)",
    points: [
      "Действие в прошлом важно для настоящего (результат): I've lost my keys — ключей нет сейчас.",
      "Новость: The bus has arrived.",
      "just — только что, already — уже, yet — ещё (в вопросах и отрицаниях, в конце).",
      "She's gone to Paris — уехала и ещё там. She's been to Paris — была и вернулась."
    ],
    examples: ["I've just finished.", "Have you eaten yet?", "He hasn't called yet."],
    watch: "С конкретным временем (yesterday, last week, in 2019) Present Perfect не используют — там Past Simple.",
    write: {
      prompts: ["Напиши 2 предложения о том, что ты только что сделал или уже сделал (just, already).", "Напиши предложение с yet (вопрос или отрицание)."],
      check: ["have/has + 3-я форма глагола?", "just/already между have и V3, yet — в конце?"]
    }
  },
  8: {
    formula: "have / has + V3 (опыт, «до сих пор»)",
    points: [
      "Опыт за всю жизнь: Have you ever been to Japan? I've never eaten sushi.",
      "После superlative: It's the best film I've ever seen.",
      "It's the first time: It's the first time I've flown.",
      "Период не закончился (today, this week, this morning): I've written three emails today."
    ],
    examples: ["I've never been to London.", "She has seen this film twice."],
    watch: "Если период закончился (yesterday, last year) — Past Simple.",
    write: {
      prompts: ["Напиши 2 предложения о своём опыте (ever, never).", "Напиши предложение с It's the first time I've …"],
      check: ["Нет конкретного времени (yesterday, last year)?", "Использована 3-я форма глагола?"]
    }
  },
  9: {
    formula: "have / has been + глагол-ing",
    points: [
      "Процесс, который шёл до недавнего времени или идёт до сих пор: I've been working all day.",
      "Видим результат недавнего процесса: Your hands are dirty — have you been working in the garden?",
      "How long…? — How long have you been waiting?",
      "Часто с for, since, all day, lately, recently."
    ],
    examples: ["It's been raining for hours.", "I haven't been sleeping well lately."],
    watch: "Это про процесс (как долго). Для результата и количества нужен Present Perfect Simple — см. Unit 10.",
    write: {
      prompts: ["Напиши, чем ты занимался в последнее время (have been + -ing).", "Напиши вопрос с How long …?"],
      check: ["have/has been + -ing?", "Есть for/since или виден результат процесса?"]
    }
  },
  10: {
    formula: "Continuous — процесс;  Simple — результат и количество",
    points: [
      "Continuous: важен сам процесс и его длительность: I've been painting the kitchen.",
      "Simple: важно, что закончено: I've painted the kitchen. Look, it's finished!",
      "How much / How many → Simple. How long → Continuous.",
      "Глаголы состояния (know, like) не используют в Continuous."
    ],
    examples: ["I've been reading for two hours.", "I've read three chapters."],
    watch: "Если действие закончено и названо количество — используй Simple.",
    write: {
      prompts: ["Напиши одно предложение про процесс (been + -ing) и одно про результат/число (V3).", "Напиши вопрос с How many …?"],
      check: ["Процесс — been + -ing, результат — V3?", "Для How many использован Simple?"]
    }
  },
  11: {
    formula: "How long + have/has + V3 (или been -ing)",
    points: [
      "Ситуация началась в прошлом и продолжается: How long have you lived here?",
      "Present Simple здесь ошибка: How long do you live here? ✗",
      "I've lived here for 5 years = I've been living here for 5 years.",
      "Глаголы состояния (know, have, be) — только Simple: I've known her for years."
    ],
    examples: ["How long have you known Tom?", "She has been here since Monday."],
    watch: "I live here since 2015 — ошибка. Правильно: I've lived here since 2015.",
    write: {
      prompts: ["Как долго ты живёшь в своём городе или учишься в университете? Напиши предложение.", "Как долго ты знаешь своего лучшего друга? Напиши предложение."],
      check: ["Использован Present Perfect, а не Present Simple?", "Для know/have/be — Present Perfect Simple?"]
    }
  },
  12: {
    formula: "for + период;  since + момент начала",
    points: [
      "for + сколько: for two hours, for a week, for ages.",
      "since + с какого момента: since 9 o'clock, since Monday, since 2015, since I was a child.",
      "It's two years since I last saw him = I haven't seen him for two years.",
      "How long ago / When — это Past Simple: When did you arrive?"
    ],
    examples: ["I've lived here for ten years.", "She's been ill since Tuesday."],
    watch: "Задай вопрос: «сколько?» → for; «с какого момента?» → since.",
    write: {
      prompts: ["Напиши 2 предложения с for.", "Напиши 2 предложения с since."],
      check: ["for + период, since + момент?", "В предложении Present Perfect?"]
    }
  },
  13: {
    formula: "Past Simple — законченное время;  Present Perfect — связь с настоящим",
    points: [
      "Past Simple, если названо время: yesterday, last week, in 2019, two years ago.",
      "Present Perfect, если время не названо, а важен результат или опыт: I've lost my keys.",
      "Период ещё идёт (today, this week) → Present Perfect.",
      "Вопрос When…? — только Past Simple."
    ],
    examples: ["I saw him last week.", "I've seen him this week."],
    watch: "Нельзя: I have seen him yesterday. Правильно: I saw him yesterday.",
    write: {
      prompts: ["Напиши предложение с законченным временем (yesterday, last year, ago).", "Напиши предложение про результат сейчас (Present Perfect)."],
      check: ["С конкретным временем — Past Simple?", "Без времени, но с результатом — Present Perfect?"]
    }
  },
  14: {
    formula: "длится до сих пор → Present Perfect;  закончилось → Past Simple",
    points: [
      "She has lived in Rome for 6 years — живёт там сейчас.",
      "She lived in Rome for 6 years — уже не живёт.",
      "ago → Past Simple: It started two weeks ago.",
      "Если назван конкретный период в прошлом (in 2010) — Past Simple."
    ],
    examples: ["I've known him since school.", "I knew him at school."],
    watch: "Present Perfect связывает прошлое с настоящим. Нет связи — Past Simple.",
    write: {
      prompts: ["Напиши про то, что ещё длится (Present Perfect), и про то, что закончилось (Past Simple).", "Напиши предложение с ago."],
      check: ["ago → Past Simple?", "Длится до сих пор → Present Perfect?"]
    }
  },
  15: {
    formula: "had + V3",
    points: [
      "Действие произошло раньше другого действия в прошлом: When I arrived, the film had started.",
      "Часто с already, just, before, after, by the time.",
      "Косвенная речь: He said he had never been to Spain.",
      "Вопрос: Had you…? Отрицание: hadn't + V3."
    ],
    examples: ["I'd already eaten.", "She hadn't seen him before."],
    watch: "Если события идут по порядку и всё понятно, достаточно Past Simple.",
    write: {
      prompts: ["Напиши 2 предложения: что уже случилось, когда ты куда-то пришёл.", "Напиши предложение с after или before и Past Perfect."],
      check: ["had + 3-я форма?", "Действие с had произошло раньше второго?"]
    }
  },
  16: {
    formula: "had been + глагол-ing",
    points: [
      "Процесс шёл до момента в прошлом: I'd been waiting for an hour when the bus came.",
      "Результат недавнего процесса в прошлом: Her eyes were red. She'd been crying.",
      "Вопрос: How long had you been waiting?",
      "Глаголы состояния — Past Perfect Simple: I'd known him for years."
    ],
    examples: ["They'd been walking for hours.", "I hadn't been sleeping well."],
    watch: "Нужно два момента в прошлом: сам процесс и то, что произошло после него.",
    write: {
      prompts: ["Напиши, что ты делал до того, как что-то произошло (had been + -ing).", "Напиши вопрос с How long had …?"],
      check: ["had been + -ing?", "Есть второе событие в прошлом?"]
    }
  },
  17: {
    formula: "have = have got (обладание);  действие — только have",
    points: [
      "Обладание: I have a car = I've got a car. She has a brother = She's got a brother.",
      "Действие (завтракать, принять душ, хорошо провести время) — только have: have breakfast, have a shower.",
      "Вопрос и отрицание: Have you got…? / Do you have…? I haven't got… / I don't have…",
      "В прошедшем только had: We had a house (не had got)."
    ],
    examples: ["I've got a headache.", "We had a great time."],
    watch: "got не используют для действий и в прошедшем времени.",
    write: {
      prompts: ["Напиши 2 предложения с have got (что у тебя есть).", "Напиши предложение с have как действие (have breakfast, have a shower…)."],
      check: ["Для действий нет got?", "В прошедшем — had (не had got)?"]
    }
  },
  18: {
    formula: "used to + глагол (только прошлое)",
    points: [
      "Привычки и состояния в прошлом, которых уже нет: I used to smoke. She used to have long hair.",
      "Вопрос и отрицание — use to без -d: Did you use to…? I didn't use to…",
      "Только прошлое. Для настоящего — Present Simple.",
      "Не путай с be used to (быть привычным к чему-то) — это другой юнит."
    ],
    examples: ["We used to live near the sea.", "I didn't use to like coffee."],
    watch: "Для одного конкретного случая в прошлом used to не подходит: Last year I went to Paris.",
    write: {
      prompts: ["Напиши 2 предложения о привычках твоего детства (used to).", "Напиши один вопрос и одно отрицание с use to."],
      check: ["used to + начальная форма глагола?", "В вопросе и отрицании use to без -d?"]
    }
  }
};
