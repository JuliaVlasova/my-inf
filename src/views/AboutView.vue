<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="page-layout">
    <div class="page-layout__inner">
      Этот автор хочет освоить Vue.js, поэтому что-то тут ковыряет =)
    </div>
    <RouterLink to="/"><span class="page-layout__close"></span></RouterLink>
  </div>
</template>
