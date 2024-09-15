import { answers, questions, reactions } from './arsene-lupin-phrases-library'

export function ArseneLupinPhrases() {
  let dialogAnswer = document.getElementById('dialog-answer')
  let dialogQuestion = document.getElementById('dialog-question')
  let questionVal = dialogQuestion.value
  let answer = dialogAnswer.value
  let storedUserName = JSON.parse(localStorage.getItem('userName'))

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
        answer = answersRandom(answers.default)
        emotions(randomEmotions(reactions))
      }
    } else {
      answer = answersRandom(answers.default)
      emotions(randomEmotions(reactions))
    }
  } else if (anyQuestion(questions.whatIsMyName)) {
    if (storedUserName !== null && storedUserName !== undefined) {
      answer = answersRandom(answers.whatIsMyName)
      emotions('happy')
    } else {
      answer = answersRandom(answers.iDontKnowYourName)
      emotions('sad')
    }
  } else if (anyQuestion(questions.why)) {
    answer = answersRandom(answers.why)
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
        answer = answersRandom(answers.default)
        emotions(randomEmotions(reactions))
      }
    } else {
      answer = answersRandom(answers.default)
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
