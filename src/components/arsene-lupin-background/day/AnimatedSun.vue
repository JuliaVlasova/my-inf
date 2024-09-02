<script setup></script>

<template>
  <div id="sunshine">
    <div id="one" class="sun"></div>
    <div id="two" class="sun"></div>
    <div id="three" class="sun"></div>
    <div id="four" class="sun"></div>
    <div id="five" class="sun"></div>
  </div>
</template>

<style lang="scss" scoped>
#sunshine {
  margin: 50px auto;
  width: 200px;
  position: absolute;
  top: 0;
  right: 0;
}
.sun {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 20px;
}
#one {
  background-color: rgb(255 255 104);
  box-shadow: 0px 0px 100px 1px rgba(255, 255, 26, 0.75);
  transform: rotate(0deg);
  position: relative;
  z-index: 40;
  animation-name: one;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  border-radius: 100%;

  .l-a-wrapper_night & {
    animation: moon 2s linear infinite;
  }
}
#two {
  background-color: rgba(255, 184, 77, 0.7);
  box-shadow: 0px 0px 0px 1px rgba(255, 184, 77, 0.75);
  transform: rotate(18deg);
  position: relative;
  z-index: 30;
  bottom: 100px;
  animation-name: two;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  .l-a-wrapper_night & {
    display: none;
  }
}
#three {
  background-color: rgba(255, 255, 0, 7);
  box-shadow: 0px 0px 100px 1px rgba(255, 255, 0, 0.75);
  transform: rotate(36deg);
  position: relative;
  z-index: 20;
  bottom: 200px;
  animation-name: three;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  .l-a-wrapper_night & {
    display: none;
  }
}
#four {
  box-shadow: 0px 0px 1000px 1px rgba(255, 194, 102, 0.75);
  background-color: rgba(255, 194, 102, 0.75);
  transform: rotate(54deg);
  position: relative;
  z-index: 10;
  bottom: 300px;
  animation-name: four;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  .l-a-wrapper_night & {
    display: none;
  }
}
#five {
  background-color: rgba(255, 255, 26, 0.7);
  box-shadow: 0px 0px 1000px 1px rgba(255, 255, 26, 0.75);
  transform: rotate(72deg);
  position: relative;
  z-index: 1;
  bottom: 400px;
  animation-name: five;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  .l-a-wrapper_night & {
    display: none;
  }
}
#bottom {
  width: 400px;
  animation-name: bottom;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@media only screen and (max-width: 600px) {
  #top {
    width: 50px;
    animation-name: top-small;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  #bottom {
    width: 200px;
    animation-name: bottom-small;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes top-small {
    from {
      width: 200px;
    }
    to {
      width: 50px;
    }
  }
  @keyframes bottom-small {
    from {
      width: 50px;
    }
    to {
      width: 200px;
    }
  }
}
@keyframes one {
  from {
    transform: rotate(360deg);
    box-shadow: 0px 0px 0px 1px rgba(255, 255, 26, 0.9);
  }
  to {
    transform: rotate(0deg);
  }
}
@keyframes two {
  from {
    transform: rotate(-342deg);
    box-shadow: 0px 0px 100px 1px rgba(255, 184, 77, 0.9);
  }
  to {
    transform: rotate(18deg);
  }
}
@keyframes three {
  from {
    transform: rotate(396deg);
    box-shadow: 0px 0px 0px 1px rgba(255, 255, 0, 0.9);
  }
  to {
    transform: rotate(36deg);
  }
}
@keyframes four {
  from {
    transform: rotate(-306deg);
    box-shadow: 0px 0px 100px 1px rgba(255, 194, 102, 0.9);
  }
  to {
    transform: rotate(54deg);
  }
}
@keyframes five {
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
    box-shadow: 0px 0px 20px 3px rgba(255, 255, 26, 0.9);
  }
  25% {
    box-shadow: 0px 0px 40px 10px rgba(255, 255, 26, 0.9);
  }
  50% {
    box-shadow: 0px 0px 40px 20px rgba(255, 255, 26, 0.9);
  }
  75% {
    box-shadow: 0px 0px 40px 10px rgba(255, 255, 26, 0.9);
  }
  100% {
    box-shadow: 0px 0px 20px 3px rgba(255, 255, 26, 0.9);
  }
}
@keyframes top {
  from {
    width: 400px;
  }
  to {
    width: 400px;
  }
}
@keyframes bottom {
  from {
    width: 100px;
  }
  to {
    width: 400px;
  }
}
</style>
