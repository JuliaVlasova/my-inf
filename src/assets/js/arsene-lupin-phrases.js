export function ArseneLupinPhrases() {
  let dialogAnswer = document.getElementById('dialog-answer')
  let dialogQuestion = document.getElementById('dialog-question')

  let questionVal = dialogQuestion.value

  if (questionVal.includes('?')) {
    dialogAnswer.value = 'Ты что-то спросил, да?'
  } else if (questionVal.includes('!')) {
    dialogAnswer.value = 'Нечего тут восклицать!'
  } else {
    dialogAnswer.value = 'Дай-ка подумать...'
  }

  return dialogAnswer.value
}

// Add reactions
// Add random answers from arrays
