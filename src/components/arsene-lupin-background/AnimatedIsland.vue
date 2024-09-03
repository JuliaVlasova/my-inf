<script setup></script>

<template>
  <div class="island"></div>
</template>

<style lang="scss" scoped>
.island {
  position: absolute;
  width: 1000px;
  height: 600px;
  background: linear-gradient(to top, lighten(#a4d15d, 2%), lighten(#a4d15d, 2%));
  bottom: -405px;
  right: -637px;
  border-radius: 100%;
  z-index: 30;

  .l-a-wrapper_night & {
    background: linear-gradient(to top, darken(#a4d15d, 28%), darken(#a4d15d, 28%));
  }
}
</style>
