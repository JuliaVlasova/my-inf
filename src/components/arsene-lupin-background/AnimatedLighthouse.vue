<script setup></script>

<template>
  <div class="lighthouse">
    <div class="window"></div>
    <div class="window"></div>
    <div class="window"></div>
    <div class="house">
      <div class="balcony"></div>
      <div class="balcony-2"></div>
      <div class="balcony-3"></div>
      <div class="light">
        <div class="light-inner"></div>
      </div>
      <div class="roof"></div>
      <div class="roof-2"></div>
      <div class="roof-3"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lighthouse {
  position: absolute;
  bottom: -22px;
  height: 340px;
  width: 130px;
  left: 130px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 1;
  background: repeating-linear-gradient(30deg, #f08c85, #f08c85 40px, #fff 40px, #fff 80px);
  animation: sway 4s linear infinite alternate;

  @media screen and (max-width: 940px) {
    animation: sway-mobile 3s linear infinite alternate;
    left: -60px;
  }

  .window {
    width: 40px;
    height: 40px;
    background: #fdc856;
    border: 6px solid #c02121;
    left: 50%;
    position: relative;
    transform: translateX(-50%);
    border-radius: 50%;

    &::before {
      display: block;
      content: '';
      position: absolute;
      width: 4px;
      height: 30px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #c02121;
    }

    &::after {
      display: block;
      content: '';
      position: absolute;
      width: 30px;
      height: 4px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #c02121;
    }
  }

  .balcony {
    position: absolute;
    height: 40px;
    width: 170px;
    border-bottom: 5px solid #93b4dc;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;

    &::before {
      content: '';
      display: block;
      position: absolute;
      height: 5px;
      width: 170px;
      background: #c4d9fb;
      bottom: 0;
    }
  }

  .balcony-2 {
    position: absolute;
    bottom: 20px;
    top: 0;
    left: 25%;
    right: 25%;
    border-left: 5px solid #93b4dc;
    border-right: 5px solid #93b4dc;
    z-index: 5;
  }

  .balcony-3 {
    position: absolute;
    bottom: 30px;
    z-index: 5;
    height: 20px;
    left: -20px;
    right: -20px;
    border-top: 5px solid #93b4dc;
    border-left: 5px solid #93b4dc;
    border-right: 5px solid #93b4dc;

    &::before {
      content: '';
      display: block;
      position: absolute;
      background: #93b4dc;
      height: 20px;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      width: 5px;
    }
  }

  .house {
    position: absolute;
    width: 130px;
    height: 100px;
    top: -100px;
    border-top: 5px solid #93b4dc;
    border-left: 5px solid #93b4dc;
    border-right: 5px solid #93b4dc;
    background: #fdc856;

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: -5px;
      right: -5px;
      bottom: 0;
      height: 10px;
      background: #93b4dc;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      bottom: 10px;
      width: 150px;
      height: 10px;
      background: #c4d9fb;
      transform: translateX(-50%);
    }

    .light {
      position: absolute;
      width: 35px;
      height: 35px;
      border-radius: 100%;
      background: #fbe26b;
      top: 15px;
      left: 50%;
      transform: translate(-50%);
      border: 4px solid #fba31d;

      .l-a-wrapper_night & {
        animation: light 5s linear infinite;
      }

      &::before {
        content: '';
        display: block;
        position: absolute;
        height: 20px;
        width: 120px;
        left: 50%;
        transform: translate(-50%);
        bottom: -20px;
        background: #fba31d;
      }
    }

    .roof {
      position: absolute;
      height: 20px;
      left: -5px;
      right: -5px;
      z-index: 5;
      top: -20px;
      background: #93b4dc;

      &::before {
        content: '';
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 20px 10px 0 10px;
        border-color: #93b4dc transparent transparent transparent;
        z-index: 5;
        left: -10px;
        top: 0;
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 20px 10px 0 10px;
        border-color: #93b4dc transparent transparent transparent;
        right: -10px;
        z-index: 5;
        top: 0;
      }
    }

    .roof-2 {
      position: absolute;
      height: 20px;
      top: -40px;
      left: -15px;
      right: -15px;
      z-index: 5;
      background: #c4d9fb;

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: -10px;
        height: 10px;
        left: 0;
        right: 0;
        background: #93b4dc;
      }
    }

    .roof-3 {
      position: absolute;
      width: 130px;
      height: 65px;
      border-radius: 50%;
      background: #611949;
      left: 50%;
      top: -82.5px;
      transform: translate(-50%);
      z-index: 0;

      &::before {
        content: '';
        display: block;
        position: absolute;
        background: #fd8682;
        width: 30px;
        height: 30px;
        top: -26px;
        border-radius: 50%;
        left: 50%;
        transform: translate(-50%);
      }
    }
  }
}

@keyframes sway {
  0% {
    transform: rotate(-15deg);
  }
  25% {
    transform: rotate(-7deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(7deg);
  }
  100% {
    transform: rotate(15deg);
  }
}

@keyframes sway-mobile {
  0% {
    transform: rotate(-8deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(8deg);
  }
}

@keyframes light {
  0% {
    box-shadow:
      0 0 0 80px rgba(#fbe26b, 0.2),
      0 0 0 150px rgba(#fbe26b, 0.1);
  }
  50% {
    box-shadow:
      0 0 0 80px rgba(#fbe26b, 0),
      0 0 0 150px rgba(#fbe26b, 0);
  }
  100% {
    box-shadow:
      0 0 0 80px rgba(#fbe26b, 0.2),
      0 0 0 150px rgba(#fbe26b, 0.1);
  }
}
</style>
