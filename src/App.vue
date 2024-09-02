<script setup>
import { ref } from 'vue'
const day = ref(true)

import { RouterLink, RouterView } from 'vue-router'

import ArseneLupinBody from './components/arsene-lupin-image/ArseneLupinBody.vue'
import AnimatedWaves from './components/arsene-lupin-background/AnimatedWaves.vue'
import AnimatedSun from './components/arsene-lupin-background/day/AnimatedSun.vue'
import AnimatedLighthouse from './components/arsene-lupin-background/AnimatedLighthouse.vue'
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
        <ArseneLupinBody />

        <div class="a-l-background">
          <AnimatedWaves />
          <AnimatedSun />
          <AnimatedLighthouse />
        </div>
      </article>
    </div>
  </RouterView>
</template>

<style lang="scss" scoped></style>
