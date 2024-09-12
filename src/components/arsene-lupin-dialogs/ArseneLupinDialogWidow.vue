<script setup>
import { ref, onMounted } from 'vue'
import { ArseneLupinPhrases } from '../../assets/js/arsene-lupin-phrases'

const question = ref(null)
const answer = ref('Ну что молчишь? Молви слово!')
const dialogButton = document.getElementById('dialog-button')

function updateQuestion() {
  answer.value = ArseneLupinPhrases() // Логика ответов на вопросы
  question.value = ''
}

onMounted(() => {
  if (question.value) {
    dialogButton.addEventListener('click', updateQuestion)
  }
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
      placeholder="Поговори со мной"
      v-on:keyup.enter="updateQuestion"
    >
    </textarea>
    <div class="dialog__button" id="dialog-button" @click="updateQuestion">Отправить</div>
  </div>
</template>

<style lang="scss" scoped></style>
