<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

import ArseneLupinBody from './components/arsene-lupin-image/ArseneLupinBody.vue'
import AnimatedWaves from './components/arsene-lupin-background/AnimatedWaves.vue'
import AnimatedSun from './components/arsene-lupin-background/day/AnimatedSun.vue'
import AnimatedLighthouse from './components/arsene-lupin-background/AnimatedLighthouse.vue'
import DayNightButton from './components/arsene-lupin-background/DayNightButton.vue'
import AnimatedStars from './components/arsene-lupin-background/night/AnimatedStars.vue'
import AnimatedIsland from './components/arsene-lupin-background/AnimatedIsland.vue'
import ArseneLupinDialogWindow from './components/arsene-lupin-dialogs/ArseneLupinDialogWidow.vue'

const day = ref(true)

function changeDay(event) {
  if (event) {
    day.value = !day.value
  }
}
</script>

<template>
  <div class="l-a-wrapper" :class="day ? 'l-a-wrapper_day' : 'l-a-wrapper_night'">
    <nav>
      <RouterLink to="/about">Об авторе</RouterLink>
      <DayNightButton @click="changeDay" />
    </nav>
    <article>
      <ArseneLupinDialogWindow />
      <ArseneLupinBody />

      <div class="a-l-background">
        <AnimatedWaves />
        <AnimatedSun />
        <AnimatedLighthouse />
        <AnimatedStars v-show="!day" />
        <AnimatedIsland />
      </div>
    </article>

    <RouterView />
  </div>
</template>

<style lang="scss" scoped></style>
