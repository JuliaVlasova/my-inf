export function ArseneLupinPhrases() {
  const dialogAnswer = document.getElementById('dialog-answer')
  const dialogQuestion = document.getElementById('dialog-question')
  let questionVal = dialogQuestion.value
  let answer = dialogAnswer.value

  // Библиотека ответов
  const answers = {
    question: [
      'Ты что-то спросил, да?',
      'Не пойму, что ты пытаешься спросить',
      'Спрашиваешь? Сейчас отвечу. Секундочку'
    ],
    exclamation: [
      'И нечего тут восклицать!',
      'Сегодня твоя эмоциональность зашкаливает',
      'Больше восклицательных знаков в студию!!! Ладно, не злись =)'
    ],
    null: [
      'Что ответить пустоте?',
      'Я тоже люблю помолчать.',
      'Ничего не написал и хочешь от меня ответа? А вот фигушки!'
    ],
    default: [
      'Дайте-ка подумать...',
      'Что-то я туплю.',
      'Погоди, сейчас соображу.',
      'Я пока не обучен говорить на такие темы',
      'Мысля загружается...'
    ],
    hello: [
      'Привет-привет!',
      'Здравствуй, пришелец!',
      'Кукусики!',
      'Здравия желаю товарищ... как вас там?'
    ],
    aboutMe: [
      'Я-то? Великий и ужасный инф Арсен Люпен! Мой прародитель был чудеснейшим вором, который не грабил бедняков и вел честный образ жизни. Ну почти.',
      'Меня зовут Арсен Люпен. А ты кто таков будешь?'
    ]
  }

  // Библиотека вопросов
  const questions = {
    hello: ['привет', 'здравствуй', 'куку', 'ку-ку'],
    aboutMe: ['кто ты', 'ты кто']
  }

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
  } else if (anyQuestion(questions.aboutMe)) {
    answer = answersRandom(answers.aboutMe) // а тут хочется функцию
  } else {
    // Неопределенный вопрос и ответы на него
    if (questionVal.includes('?')) {
      answer = answersRandom(answers.question)
    } else if (questionVal.includes('!')) {
      answer = answersRandom(answers.exclamation)
    } else if (questionVal == '' || questionVal == ' ') {
      answer = answersRandom(answers.null)
    } else {
      answer = answersRandom(answers.default)
    }
  }

  return answer
}

//Добавить инфу вредности (режим обиды, долгое ожидание ответа)
//Пусть записывает твое имя и другие данные
//Анимировать море через canvas
//Облако, которое проплывает с интервалом, становится темной тучей и проливается дождем, а потом тает
//Допилить мобильную версию звезд
//Ответы разбить на темы, и пусть его иногда заносит, а если в вопросе будет "стоп", "хватит", "эй", "сколько можно", выносить его из темы в общие фразы
//Скроллбар в диалоге
//Добавить нормальный шрифт
