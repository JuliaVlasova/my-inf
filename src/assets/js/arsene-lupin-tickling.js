import { answers } from './phrases-library-answers'

export function ArseneLupinTickling() {
  const lupin = document.getElementById('arsene-lupin')
  let dialogAnswer = document.getElementById('dialog-answer')
  let answer = dialogAnswer.value

  // Подставить рандомный ответ
  function answersRandom(array) {
    let randomItem = Math.floor(Math.random() * array.length)
    let randomAnswer = array[randomItem]
    return randomAnswer
  }

  function emotions(emotion) {
    function addClass() {
      lupin.classList.add(emotion)
    }

    function removeClass() {
      lupin.classList.remove(emotion)
    }

    addClass()
    setTimeout(() => removeClass(), 4000)
  }
  //@example
  //emotions('evil')

  answer = answersRandom(answers.tickling)
  emotions('laugh') // надо сделать анимацию смеха

  return answer
}
