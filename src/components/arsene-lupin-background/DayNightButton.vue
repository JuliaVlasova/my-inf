<script setup>
import { ref } from 'vue'

const day = ref(true)
const buttonText = ref('Включить ночь')

function changeDay(event) {
  if (event) {
    day.value = !day.value
    buttonText.value = day.value ? 'Включить ночь' : 'Включить день'
  }
}

defineExpose({
  day
})
</script>

<template>
  <button @click="changeDay" class="night-day-button">
    {{ buttonText }}
  </button>
</template>

<style lang="scss" scoped></style>
