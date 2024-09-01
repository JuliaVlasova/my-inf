<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ArseneLupinHead from './components/arsene-lupin-image/ArseneLupinHead.vue'
import ArseneLupinBody from './components/arsene-lupin-image/ArseneLupinBody.vue'
import ArseneLupinArms from './components/arsene-lupin-image/ArseneLupinArms.vue'
import ArseneLupinLegs from './components/arsene-lupin-image/ArseneLupinLegs.vue'
</script>

<template>
  <RouterView>
    <div class="l-a-wrapper l-a-wrapper_day">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <article>
        <div class="a-l-inf">
          <ArseneLupinHead />
          <ArseneLupinBody />
          <ArseneLupinArms />
          <ArseneLupinLegs />
        </div>

        <div class="a-l-background"></div>
      </article>
    </div>
  </RouterView>
</template>

<style lang="scss" scoped></style>
