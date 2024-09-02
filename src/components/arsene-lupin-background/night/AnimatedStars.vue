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
  top: 0;
  left: 0;

  &__star {
    position: absolute;
    box-shadow: 0px 0px 40px 20px rgba(244, 244, 143, 0.9);

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
    animation: star 3s linear infinite;
    left: 30%;
    top: 40px;
  }

  #star2 {
    left: 40%;
    top: 75px;
    animation: star 7s linear infinite;
    animation-delay: 2s;
  }

  #star3 {
    left: 60%;
    top: 38px;
    animation: star 5s linear infinite;
    animation-delay: 1s;
  }

  #star4 {
    left: 74%;
    top: 120px;
    animation: star 4s linear infinite;
    animation-delay: 3s;
  }

  #star5 {
    animation: star 6s linear infinite;
    left: 80%;
    top: 222px;
  }
}

@keyframes star {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(0);
  }
  75% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
