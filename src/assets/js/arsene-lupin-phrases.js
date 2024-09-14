export function ArseneLupinPhrases() {
  const dialogAnswer = document.getElementById('dialog-answer')
  const dialogQuestion = document.getElementById('dialog-question')
  let questionVal = dialogQuestion.value
  let answer = dialogAnswer.value

  //Библиотека реакций
  const reactions = ['happy', 'sad', 'evil', 'pensive', 'surprised', 'glance']

  // Библиотека ответов
  const answers = {
    question: [
      'Ты что-то спросил, да?',
      'Не пойму, что ты пытаешься спросить',
      'Спрашиваешь? Сейчас отвечу. Секундочку',
      'Откуда мне знать? Вы задаете дурацкие вопросы, мой дорогой!'
    ],
    exclamation: [
      'И нечего тут восклицать!',
      'Сегодня твоя эмоциональность зашкаливает',
      'Больше восклицательных знаков в студию!!! Ладно, не злись =)'
    ],
    null: [
      'Что ответить пустоте?',
      'Я тоже люблю помолчать.',
      'Ничего не написал и хочешь от меня ответа? А вот фигушки!',
      'Да, радоваться нечему.',
      'Только не просите меня спеть.'
    ],
    default: [
      'Дайте-ка подумать...',
      'Что-то я туплю.',
      'Погоди, сейчас соображу.',
      'Я пока не обучен говорить на такие темы',
      'Мысля загружается...',
      'Ну и что с того, стану честным! Ничего, переживу, в конце концов это не так уж и стыдно!',
      'Надо уметь думать, а на это мало кто способен!',
      'Когда человек ищет, он никак не может потерять время.',
      'Чем более ловки и многочисленны мои враги, тем более скрыта моя игра.',
      'Там, где сила не поможет, надо брать хитростью.',
      'Никто не может творить чудеса… ни я, ни кто-либо другой. Я размышляю, делаю выводы, заключаю, но никак не могу догадываться. Только дураки догадываются.',
      'Так и в жизни, силишься что-то предпринять, но это бессмысленно, ведь в конечном счёте всё решает судьба...',
      'Честные люди всегда говорят последнее слово.',
      'Нет ничего глупее, как считать одни факты следствиями других, не имея твердой исходной точки.',
      'Самое трудное во всяком деле — это не закончить, а начать его.',
      'Очень редко случается, что сам факт не несет в себе разгадки.',
      'Только не просите меня спеть.'
    ],
    hello: [
      'Привет-привет!',
      'Здравствуй, пришелец!',
      'Кукусики!',
      'Здравия желаю товарищ... как вас там?'
    ],
    aboutMe: [
      'Я-то? Великий и ужасный инф Арсен Люпен! Мой прародитель был чудеснейшим вором, который не грабил бедняков и вел честный образ жизни. Ну почти.',
      'Меня зовут Арсен Люпен. А ты кто таков будешь?',
      'Правда же, жизнь моя так прекрасна! Стоит только захотеть, не так ли, и завтра можно стать кем угодно, оратором, заводчиком, политиком, наконец… Но нет, клянусь, никогда не соглашусь на это! Я Арсен Люпен, Арсеном Люпеном и останусь.',
      'Нет пределов для прогресса. Наш век буквально кишит мелкими изобретениями, делающими жизнь и в самом деле очаровательной и прекрасной. И такой забавной!.. Особенно если умеешь играть ею так, как я',
      'Пусть никто и никогда не сможет с полной уверенностью сказать: это Арсен Люпен. Главное, чтобы все безошибочно говорили: это сделал Арсен Люпен.',
      'Я умер как человек, но жив как француз.'
    ]
  }

  // Библиотека вопросов
  const questions = {
    hello: ['привет', 'здравствуй', 'куку', 'ку-ку'],
    aboutMe: ['кто ты', 'ты кто'],
    sing: ['спой'],
    smile: ['улыбнись']
  }

  // Эмоции
  function randomEmotions(array) {
    let randomItem = Math.floor(Math.random() * array.length)
    let randomEmotion = array[randomItem]
    return randomEmotion
  }

  function emotions(emotion) {
    const lupin = document.getElementById('arsene-lupin')

    function addClass() {
      lupin.classList.add(emotion)
    }

    function removeClass() {
      lupin.classList.remove(emotion)
    }

    addClass()
    setTimeout(() => removeClass(), 2000)
  }
  //@example
  //emotions('evil')

  function answersRandom(array) {
    // Подставить рандомный ответ
    let randomItem = Math.floor(Math.random() * array.length)
    let randomAnswer = array[randomItem]
    return randomAnswer
  }

  function anyQuestion(array) {
    // Проверка вопроса на соответствие ответам
    let checked = false
    array.forEach((item) => {
      let pattern = new RegExp(String.raw`${item}`, 'i')
      if (pattern.test(questionVal)) {
        checked = true
      }
    })
    return checked
  }

  // Главная проверка
  if (anyQuestion(questions.hello)) {
    answer = answersRandom(answers.hello)
    emotions('happy')
  } else if (anyQuestion(questions.sing)) {
    answer = 'Ваша песенка спета.'
    emotions('evil')
  } else if (anyQuestion(questions.smile)) {
    answer = 'Ну ладно.'
    emotions('happy')
  } else if (anyQuestion(questions.aboutMe)) {
    answer = answersRandom(answers.aboutMe)
    emotions('pensive')
  } else {
    // Неопределенный вопрос и ответы на него
    if (questionVal.includes('?')) {
      answer = answersRandom(answers.question)
      emotions('sad')
    } else if (questionVal.includes('!')) {
      answer = answersRandom(answers.exclamation)
      emotions('surprised')
    } else if (questionVal == '' || questionVal == ' ') {
      answer = answersRandom(answers.null)
      emotions(randomEmotions(reactions))
    } else {
      answer = answersRandom(answers.default)
      emotions(randomEmotions(reactions))
    }
  }

  return answer
}

//Добавить инфу вредности (режим обиды, долгое ожидание ответа)
//Пусть записывает твое имя и другие данные
//Анимировать море через canvas
//Ответы разбить на темы, и пусть его иногда заносит, а если в вопросе будет "стоп", "хватит", "эй", "сколько можно", выносить его из темы в общие фразы
// Сохранять диалоги с юзерами   https://www.npmjs.com/package/github-db
// щекотно при ховере
