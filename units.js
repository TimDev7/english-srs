// Упражнения. Нумерация юнитов — как в English Grammar in Use (Murphy, 5th ed.).
// Все упражнения написаны с нуля по темам юнитов, из книги ничего не скопировано.
// t: "choice" (a — строка из o) или "fill" (a — массив допустимых ответов)
// e: короткое объяснение, показывается после ответа
window.UNITS = [
  {
    id: 1,
    title: "Unit 1 · Present continuous (I am doing)",
    items: [
      { t: "fill", q: "Please don't make so much noise. I ___ (try) to work.", a: ["am trying", "'m trying"], e: "Действие идёт прямо сейчас → am/is/are + -ing." },
      { t: "choice", q: "Where's Anna? — She ___ a shower at the moment.", o: ["has", "is having"], a: "is having", e: "have в значении действия (принимать душ, обедать) можно ставить в Continuous." },
      { t: "fill", q: "Look at the sky! It ___ (get) dark.", a: ["is getting", "'s getting"], e: "Ситуация меняется на наших глазах → Continuous." },
      { t: "fill", q: "The children ___ (not / watch) TV right now.", a: ["aren't watching", "are not watching", "'re not watching"], e: "Отрицание: am/is/are + not + -ing." },
      { t: "choice", q: "What ___ at the moment?", o: ["do you do", "are you doing"], a: "are you doing", e: "at the moment → Continuous. Вопрос: are + you + -ing." },
      { t: "fill", q: "The population of the world ___ (increase) very fast.", a: ["is increasing", "'s increasing"], e: "Изменяющаяся ситуация в наше время → Continuous." },
      { t: "fill", q: "Listen! Somebody ___ (sing) in the next room.", a: ["is singing", "'s singing"], e: "Listen! — звук слышен сейчас → Continuous." },
      { t: "choice", q: "I'm not working ___ — I'm on holiday.", o: ["every day", "this week"], a: "this week", e: "this week — временный период, поэтому Continuous. every day — привычка (Simple)." }
    ]
  },
  {
    id: 2,
    title: "Unit 2 · Present simple (I do)",
    items: [
      { t: "choice", q: "Tina ___ in a hotel. She's a receptionist.", o: ["work", "works"], a: "works", e: "he/she/it в Present Simple → глагол + -s." },
      { t: "fill", q: "I ___ (not / like) fast food. I prefer home cooking.", a: ["don't like", "do not like"], e: "Отрицание: I/you/we/they + don't + глагол." },
      { t: "fill", q: "What time ___ (the film / start)?", a: ["does the film start"], e: "Вопрос с he/she/it: does + подлежащее + глагол без -s." },
      { t: "choice", q: "How often ___ you wash your car?", o: ["do", "does", "are"], a: "do", e: "Вопрос в Present Simple с you → do." },
      { t: "fill", q: "She ___ (study) English at university.", a: ["studies"], e: "Глагол на согласная + y → -ies: study → studies." },
      { t: "choice", q: "I ___ to the gym on Mondays.", o: ["go", "goes", "am going"], a: "go", e: "Регулярное действие с I → go без окончания." },
      { t: "fill", q: "He ___ (watch) TV every evening.", a: ["watches"], e: "После -ch, -sh, -s, -x добавляем -es: watch → watches." },
      { t: "choice", q: "Doesn't he ___ coffee?", o: ["likes", "like"], a: "like", e: "После does/doesn't глагол остаётся в начальной форме." }
    ]
  },
  {
    id: 3,
    title: "Unit 3 · Present continuous and present simple 1",
    items: [
      { t: "choice", q: "Please be quiet. I ___ to concentrate.", o: ["try", "am trying"], a: "am trying", e: "Действие происходит сейчас → Continuous." },
      { t: "choice", q: "Sue ___ in a bank. She loves her job.", o: ["works", "is working"], a: "works", e: "Постоянная работа, общий факт → Simple." },
      { t: "fill", q: "I usually go to work by bus, but today I ___ (walk).", a: ["am walking", "'m walking"], e: "today — сегодня, не как обычно → Continuous." },
      { t: "fill", q: "Look! That man ___ (run) after the bus.", a: ["is running", "'s running"], e: "Look! — происходит прямо сейчас → Continuous." },
      { t: "choice", q: "The Earth ___ round the Sun.", o: ["goes", "is going"], a: "goes", e: "Научный факт → Simple." },
      { t: "fill", q: "How much ___ (it / cost) to send a letter to Canada?", a: ["does it cost"], e: "Общий факт/цена → Simple. Вопрос: does it cost." },
      { t: "choice", q: "I ___ in Paris at the moment, but I'm leaving next month.", o: ["live", "am living"], a: "am living", e: "Временная ситуация → Continuous." },
      { t: "fill", q: "My cousin ___ (stay) with us this week.", a: ["is staying", "'s staying"], e: "this week — временно → Continuous." }
    ]
  },
  {
    id: 4,
    title: "Unit 4 · Present continuous and present simple 2",
    items: [
      { t: "choice", q: "I ___ you. Please come back!", o: ["am needing", "need"], a: "need", e: "Глаголы состояния (need, want, know, like) обычно не используются в Continuous." },
      { t: "choice", q: "Who ___ this house? — Mr Wilson.", o: ["is owning", "owns"], a: "owns", e: "own — глагол состояния → только Simple." },
      { t: "fill", q: "She ___ (not / understand) the question.", a: ["doesn't understand", "does not understand"], e: "understand — глагол состояния → Simple." },
      { t: "choice", q: "I ___ about my future at the moment.", o: ["think", "am thinking"], a: "am thinking", e: "think = «размышлять» (процесс) → можно Continuous." },
      { t: "choice", q: "I ___ you're right.", o: ["think", "am thinking"], a: "think", e: "think = «считать, полагать» → Simple." },
      { t: "fill", q: "This soup ___ (taste) great!", a: ["tastes"], e: "taste, smell, sound, look — обычно Simple." },
      { t: "choice", q: "I ___ two brothers and a sister.", o: ["have", "am having"], a: "have", e: "have = «иметь, обладать» — не используется в Continuous." },
      { t: "fill", q: "You ___ (look) tired. Are you OK?", a: ["look"], e: "look = «выглядеть» → Simple." }
    ]
  },
  {
    id: 5,
    title: "Unit 5 · Past simple (I did)",
    items: [
      { t: "fill", q: "Mozart ___ (write) more than 600 pieces of music.", a: ["wrote"], e: "write — неправильный глагол: write → wrote." },
      { t: "fill", q: "I ___ (be) tired, so I went to bed early.", a: ["was"], e: "be в прошедшем: I/he/she/it was, we/you/they were." },
      { t: "choice", q: "We ___ a great time last summer.", o: ["had", "have had", "were having"], a: "had", e: "last summer — законченное время → Past Simple." },
      { t: "fill", q: "I ___ (not / see) Jack at the party.", a: ["didn't see", "did not see"], e: "Отрицание: didn't + начальная форма." },
      { t: "choice", q: "How did you ___ your arm?", o: ["broke", "break"], a: "break", e: "После did глагол в начальной форме." },
      { t: "fill", q: "The train ___ (arrive) at midnight last night.", a: ["arrived"], e: "Правильный глагол: + -ed." },
      { t: "fill", q: "___ (you / enjoy) the film?", a: ["did you enjoy"], e: "Вопрос в Past Simple: did + подлежащее + глагол." },
      { t: "choice", q: "She ___ at work yesterday because she was ill.", o: ["wasn't", "didn't"], a: "wasn't", e: "Отрицание to be: wasn't/weren't, без did." }
    ]
  },
  {
    id: 6,
    title: "Unit 6 · Past continuous (I was doing)",
    items: [
      { t: "choice", q: "At 9 o'clock last night I ___ TV.", o: ["watched", "was watching"], a: "was watching", e: "Процесс в конкретный момент прошлого → was/were + -ing." },
      { t: "fill", q: "It ___ (rain) when I left the house.", a: ["was raining"], e: "Фоновый процесс, на фоне которого что-то произошло." },
      { t: "fill", q: "What ___ (you / do) when I called you?", a: ["were you doing"], e: "Что происходило в момент звонка → were you doing?" },
      { t: "choice", q: "Jane was waiting for me when I ___.", o: ["was arriving", "arrived"], a: "arrived", e: "Короткое событие → Past Simple." },
      { t: "fill", q: "We ___ (not / sleep) when the earthquake started.", a: ["weren't sleeping", "were not sleeping"], e: "Отрицание: weren't + -ing." },
      { t: "choice", q: "While I ___ a shower, the phone rang.", o: ["was taking", "took"], a: "was taking", e: "while + длительное действие → Past Continuous." },
      { t: "fill", q: "They ___ (play) tennis at 5 pm yesterday.", a: ["were playing"], e: "Конкретный момент в прошлом → Past Continuous." },
      { t: "fill", q: "Dan ___ (not / look) where he was going, so he walked into a tree.", a: ["wasn't looking", "was not looking"], e: "Процесс, который объясняет событие → Past Continuous." }
    ]
  },
  {
    id: 7,
    title: "Unit 7 · Present perfect 1 (I have done)",
    items: [
      { t: "fill", q: "I've lost my keys. Have you ___ (see) them?", a: ["seen"], e: "Present Perfect: have/has + V3. see – saw – seen." },
      { t: "choice", q: "Is Ann here? — No, she's ___ to the shop.", o: ["been", "gone"], a: "gone", e: "gone — ушла и ещё не вернулась. been — уже вернулась." },
      { t: "choice", q: "Would you like some coffee? — No, thanks. I've ___ had some.", o: ["just", "yet"], a: "just", e: "just — «только что», ставится между have и V3." },
      { t: "fill", q: "Have you finished your homework ___?", a: ["yet"], e: "yet в вопросах и отрицаниях — в конце предложения." },
      { t: "choice", q: "I've ___ read this book. Can I tell you the end?", o: ["already", "yet"], a: "already", e: "already — «уже», в утверждении." },
      { t: "fill", q: "He ___ (break) his leg. He can't walk.", a: ["has broken", "'s broken"], e: "Результат в настоящем: нога сломана, ходить не может." },
      { t: "fill", q: "Oh no! I ___ (forget) my wallet!", a: ["have forgotten", "'ve forgotten"], e: "Только что обнаруженная проблема → Present Perfect." },
      { t: "choice", q: "Where's the newspaper? — I don't know. Somebody ___ it.", o: ["has taken", "took"], a: "has taken", e: "Важен результат сейчас (газеты нет), время неважно." }
    ]
  },
  {
    id: 8,
    title: "Unit 8 · Present perfect 2 (I have done)",
    items: [
      { t: "fill", q: "Have you ever ___ (eat) sushi?", a: ["eaten"], e: "ever + Present Perfect — опыт за всю жизнь. eat – ate – eaten." },
      { t: "choice", q: "I've ___ been to Australia. I'd love to go.", o: ["ever", "never"], a: "never", e: "never — «никогда». ever используется в вопросах." },
      { t: "fill", q: "This is the best film I ___ (ever / see).", a: ["have ever seen", "'ve ever seen"], e: "Superlative + Present Perfect: the best I have ever seen." },
      { t: "choice", q: "It's the first time I ___ a horse.", o: ["rode", "have ridden"], a: "have ridden", e: "It's the first time + Present Perfect." },
      { t: "fill", q: "We ___ (be) to Paris twice.", a: ["have been", "'ve been"], e: "Опыт без указания времени → Present Perfect." },
      { t: "choice", q: "I ___ five emails this morning. (Сейчас всё ещё утро.)", o: ["wrote", "have written"], a: "have written", e: "this morning, пока утро не закончилось → период не завершён → Present Perfect." },
      { t: "fill", q: "Have you ___ (be) to the new museum?", a: ["been"], e: "be → been (V3)." },
      { t: "choice", q: "I ___ to Ireland in my life.", o: ["never was", "have never been"], a: "have never been", e: "in my life — период до сих пор → Present Perfect." }
    ]
  },
  {
    id: 9,
    title: "Unit 9 · Present perfect continuous (I have been doing)",
    items: [
      { t: "fill", q: "You're out of breath. ___ (you / run)?", a: ["have you been running"], e: "Видим результат недавнего процесса → have you been running?" },
      { t: "choice", q: "She's tired because she ___ all day.", o: ["has worked", "has been working"], a: "has been working", e: "Длительный процесс, итог которого мы видим сейчас." },
      { t: "fill", q: "It ___ (rain) for hours. The streets are wet.", a: ["has been raining", "'s been raining"], e: "Процесс только что закончился или идёт до сих пор." },
      { t: "choice", q: "Why are your hands dirty? — I ___ in the garden.", o: ["have been working", "worked"], a: "have been working", e: "Недавний процесс, оставивший след." },
      { t: "fill", q: "How long ___ (you / wait) here?", a: ["have you been waiting"], e: "How long + процесс до настоящего → have you been -ing." },
      { t: "choice", q: "Tom ___ for a job since June.", o: ["looks", "has been looking"], a: "has been looking", e: "since June + продолжающийся процесс." },
      { t: "fill", q: "I ___ (not / sleep) well lately.", a: ["haven't been sleeping", "have not been sleeping"], e: "lately — недавний период → Present Perfect Continuous." },
      { t: "choice", q: "Where have you been? I ___ for you for an hour!", o: ["have been waiting", "wait"], a: "have been waiting", e: "for an hour — продолжительность до сих пор." }
    ]
  },
  {
    id: 10,
    title: "Unit 10 · Present perfect continuous and simple",
    items: [
      { t: "choice", q: "I ___ the kitchen. Do you like the colour?", o: ["have painted", "have been painting"], a: "have painted", e: "Работа закончена, важен результат → Simple." },
      { t: "choice", q: "Look at Tom's clothes! He ___ the kitchen.", o: ["has painted", "has been painting"], a: "has been painting", e: "Важен процесс, след которого видно (краска на одежде)." },
      { t: "fill", q: "She ___ (write) 10 emails today.", a: ["has written", "'s written"], e: "Число завершённых действий → Simple." },
      { t: "fill", q: "How many cups of coffee ___ (you / drink) today?", a: ["have you drunk"], e: "How many + количество → Simple. drink – drank – drunk." },
      { t: "choice", q: "I ___ for you all morning. Where were you?", o: ["looked", "have been looking"], a: "have been looking", e: "all morning — длительность, процесс до настоящего." },
      { t: "fill", q: "Jim ___ (read) that book for a week and still hasn't finished it.", a: ["has been reading"], e: "for a week + незавершённый процесс → Continuous." },
      { t: "choice", q: "I ___ my homework. Can I go out now?", o: ["have finished", "have been finishing"], a: "have finished", e: "Законченное действие → Simple (finish не про процесс)." },
      { t: "fill", q: "Her hair is wet. She ___ (swim).", a: ["has been swimming", "'s been swimming"], e: "Недавний процесс с видимым следом." }
    ]
  },
  {
    id: 11,
    title: "Unit 11 · How long have you (been) … ?",
    items: [
      { t: "fill", q: "Tom is in hospital. He ___ (be) there since Monday.", a: ["has been", "'s been"], e: "Ситуация длится до сих пор → Present Perfect." },
      { t: "choice", q: "How long ___ you known Jane?", o: ["do", "did", "have"], a: "have", e: "How long + have you known (Present Perfect)." },
      { t: "choice", q: "I ___ in this town for ten years.", o: ["live", "have lived"], a: "have lived", e: "Живу до сих пор, десять лет → Present Perfect." },
      { t: "fill", q: "How long ___ (she / work) here?", a: ["has she worked", "has she been working"], e: "How long + Present Perfect (Simple или Continuous)." },
      { t: "choice", q: "She's from Spain, but she ___ in Germany since 2018.", o: ["lives", "has been living"], a: "has been living", e: "since 2018 → Present Perfect, а не Present Simple." },
      { t: "fill", q: "I ___ (know) Tom for ten years.", a: ["have known", "'ve known"], e: "know — глагол состояния → Present Perfect Simple (не Continuous)." },
      { t: "fill", q: "How long ___ (you / be) in this country?", a: ["have you been"], e: "How long have you been …?" },
      { t: "choice", q: "He ___ a beard since he was 20.", o: ["has", "has had"], a: "has had", e: "since + начало периода → Present Perfect." }
    ]
  },
  {
    id: 12,
    title: "Unit 12 · for and since; when … ? and how long … ?",
    items: [
      { t: "choice", q: "I've lived here ___ 2015.", o: ["for", "since"], a: "since", e: "since + момент начала (год, дата, событие)." },
      { t: "choice", q: "She's been ill ___ three days.", o: ["for", "since"], a: "for", e: "for + длительность (три дня)." },
      { t: "fill", q: "I haven't seen Jack ___ last Friday.", a: ["since"], e: "since + момент: last Friday." },
      { t: "fill", q: "We've known each other ___ ten years.", a: ["for"], e: "for + период: ten years." },
      { t: "choice", q: "He's been waiting ___ 9 o'clock.", o: ["for", "since"], a: "since", e: "9 o'clock — момент начала → since." },
      { t: "fill", q: "I've been learning English ___ I was a child.", a: ["since"], e: "since + предложение: since I was a child." },
      { t: "choice", q: "It's a long time ___ I last saw him.", o: ["for", "since"], a: "since", e: "It's … since + прошедшее событие." },
      { t: "choice", q: "She hasn't called me ___ ages.", o: ["for", "since"], a: "for", e: "ages — длительный период → for." }
    ]
  },
  {
    id: 13,
    title: "Unit 13 · Present perfect and past 1 (I have done and I did)",
    items: [
      { t: "choice", q: "Tom ___ his arm last week.", o: ["has broken", "broke"], a: "broke", e: "last week — конкретное завершённое время → Past Simple." },
      { t: "choice", q: "I can't find my keys. I ___ them.", o: ["lost", "have lost"], a: "have lost", e: "Результат в настоящем (ключей нет) → Present Perfect." },
      { t: "choice", q: "When ___ the letter arrive?", o: ["did", "has"], a: "did", e: "С вопросом When — только Past Simple." },
      { t: "fill", q: "Ann ___ (go) to Italy two years ago.", a: ["went"], e: "ago → Past Simple." },
      { t: "choice", q: "I ___ him three times this week.", o: ["saw", "have seen"], a: "have seen", e: "this week — неделя ещё идёт → Present Perfect." },
      { t: "fill", q: "Beethoven ___ (compose) nine symphonies.", a: ["composed"], e: "Он умер — период закончен → Past Simple." },
      { t: "choice", q: "Have you seen Ann? — Yes, I ___ her ten minutes ago.", o: ["have seen", "saw"], a: "saw", e: "ten minutes ago → Past Simple." },
      { t: "choice", q: "I'm very hungry. I ___ anything today.", o: ["didn't eat", "haven't eaten"], a: "haven't eaten", e: "today — день не закончен → Present Perfect." }
    ]
  },
  {
    id: 14,
    title: "Unit 14 · Present perfect and past 2 (I have done and I did)",
    items: [
      { t: "choice", q: "Mark moved to Rome in 2010. He ___ there for six years, then he moved to Milan.", o: ["lived", "has lived"], a: "lived", e: "Он там уже не живёт → Past Simple." },
      { t: "choice", q: "Sarah ___ in Madrid for six years. She loves it there.", o: ["lived", "has lived"], a: "has lived", e: "Она живёт там до сих пор → Present Perfect." },
      { t: "fill", q: "I ___ (live) in Kazakhstan all my life.", a: ["have lived", "'ve lived"], e: "all my life — период до сих пор → Present Perfect." },
      { t: "choice", q: "How long ago ___ you start learning English?", o: ["did", "have"], a: "did", e: "ago всегда → Past Simple." },
      { t: "fill", q: "He ___ (work) here since 2012.", a: ["has worked", "has been working", "'s worked", "'s been working"], e: "since 2012 → Present Perfect." },
      { t: "choice", q: "It's the first time I ___ Chinese food.", o: ["ate", "have eaten"], a: "have eaten", e: "It's the first time + Present Perfect." },
      { t: "choice", q: "Where's Tom? — He ___ out five minutes ago.", o: ["went", "has gone"], a: "went", e: "five minutes ago → Past Simple." },
      { t: "fill", q: "I ___ (not / eat) meat since I became a vegetarian.", a: ["haven't eaten", "have not eaten"], e: "since + прошлое событие → Present Perfect." }
    ]
  },
  {
    id: 15,
    title: "Unit 15 · Past perfect (I had done)",
    items: [
      { t: "fill", q: "When I arrived, the film ___ (already / start).", a: ["had already started"], e: "Фильм начался раньше моего прихода → had + V3." },
      { t: "choice", q: "I wasn't hungry because I ___ lunch.", o: ["ate", "had eaten"], a: "had eaten", e: "Причина произошла раньше другого прошлого события." },
      { t: "fill", q: "Tom told me he ___ (never / be) to Spain before.", a: ["had never been"], e: "Reported прошлое: had never been." },
      { t: "choice", q: "When we got to the station, the train ___.", o: ["left", "had left"], a: "had left", e: "Поезд ушёл до нашего прихода." },
      { t: "fill", q: "I didn't recognise him — he ___ (change) a lot.", a: ["had changed"], e: "Изменения произошли раньше момента, когда я его увидел." },
      { t: "fill", q: "I failed the exam because I ___ (not / study).", a: ["hadn't studied", "had not studied"], e: "Отрицание: hadn't + V3." },
      { t: "choice", q: "After she ___ dinner, she went for a walk.", o: ["had cooked", "was cooking"], a: "had cooked", e: "After + завершённое действие, которое было раньше." },
      { t: "fill", q: "The house was empty. Everyone ___ (go) home.", a: ["had gone"], e: "go → gone. Все ушли до момента, который мы описываем." }
    ]
  },
  {
    id: 16,
    title: "Unit 16 · Past perfect continuous (I had been doing)",
    items: [
      { t: "fill", q: "She was out of breath. She ___ (run).", a: ["had been running"], e: "Процесс до момента в прошлом, с видимым результатом." },
      { t: "choice", q: "Tom was tired. He ___ all day.", o: ["has been working", "had been working"], a: "had been working", e: "Рассказ в прошлом → had been, не has been." },
      { t: "fill", q: "I ___ (wait) for an hour when the bus finally came.", a: ["had been waiting"], e: "for an hour + момент в прошлом → had been waiting." },
      { t: "choice", q: "The ground was wet. It ___.", o: ["had been raining", "has been raining"], a: "had been raining", e: "Рассказ о прошлом → Past Perfect Continuous." },
      { t: "fill", q: "How long ___ (you / study) before the exam?", a: ["had you been studying"], e: "How long + had you been + -ing." },
      { t: "choice", q: "We ___ for three hours when we got lost.", o: ["had been walking", "have been walking"], a: "had been walking", e: "Прошлое повествование → had been." },
      { t: "fill", q: "Her eyes were red. She ___ (cry).", a: ["had been crying"], e: "Результат недавнего процесса в прошлом." },
      { t: "fill", q: "I ___ (look) for my keys for ages when I found them in my pocket.", a: ["had been looking", "'d been looking"], e: "Длительный процесс до события в прошлом." }
    ]
  },
  {
    id: 17,
    title: "Unit 17 · have and have got",
    items: [
      { t: "choice", q: "She ___ two sisters.", o: ["have got", "has got"], a: "has got", e: "he/she/it → has got." },
      { t: "choice", q: "We ___ breakfast at 8 every day.", o: ["have got", "have"], a: "have", e: "have = «завтракать» (действие) → без got." },
      { t: "fill", q: "___ (you / have) a good time at the party?", a: ["did you have"], e: "have (действие) в прошедшем: did you have?" },
      { t: "choice", q: "I ___ a headache.", o: ["have got", "am having"], a: "have got", e: "Состояние/обладание: have got, не Continuous." },
      { t: "fill", q: "He ___ (not / have got) a car.", a: ["hasn't got", "has not got"], e: "Отрицание: hasn't got." },
      { t: "choice", q: "I ___ a shower every morning.", o: ["have got", "have"], a: "have", e: "have a shower — действие, got не используем." },
      { t: "fill", q: "Does she ___ any brothers?", a: ["have"], e: "С does/doesn't: have (без got)." },
      { t: "choice", q: "Last year we ___ a house, but now we live in a flat.", o: ["had got", "had"], a: "had", e: "В прошедшем have got не используется: had." }
    ]
  },
  {
    id: 18,
    title: "Unit 18 · used to (do)",
    items: [
      { t: "fill", q: "I ___ smoke, but I gave up.", a: ["used to"], e: "used to + глагол — привычка в прошлом, которой уже нет." },
      { t: "choice", q: "She ___ have long hair, but now it's short.", o: ["use to", "used to"], a: "used to", e: "В утверждении: used to." },
      { t: "fill", q: "___ (you / use to) play football when you were a child?", a: ["did you use to"], e: "В вопросе: did you use to (без -d)." },
      { t: "choice", q: "I didn't ___ like jazz, but now I love it.", o: ["used to", "use to"], a: "use to", e: "После didn't: use to (без -d)." },
      { t: "choice", q: "I ___ to the gym three times a week now.", o: ["go", "used to go"], a: "go", e: "used to — только про прошлое. Сейчас → Present Simple." },
      { t: "fill", q: "There ___ be a cinema here, but it closed.", a: ["used to"], e: "used to также про состояния в прошлом." },
      { t: "choice", q: "Did you ___ go there often?", o: ["use to", "used to"], a: "use to", e: "После did: use to." },
      { t: "fill", q: "When I was a child, I ___ (not / use to) like vegetables.", a: ["didn't use to", "did not use to"], e: "Отрицание: didn't use to." }
    ]
  }
];
