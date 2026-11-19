// Упражнения. Редактируй и добавляй свои.
// t: "choice" (a — строка из o) или "fill" (a — массив допустимых ответов)
// e: короткое объяснение, показывается после ответа
window.UNITS = [
  {
    id: 1,
    title: "Present Simple vs Present Continuous",
    items: [
      { t: "choice", q: "Look! It ___ outside.", o: ["rains", "is raining"], a: "is raining", e: "Действие происходит прямо сейчас → Present Continuous (am/is/are + -ing)." },
      { t: "fill", q: "My brother ___ (work) in a bank every day.", a: ["works"], e: "Регулярное действие → Present Simple. He/she/it → добавляем -s." },
      { t: "choice", q: "I ___ coffee. I prefer tea.", o: ["don't like", "am not liking"], a: "don't like", e: "Глаголы состояния (like, love, know, want) обычно не используются в Continuous." },
      { t: "fill", q: "Be quiet! The baby ___ (sleep).", a: ["is sleeping", "'s sleeping"], e: "«Тише!» — действие идёт сейчас → is + sleeping." },
      { t: "choice", q: "Water ___ at 100 degrees Celsius.", o: ["boils", "is boiling"], a: "boils", e: "Научные факты и законы → Present Simple." },
      { t: "fill", q: "Why ___ (you / wear) a coat? It's hot.", a: ["are you wearing"], e: "Вопрос про действие сейчас → Are you wearing…?" },
      { t: "fill", q: "She ___ (not / go) to work on Sundays.", a: ["doesn't go", "does not go"], e: "Отрицание в Present Simple: doesn't + глагол без -s." },
      { t: "choice", q: "I ___ for a new job at the moment.", o: ["look", "am looking"], a: "am looking", e: "at the moment — временное действие сейчас → Continuous." }
    ]
  },
  {
    id: 2,
    title: "Past Simple",
    items: [
      { t: "fill", q: "I ___ (go) to the cinema yesterday.", a: ["went"], e: "go — неправильный глагол: go → went." },
      { t: "fill", q: "She ___ (not / call) me last night.", a: ["didn't call", "did not call"], e: "Отрицание в Past Simple: didn't + глагол в начальной форме." },
      { t: "choice", q: "___ you see the match on Saturday?", o: ["Did", "Do", "Have"], a: "Did", e: "Вопрос в Past Simple начинается с Did." },
      { t: "fill", q: "We ___ (buy) this car in 2019.", a: ["bought"], e: "buy → bought. Конкретный год → Past Simple." },
      { t: "choice", q: "He ___ the door and went in.", o: ["open", "opened", "was opening"], a: "opened", e: "Последовательные завершённые действия → Past Simple." },
      { t: "fill", q: "When ___ (you / meet) your wife?", a: ["did you meet"], e: "Вопрос с when о прошлом → did you + глагол." },
      { t: "choice", q: "They ___ at home last weekend.", o: ["was", "were", "did"], a: "were", e: "to be в прошедшем: I/he/she/it was, we/you/they were." },
      { t: "fill", q: "I ___ (not / sleep) well last night.", a: ["didn't sleep", "did not sleep"], e: "После didn't глагол остаётся в начальной форме: sleep, не slept." }
    ]
  },
  {
    id: 3,
    title: "Past Continuous vs Past Simple",
    items: [
      { t: "choice", q: "At 8 o'clock yesterday I ___ dinner.", o: ["cooked", "was cooking"], a: "was cooking", e: "Действие было в процессе в конкретный момент → Past Continuous." },
      { t: "fill", q: "I ___ (walk) home when I met an old friend.", a: ["was walking"], e: "Длинное фоновое действие → Past Continuous, короткое (met) → Past Simple." },
      { t: "choice", q: "While she ___ TV, the phone rang.", o: ["watched", "was watching"], a: "was watching", e: "while + длительное действие → Past Continuous." },
      { t: "fill", q: "It was raining, so we ___ (stay) at home.", a: ["stayed"], e: "Результат/решение — завершённое действие → Past Simple." },
      { t: "fill", q: "What ___ (you / do) at 10 pm last night?", a: ["were you doing"], e: "Что происходило в конкретный момент → were you doing?" },
      { t: "choice", q: "He ___ his leg while he was skiing.", o: ["broke", "was breaking"], a: "broke", e: "Короткое событие, прервавшее процесс → Past Simple." },
      { t: "fill", q: "The kids ___ (play) in the garden when it started to rain.", a: ["were playing"], e: "Процесс, который прервали (started to rain) → were playing." },
      { t: "choice", q: "I ___ a shower when the lights went out.", o: ["took", "was taking"], a: "was taking", e: "Душ был в процессе, когда выключился свет → Past Continuous." }
    ]
  },
  {
    id: 4,
    title: "Present Perfect",
    items: [
      { t: "fill", q: "I ___ (lose) my keys. I can't open the door.", a: ["have lost", "'ve lost"], e: "Результат в настоящем (ключей нет сейчас) → have/has + V3." },
      { t: "choice", q: "She ___ in London for five years. She still lives there.", o: ["lived", "has lived"], a: "has lived", e: "Ситуация продолжается до сейчас → Present Perfect." },
      { t: "fill", q: "Have you ever ___ (be) to Japan?", a: ["been"], e: "be → was/were → been (V3)." },
      { t: "choice", q: "I've known him ___ 2015.", o: ["for", "since"], a: "since", e: "since + момент начала (2015); for + период времени." },
      { t: "choice", q: "We've lived here ___ ten years.", o: ["for", "since"], a: "for", e: "for + длительность (ten years)." },
      { t: "fill", q: "He ___ (not / finish) his homework yet.", a: ["hasn't finished", "has not finished"], e: "yet в отрицании → hasn't + V3." },
      { t: "fill", q: "My sister ___ (just / go) out.", a: ["has just gone", "'s just gone"], e: "just ставится между has и V3: has just gone." },
      { t: "choice", q: "Have you ___ lunch yet?", o: ["eat", "ate", "eaten"], a: "eaten", e: "После have нужна третья форма: eat – ate – eaten." }
    ]
  },
  {
    id: 5,
    title: "Present Perfect vs Past Simple",
    items: [
      { t: "choice", q: "I ___ him last week.", o: ["have seen", "saw"], a: "saw", e: "last week — законченное время → Past Simple." },
      { t: "choice", q: "___ you finished the report yet?", o: ["Did", "Have"], a: "Have", e: "yet + результат к настоящему моменту → Have you finished…?" },
      { t: "fill", q: "Shakespeare ___ (write) many plays.", a: ["wrote"], e: "Шекспир умер — законченный период → Past Simple." },
      { t: "fill", q: "I ___ (visit) Rome three times.", a: ["have visited", "'ve visited"], e: "Опыт без указания времени → Present Perfect." },
      { t: "choice", q: "She ___ to Paris in 2018.", o: ["has gone", "went"], a: "went", e: "Конкретный год (2018) → Past Simple." },
      { t: "fill", q: "We ___ (see) that film last Friday.", a: ["saw"], e: "last Friday → Past Simple. see → saw." },
      { t: "choice", q: "Is Tom here? — No, he ___ out.", o: ["went", "has gone"], a: "has gone", e: "Его нет здесь сейчас — результат в настоящем → Present Perfect." },
      { t: "fill", q: "How long ___ (you / know) Anna?", a: ["have you known"], e: "How long + ситуация, которая длится до сих пор → have you known." },
      { t: "choice", q: "Yesterday I ___ my wallet, but I found it later.", o: ["lost", "have lost"], a: "lost", e: "yesterday → Past Simple." }
    ]
  }
];
