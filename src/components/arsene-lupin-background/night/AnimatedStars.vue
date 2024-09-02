<script setup>
import { ref } from 'vue'

import DayNightButton from '../DayNightButton.vue'
const day = ref(true)
const dayNightButton = ref(null)

function changeDay(event) {
  if (event) {
    day.value = !day.value
  }
} //????????????????????
</script>

<template>
  <div v-show="!day" ref="dayNightButton">
    <div class="star">*</div>
    <div class="star">*</div>
    <div class="star">*</div>
    <div class="star">*</div>
    <div class="star">*</div>
    <div class="star">*</div>
    <div class="star">*</div>
    <div class="star">*</div>
    <div class="star">*</div>
  </div>
</template>

<style lang="scss" scoped>
.star {
  color: #fff;
}
</style>
