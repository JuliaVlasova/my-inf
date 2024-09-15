import { answers } from './phrases-library-answers'
import { questions } from './phrases-library-questions'
import { reactions } from './phrases-library-reactions'

export function ArseneLupinPhrases() {
  const lupin = document.getElementById('arsene-lupin')
  let dialogAnswer = document.getElementById('dialog-answer')
  let dialogQuestion = document.getElementById('dialog-question')
  let questionVal = dialogQuestion.value
  let answer = dialogAnswer.value
  let storedUserName = JSON.parse(localStorage.getItem('userName'))

  // Ответы с переменной
  let specialAnswers = {
    default: [
      'Дайте-ка подумать...',
      'Что-то я туплю.',
      'Погодите, сейчас соображу.',
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
      'Всё бы отдал, чтобы узнать, что у вас на уме.',
      (JSON.parse(localStorage.getItem('userName')) ?? 'Приятель') + ', выражайтесь яснее.',
      (JSON.parse(localStorage.getItem('userName')) ?? 'Дружище') + ', развейте свою мысль.',
      (JSON.parse(localStorage.getItem('userName')) ?? 'Дорогой друг') +
        ', говорите так, чтобы я вас понимал.'
    ],
    why: [
      'Сам не пойму.',
      'Здесь какая-то загадка.',
      'Тот же вопрос к вам, ' + (JSON.parse(localStorage.getItem('userName')) ?? 'дружище') + '.',
      'Никто не знает, почему.'
    ],
    whatIsMyName: [
      'Вас зовут ' + JSON.parse(localStorage.getItem('userName')),
      'Если я ничего не путаю, вас зовут ' + JSON.parse(localStorage.getItem('userName'))
    ]
  }

  // Эмоции
  function randomEmotions(array) {
    let randomItem = Math.floor(Math.random() * array.length)
    let randomEmotion = array[randomItem]
    return randomEmotion
  }

  function emotions(emotion) {
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

  // Подставить рандомный ответ
  function answersRandom(array) {
    let randomItem = Math.floor(Math.random() * array.length)
    let randomAnswer = array[randomItem]
    return randomAnswer
  }

  // Проверка вопроса на соответствие ответам
  function anyQuestion(array) {
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
  } else if (anyQuestion(questions.userName) && !anyQuestion(questions.whatIsMyName)) {
    let userNameArray = questionVal.split(' ')
    let indexOfKey
    if (userNameArray.indexOf('имя') > 0) {
      indexOfKey = userNameArray.indexOf('имя')
    } else if (userNameArray.indexOf('зовут') > 0) {
      indexOfKey = userNameArray.indexOf('зовут')
    }

    if (userNameArray[indexOfKey + 1] !== undefined) {
      let userName = userNameArray[indexOfKey + 1].trim().replace(/[.,!?]/g, '')
      let finalUserName = userName.charAt(0).toUpperCase() + userName.slice(1)

      let userNameAnswers = [
        'Понял-понял, тебя зовут ' + finalUserName,
        'Приятно познакомиться, ' + finalUserName + '!'
      ]

      if (typeof Storage !== 'undefined' && finalUserName !== undefined) {
        localStorage.setItem('userName', JSON.stringify(finalUserName))
        answer = answersRandom(userNameAnswers)
        emotions('happy')
        //setTimeout(window.location.reload(), 6000) // плохое решение
      } else {
        answer = answersRandom(specialAnswers.default)
        emotions(randomEmotions(reactions))
      }
    } else {
      answer = answersRandom(specialAnswers.default)
      emotions(randomEmotions(reactions))
    }
  } else if (anyQuestion(questions.whatIsMyName)) {
    if (storedUserName !== null && storedUserName !== undefined) {
      answer = answersRandom(specialAnswers.whatIsMyName)
      emotions('happy')
    } else {
      answer = answersRandom(answers.iDontKnowYourName)
      emotions('sad')
    }
  } else if (anyQuestion(questions.why)) {
    answer = answersRandom(specialAnswers.why)
    emotions('pensive')
  } else if (anyQuestion(questions.where)) {
    answer = answersRandom(answers.where)
    emotions(randomEmotions(reactions))
  } else if (anyQuestion(questions.whereTo) && !anyQuestion(questions.whereFrom)) {
    answer = answersRandom(answers.whereTo)
    emotions(randomEmotions(reactions))
  } else if (anyQuestion(questions.whereFrom)) {
    answer = answersRandom(answers.whereFrom)
    emotions(randomEmotions(reactions))
  } else if (anyQuestion(questions.when)) {
    answer = answersRandom(answers.when)
    emotions(randomEmotions(reactions))
  } else if (anyQuestion(questions.uMenya)) {
    answer = answersRandom(answers.uMenya)
    emotions(randomEmotions(reactions))
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
    } else if (questionVal !== '' && questionVal !== ' ') {
      let booleanRandom = Math.floor(Math.random() * 10)
      if (booleanRandom > 5 && !questionVal.includes(' ')) {
        answer = 'А что такое "' + questionVal.trim() + '"?'
        emotions('surprised')
      } else {
        answer = answersRandom(specialAnswers.default)
        emotions(randomEmotions(reactions))
      }
    } else {
      answer = answersRandom(specialAnswers.default)
      emotions(randomEmotions(reactions))
    }
  }

  return answer
}

//Добавить инфу вредности (режим обиды, долгое ожидание ответа)
//Анимировать море через canvas
//Ответы разбить на темы, и пусть его иногда заносит, а если в вопросе будет "стоп", "хватит", "эй", "сколько можно", выносить его из темы в общие фразы
// Сохранять диалоги с юзерами   https://www.npmjs.com/package/github-db
// щекотно при ховере
