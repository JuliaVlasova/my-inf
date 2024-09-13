<script setup>
import { onMounted } from 'vue'
import { AnimateCloud } from '../../../assets/js/animate-cloud'

onMounted(() => {
  if (window.innerWidth > 600) {
    AnimateCloud()
  }
})
</script>

<template>
  <div class="cloud-wrapper" id="cloud">
    <div class="cloud">
      <div class="cloud__inner">
        <div class="cloud__block cloud__block_1"></div>
        <div class="cloud__block cloud__block_2"></div>
        <div class="cloud__block cloud__block_3"></div>
        <div class="cloud__block cloud__block_4"></div>
        <div class="cloud__block cloud__block_5"></div>
        <div class="cloud__block cloud__block_6"></div>
      </div>
    </div>

    <div class="rain">
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
      <div class="rain__drop"></div>
    </div>
  </div>
</template>
