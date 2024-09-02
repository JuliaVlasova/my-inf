<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

import ArseneLupinBody from './components/arsene-lupin-image/ArseneLupinBody.vue'
import AnimatedWaves from './components/arsene-lupin-background/AnimatedWaves.vue'
import AnimatedSun from './components/arsene-lupin-background/day/AnimatedSun.vue'
import AnimatedLighthouse from './components/arsene-lupin-background/AnimatedLighthouse.vue'
import DayNightButton from './components/arsene-lupin-background/DayNightButton.vue'
import AnimatedStars from './components/arsene-lupin-background/night/AnimatedStars.vue'

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
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">Об авторе</RouterLink>
      <DayNightButton @click="changeDay" />
    </nav>
    <article>
      <ArseneLupinBody />

      <div class="a-l-background">
        <AnimatedWaves />
        <AnimatedSun />
        <AnimatedLighthouse />
        <AnimatedStars />
      </div>
    </article>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
