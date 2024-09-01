<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import ArseneLupinHead from './components/arsene-lupin-image/ArseneLupinHead.vue'
import ArseneLupinBody from './components/arsene-lupin-image/ArseneLupinBody.vue'
import ArseneLupinArms from './components/arsene-lupin-image/ArseneLupinArms.vue'
import ArseneLupinLegs from './components/arsene-lupin-image/ArseneLupinLegs.vue'
</script>

<template>
        <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  <header>
    <div class="wrapper">
      <ArseneLupinHead />
      <ArseneLupinBody />
      <ArseneLupinArms />
      <ArseneLupinLegs />
    </div>
  </header>


</template>

<style lang="scss" scoped>
 
</style>
