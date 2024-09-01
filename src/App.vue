<script setup>
import { ref } from 'vue'
const day = ref(true)

import { RouterLink, RouterView } from 'vue-router'
import ArseneLupinHead from './components/arsene-lupin-image/ArseneLupinHead.vue'
import ArseneLupinBody from './components/arsene-lupin-image/ArseneLupinBody.vue'
import ArseneLupinArms from './components/arsene-lupin-image/ArseneLupinArms.vue'
import ArseneLupinLegs from './components/arsene-lupin-image/ArseneLupinLegs.vue'

import AnimatedWaves from './components/arsene-lupin-background/AnimatedWaves.vue'
import AnimatedSun from './components/arsene-lupin-background/day/AnimatedSun.vue'
</script>

<template>
  <RouterView>
    <div class="l-a-wrapper" :class="day ? 'l-a-wrapper_day' : 'l-a-wrapper_night'">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Об авторе</RouterLink>
        <button @click="day = !day">Включить ночь</button>
      </nav>
      <article>
        <div class="a-l-inf">
          <ArseneLupinHead />
          <ArseneLupinBody />
          <ArseneLupinArms />
          <ArseneLupinLegs />
        </div>

        <div class="a-l-background">
          <AnimatedWaves />
          <AnimatedSun />
        </div>
      </article>
    </div>
  </RouterView>
</template>

<style lang="scss" scoped></style>
