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
      'Я не вор, я — артист.',
      'Каждый человек имеет право на свою тайну.',
      'В жизни есть только одно правило: не оставляйте улик.',
      'Я всегда действую в своих интересах, но это не значит, что я не могу быть благородным.',
      'Секрет успеха — это умение использовать свои таланты.',
      'Я предпочитаю быть скорее ловким, чем честным.',
      'В каждом преступлении есть своя поэзия.',
      'Я не боюсь смерти, я боюсь скуки.',
      'Люди, которые не умеют смеяться, не умеют жить.',
      'Каждый раз, когда я выхожу на дело, я чувствую себя как на сцене.',
      'И что вы хотите этим сказать?',
      'Честные люди всегда говорят последнее слово.',
      'Нет ничего глупее, как считать одни факты следствиями других, не имея твердой исходной точки.',
      'Самое трудное во всяком деле — это не закончить, а начать его.',
      'Очень редко случается, что сам факт не несет в себе разгадки.',
      'Всё бы отдал, чтобы узнать, что у вас на уме.',
      'Интересная точка зрения.',
      'Я понимаю, о чем вы говорите.',
      'Это действительно заставляет задуматься.',
      'Согласен с вами.',
      'У каждого своё мнение.',
      'Это может быть правдой.',
      'Мне нравится, как вы это сформулировали.',
      'Давайте обсудим это подробнее.',
      'Это хороший аргумент.',
      'Вижу, вы об этом много думали.',
      'Это интересный подход.',
      'Не могу не согласиться.',
      'Вы поднимаете важный вопрос.',
      'Это действительно актуально.',
      'Я бы хотел услышать больше об этом.',
      'Это заставляет меня пересмотреть свои взгляды.',
      'Вы правы, это стоит обсудить.',
      'Я ценю вашу точку зрения.',
      'Это может быть полезно для обсуждения.',
      'Давайте посмотрим на это с другой стороны.',
      'Это не совсем так.',
      'Как будто я собираюсь танцевать с морскими звездами на луне!',
      'Это звучит так, будто коты ведут переговоры с инопланетянами.',
      'Если бы я был бананом, я бы точно не согласился с этим.',
      'А вы когда-нибудь пробовали разговаривать с кактусом?',
      'Это как если бы слон играл на гитаре в пустыне.',
      'Я бы предпочёл, чтобы мой единорог был розового цвета.',
      'Звучит, как будто вы только что вышли из параллельной вселенной.',
      'Если бы у меня был волшебный шар, он бы сказал, что это неправда.',
      'Это как пытаться поймать радугу в ведре.',
      'Я бы сказал, что это как варить суп из облаков.',
      'Вы уверены, что не перепутали с рецептом для печенья?',
      'Это напоминает мне о том дне, когда я научился грабить честных людей.',
      'Как будто я только что увидел, как пингвины играют в шахматы.',
      'Это как если бы морковь решила стать рок-звездой.',
      'Я бы сказал, что это звучит как план для захвата мира с помощью пирожков.',
      'Я бы не стал так думать.',
      'Сомневаюсь, что это сработает.',
      'Не думаю, что это хорошая идея.',
      'Это не лучший вариант.',
      'Согласен, но есть и другие мнения.',
      'Не уверен, что это правда.',
      'Это не совсем соответствует действительности.',
      'Не могу согласиться с этим.',
      'Это не то, что я имел в виду.',
      'Не вижу в этом смысла.',
      'Это не совсем то, что нужно.',
      'Не думаю, что это поможет.',
      'Это не так просто, как кажется.',
      'Не могу сказать, что это меня вдохновляет.',
      'Это не совсем удачное решение.',
      'Не уверен, что это правильно.',
      'Это не то, что я ожидал.',
      'Не могу сказать, что это меня радует.',
      'Это не совсем соответствует моим ожиданиям.',
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
  } else if (anyQuestion(questions.mood)) {
    answer = answersRandom(answers.mood)
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
        'Понял-понял, вас зовут ' + finalUserName,
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
      answer = answersRandom(answers.whatIsMyName) + storedUserName + '.'
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
  } else if (anyQuestion(questions.doesntWant)) {
    answer = answersRandom(answers.doesntWant)
    emotions(randomEmotions(reactions))
  } else if (anyQuestion(questions.want) && !anyQuestion(questions.doesntWant)) {
    answer = answersRandom(answers.want)
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
//Ответы разбить на темы, и пусть его иногда заносит, а если в вопросе будет "стоп", "хватит", "эй", "сколько можно", выносить его из темы в общие фразы
// Сохранять диалоги с юзерами   https://www.npmjs.com/package/github-db
