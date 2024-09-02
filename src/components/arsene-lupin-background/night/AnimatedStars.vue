<script setup></script>

<template>
  <div class="stars-container">
    <div class="stars-container__star" id="star1"></div>
    <div class="stars-container__star" id="star2"></div>
    <div class="stars-container__star" id="star3"></div>
    <div class="stars-container__star" id="star4"></div>
    <div class="stars-container__star" id="star5"></div>
  </div>
</template>

<style lang="scss" scoped>
.stars-container {
  position: absolute;
  z-index: 20;
  width: 100%;
  height: 100%;

  &__star {
    position: absolute;

    &::before {
      content: '';
      position: absolute;
      background-color: rgb(244, 244, 143);
      width: 8px;
      height: 13px;
      transform: rotate(-44deg) skewX(28.5deg) skewY(27.5deg);
    }

    &::after {
      content: '';
      position: absolute;
      background-color: rgb(244, 244, 143);
      width: 8px;
      height: 13px;
      transform: rotate(45deg) skewX(30.5deg) skewY(47.5deg);
    }
  }

  #star1 {
    left: 30%;
    top: -40px;
  }

  #star2 {
    left: 40%;
    top: 20px;
  }

  #star3 {
    left: 60%;
    top: -2px;
  }

  #star4 {
    left: 74%;
    top: 80px;
  }

  #star5 {
    left: 80%;
    top: 182px;
  }
}
</style>
