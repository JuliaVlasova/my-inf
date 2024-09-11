<script setup></script>

<template>
  <div class="sunshine">
    <div class="sun sunshine__one"></div>
    <div class="sun sunshine__two"></div>
    <div class="sun sunshine__three"></div>
    <div class="sun sunshine__four"></div>
    <div class="sun sunshine__five"></div>
  </div>
</template>

<style lang="scss" scoped>
.sunshine {
  margin: 50px auto;
  width: 200px;
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (max-width: 940px) {
    top: -30px;
    right: -90px;
    margin: 0;
  }

  .sun {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }

  &__one {
    background-color: rgb(255 255 104);
    box-shadow: 0px 0px 100px 1px rgba(255, 255, 26, 0.75);
    transform: rotate(0deg);
    position: relative;
    z-index: 40;
    animation-name: sunshine__one;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    &.sun {
      border-radius: 100%;
    }

    .l-a-wrapper_night & {
      background-color: rgb(244 244 143);
      animation: moon 2s linear infinite;
    }
  }

  &__two {
    background-color: rgba(255, 184, 77, 0.7);
    box-shadow: 0px 0px 0px 1px rgba(255, 184, 77, 0.75);
    transform: rotate(18deg);
    position: relative;
    z-index: 30;
    bottom: 100px;
    animation-name: sunshine__two;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    .l-a-wrapper_night & {
      display: none;
    }
  }

  &__three {
    background-color: rgba(255, 255, 0, 7);
    box-shadow: 0px 0px 100px 1px rgba(255, 255, 0, 0.75);
    transform: rotate(36deg);
    position: relative;
    z-index: 20;
    bottom: 200px;
    animation-name: sunshine__three;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    .l-a-wrapper_night & {
      display: none;
    }
  }

  &__four {
    box-shadow: 0px 0px 1000px 1px rgba(255, 194, 102, 0.75);
    background-color: rgba(255, 194, 102, 0.75);
    transform: rotate(54deg);
    position: relative;
    z-index: 10;
    bottom: 300px;
    animation-name: sunshine__four;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    .l-a-wrapper_night & {
      display: none;
    }
  }

  &__five {
    background-color: rgba(255, 255, 26, 0.7);
    box-shadow: 0px 0px 1000px 1px rgba(255, 255, 26, 0.75);
    transform: rotate(72deg);
    position: relative;
    z-index: 1;
    bottom: 400px;
    animation-name: sunshine__five;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    .l-a-wrapper_night & {
      display: none;
    }
  }
}

@keyframes sunshine__one {
  from {
    transform: rotate(360deg);
    box-shadow: 0px 0px 0px 1px rgba(255, 255, 26, 0.9);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes sunshine__two {
  from {
    transform: rotate(-342deg);
    box-shadow: 0px 0px 100px 1px rgba(255, 184, 77, 0.9);
  }
  to {
    transform: rotate(18deg);
  }
}

@keyframes sunshine__three {
  from {
    transform: rotate(396deg);
    box-shadow: 0px 0px 0px 1px rgba(255, 255, 0, 0.9);
  }
  to {
    transform: rotate(36deg);
  }
}

@keyframes sunshine__four {
  from {
    transform: rotate(-306deg);
    box-shadow: 0px 0px 100px 1px rgba(255, 194, 102, 0.9);
  }
  to {
    transform: rotate(54deg);
  }
}

@keyframes sunshine__five {
  from {
    transform: rotate(430deg);
    box-shadow: 0px 0px 0px 1px rgba(255, 255, 26, 0.9);
  }
  to {
    transform: rotate(72deg);
  }
}

@keyframes moon {
  0% {
    box-shadow: 0px 0px 20px 3px rgba(244, 244, 143, 0.9);
  }
  25% {
    box-shadow: 0px 0px 40px 10px rgba(244, 244, 143, 0.9);
  }
  50% {
    box-shadow: 0px 0px 40px 20px rgba(244, 244, 143, 0.9);
  }
  75% {
    box-shadow: 0px 0px 40px 10px rgba(244, 244, 143, 0.9);
  }
  100% {
    box-shadow: 0px 0px 20px 3px rgba(244, 244, 143, 0.9);
  }
}
</style>
