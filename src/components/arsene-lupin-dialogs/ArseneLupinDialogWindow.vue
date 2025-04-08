<script setup>
import { ref, onMounted } from 'vue'
import { ArseneLupinPhrases } from '../../assets/js/arsene-lupin-phrases'
import { ArseneLupinTickling } from '../../assets/js/arsene-lupin-tickling'
import { ArseneLupinSpy } from '../../assets/js/arsene-lupin-spy'

const question = ref(null)
const answer = ref('Что хорошего скажете?')
const dialogButton = document.getElementById('dialog-button')

function updateQuestion() {
  answer.value = ArseneLupinPhrases() // Логика ответов на вопросы
  question.value = ''
}

onMounted(() => {
  const lupin = document.getElementById('arsene-lupin')

  if (question.value) {
    dialogButton.addEventListener('click', updateQuestion)
  }

  lupin.addEventListener('click', function () {
    answer.value = ArseneLupinTickling() // Реакция на щекотку
    setTimeout(() => {
      answer.value = 'Я вас внимательно слушаю.'
    }, 4000)
  })

  ArseneLupinSpy()
})
</script>

<template>
  <div class="dialog">
    <div class="dialog__answer" id="dialog-answer">{{ answer }}</div>
    <textarea
      v-model="question"
      ref="textarea-question"
      autofocus
      class="dialog__question"
      id="dialog-question"
      name="dialog-question"
      rows="3"
      cols="15"
      placeholder="Поговорите со мной"
      v-on:keyup.enter="updateQuestion"
    >
    </textarea>
    <div class="dialog__button" id="dialog-button" @click="updateQuestion">Отправить</div>
  </div>
</template>
