<script setup></script>

<template>
  <div class="a-l-inf" id="arsene-lupin">
    <div class="a-l-inf__head">
      <div class="a-l-inf__hair-a-l-inf a-l-inf__hair-a-l-inf_first">
        <div class="a-l-inf__hair1"></div>
        <div class="a-l-inf__hair2"></div>
        <div class="a-l-inf__hair3"></div>
        <div class="a-l-inf__hair4"></div>
        <div class="a-l-inf__hair5"></div>
        <div class="a-l-inf__hair6"></div>
        <div class="a-l-inf__hair7"></div>
        <div class="a-l-inf__hair8"></div>
        <div class="a-l-inf__hair9"></div>
      </div>
      <div class="a-l-inf__hair-a-l-inf a-l-inf__hair-a-l-inf_second">
        <div class="a-l-inf__hair1"></div>
        <div class="a-l-inf__hair2"></div>
        <div class="a-l-inf__hair3"></div>
        <div class="a-l-inf__hair4"></div>
        <div class="a-l-inf__hair5"></div>
        <div class="a-l-inf__hair6"></div>
        <div class="a-l-inf__hair7"></div>
        <div class="a-l-inf__hair8"></div>
        <div class="a-l-inf__hair9"></div>
      </div>
      <div class="a-l-inf__ear" id="ear-left"><div class="a-l-inf__ear-inside"></div></div>
      <div class="a-l-inf__eyebrow" id="eyebrow-left"></div>
      <div class="a-l-inf__eyebrow" id="eyebrow-right"></div>
      <div class="a-l-inf__eye" id="eye-left">
        <div class="a-l-inf__eyeball" id="eyeball-left"></div>
        <div class="a-l-inf__eyelid" id="lower"></div>
        <div class="a-l-inf__eyelid" id="upper"></div>
      </div>
      <!--
      <div class="eye" id="left" style="background-color:transparent"></div>
-->
      <div class="a-l-inf__eye" id="eye-right">
        <div class="a-l-inf__eyeball" id="eyeball-right"></div>
        <div class="a-l-inf__eyelid" id="lower"></div>
        <div class="a-l-inf__eyelid" id="upper"></div>
      </div>
      <!--
      <div class="eye" id="right" style="background-color:transparent"></div>
-->
      <div class="a-l-inf__nose"></div>
      <div class="a-l-inf__mouth">
        <div class="a-l-inf__upper-lip"></div>
        <div class="a-l-inf__mouth-line"></div>
        <div class="a-l-inf__lower-lip"></div>
      </div>
    </div>
    <div class="a-l-inf__ear" id="ear-right"><div class="a-l-inf__ear-inside"></div></div>
    <div class="a-l-inf__body">
      <div class="a-l-inf__shirt" id="shirt-left"></div>
      <div class="a-l-inf__shirt" id="shirt-right"></div>
      <div class="a-l-inf__tummy"></div>
      <div class="a-l-inf__arm-left"></div>
      <div class="a-l-inf__overalls-main"></div>
      <div class="a-l-inf__overalls-strap-left"></div>
      <div class="a-l-inf__overalls-strap-left-cover"></div>
      <div class="a-l-inf__overalls-strap-right"></div>
      <div class="a-l-inf__overalls-side-right"></div>
      <div class="a-l-inf__overalls-neck"></div>
      <div class="a-l-inf__button-left"></div>
      <div class="a-l-inf__button-right"></div>
      <div class="a-l-inf__bok"></div>
      <div class="a-l-inf__leg-left"></div>
      <div class="a-l-inf__leg-left-bottom"></div>
      <div class="a-l-inf__leg-middle"></div>
      <div class="a-l-inf__leg-right"></div>
      <div class="a-l-inf__leg-right-bottom"></div>
      <div class="a-l-inf__shoe-right"></div>
      <div class="a-l-inf__shoe-left"></div>
      <div class="a-l-inf__hand-right">
        <div class="a-l-inf__finger1"></div>
        <div class="a-l-inf__finger2"></div>
      </div>
      <div class="a-l-inf__hand-left">
        <div class="a-l-inf__finger1"></div>
        <div class="a-l-inf__finger2"></div>
        <div class="a-l-inf__finger3"></div>
        <div class="a-l-inf__palm"></div>
        <div class="a-l-inf__finger4"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.a-l-inf {
  position: absolute;
  z-index: 300;
  bottom: 40px;
  right: 40px;
  width: 204px;
  height: 212px;

  &__head {
    width: 95px;
    height: 81px;
    background-color: antiquewhite;
    transform: rotate(-89deg);
    position: absolute;
    left: 68px;
    border: 1px solid #373333;
    z-index: 5;
    border-radius: 100%;
  }
  &__hair-a-l-inf {
    position: absolute;
    width: 100%;
    height: 100%;

    &_first {
      z-index: 2;

      .a-l-inf__hair1 {
        width: 31px;
        height: 22px;
        background: #000;
        border-radius: 100%;
        position: absolute;
        top: -15px;
        left: 39px;
      }
      .a-l-inf__hair2 {
        width: 30px;
        height: 30px;
        background: #000;
        border-radius: 100%;
        position: absolute;
        top: -15px;
        left: 55px;
      }
      .a-l-inf__hair3 {
        width: 35px;
        height: 40px;
        background: #000;
        border-radius: 100%;
        position: absolute;
        top: -5px;
        left: 65px;
      }
      .a-l-inf__hair4 {
        width: 13px;
        height: 10px;
        background: #000;
        border-radius: 100%;
        position: absolute;
        top: 76px;
        left: 67px;
      }
      .a-l-inf__hair5 {
        width: 23px;
        height: 16px;
        background: #000;
        border-radius: 100%;
        position: absolute;
        top: 69px;
        left: 54px;
      }
      .a-l-inf__hair6 {
        width: 30px;
        height: 30px;
        background: #000;
        border-radius: 100%;
        position: absolute;
        top: 47px;
        left: 71px;
      }
      .a-l-inf__hair7 {
        width: 40px;
        height: 40px;
        background: #000;
        border-radius: 100%;
        position: absolute;
        top: 20px;
        left: 68px;
      }
      .a-l-inf__hair8 {
        width: 20px;
        height: 20px;
        background: #000;
        border-radius: 100%;
        position: absolute;
        top: 50px;
        left: 71px;
      }
      .a-l-inf__hair9 {
        width: 20px;
        height: 20px;
        background: #000;
        border-radius: 100%;
        position: absolute;
        top: 61px;
        left: 67px;
      }
    }

    &_second {
      margin-left: 10px;
      margin-top: -3px;
      z-index: 1;

      .a-l-inf__hair1 {
        width: 31px;
        height: 22px;
        background: #000;
        border-radius: 100%;
        position: absolute;
        top: -15px;
        left: 39px;
      }
      .a-l-inf__hair2 {
        width: 30px;
        height: 30px;
        background: #000;
        border-radius: 100%;
        position: absolute;
        top: -15px;
        left: 55px;
      }
      .a-l-inf__hair3 {
        width: 35px;
        height: 40px;
        background: #000;
        border-radius: 100%;
        position: absolute;
        top: -5px;
        left: 65px;
      }
      .a-l-inf__hair4 {
        width: 13px;
        height: 10px;
        background: #000;
        border-radius: 100%;
        position: absolute;
        top: 76px;
        left: 67px;
      }
      .a-l-inf__hair5 {
        width: 23px;
        height: 16px;
        background: #000;
        border-radius: 100%;
        position: absolute;
        top: 69px;
        left: 54px;
      }
      .a-l-inf__hair6 {
        width: 30px;
        height: 30px;
        background: #000;
        border-radius: 100%;
        position: absolute;
        top: 47px;
        left: 71px;
      }
      .a-l-inf__hair7 {
        width: 40px;
        height: 40px;
        background: #000;
        border-radius: 100%;
        position: absolute;
        top: 20px;
        left: 68px;
      }
      .a-l-inf__hair8 {
        width: 20px;
        height: 20px;
        background: #000;
        border-radius: 100%;
        position: absolute;
        top: 50px;
        left: 71px;
      }
      .a-l-inf__hair9 {
        width: 20px;
        height: 20px;
        background: #000;
        border-radius: 100%;
        position: absolute;
        top: 61px;
        left: 67px;
      }
    }
  }

  &__ear#ear-left {
    width: 16px;
    width: 19px;
    height: 11px;
    background-color: antiquewhite;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 36px;
    border-top-left-radius: 40px;
    transform: rotate(-12deg);
    position: absolute;
    left: 25px;
    top: -7px;
    border: 1px solid #000;
    border-bottom-style: none;
    z-index: 2;

    .a-l-inf__ear-inside {
      width: 8px;
      height: 17px;
      border-top: 1px solid #000;
      border-top-left-radius: 7px;
      position: absolute;
      top: 2px;
      left: 0px;
      transform: rotate(37deg);
    }
  }

  &__ear#ear-right {
    width: 19px;
    height: 11px;
    background-color: antiquewhite;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 45px;
    border-top-right-radius: 50px;
    border-top-left-radius: 40px;
    transform: rotate(-95deg);
    position: absolute;
    left: 148px;
    top: 34px;
    border: 1px solid #000;
    border-top-style: none;
    z-index: 12;

    .a-l-inf__ear-inside {
      width: 8px;
      height: 17px;
      border-bottom: 1px solid #000;
      border-bottom-left-radius: 7px;
      position: absolute;
      top: -8px;
      left: 1px;
      transform: rotate(-33deg);
    }
  }

  &__ear-cover {
    width: 13px;
    height: 16px;
    background-color: antiquewhite;
    border-bottom-left-radius: 45px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    transform: rotate(-48deg);
    position: absolute;
    left: 108px;
    top: 108px;
    z-index: 2;
  }
  &__eye#eye-left {
    width: 12px;
    height: 19px;
    background-color: white;
    border: 1px solid;
    transform: rotate(-5deg);
    position: absolute;
    left: 38px;
    top: 15px;
    z-index: 2;
    overflow: hidden;
    border-radius: 100%;

    .a-l-inf__eyeball {
      width: 8px;
      height: 8px;
      background-color: black;
      border-radius: 100px;
      position: absolute;
      left: 2px;
      top: 1px;
      z-index: 3;
    }
    .a-l-inf__eyelid#lower {
      width: 24px;
      height: 1px;
      border-top: 1px solid;
      transform: rotate(90deg);
      position: absolute;
      left: -11px;
      top: 3px;
      z-index: 3;
      transition: all 200ms ease;

      &:after {
        content: '';
        width: 25px;
        height: 25px;
        background-color: antiquewhite;
        position: absolute;
        left: 5px;
        top: 0px;
        z-index: 3;
      }
    }

    .a-l-inf__eyelid#upper {
      width: 25px;
      height: 1px;
      border-top: 1px solid;
      transform: rotate(92deg);
      position: absolute;
      left: -5px;
      top: 6px;
      z-index: 3;
      transition: all 200ms ease;

      &:after {
        content: '';
        width: 25px;
        height: 25px;
        background-color: antiquewhite;
        position: absolute;
        left: 2px;
        bottom: 1px;
        z-index: 3;
      }
    }
  }

  &__eye#eye-right {
    width: 12px;
    height: 19px;
    background-color: white;
    border: 1px solid;
    transform: rotate(-5deg);
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 2;
    overflow: hidden;
    border-radius: 100%;

    .a-l-inf__eyeball {
      width: 8px;
      height: 8px;
      background-color: black;
      border-radius: 100px;
      position: absolute;
      left: 2px;
      top: 1px;
      z-index: 3;
    }
    .a-l-inf__eyelid#lower {
      width: 24px;
      height: 1px;
      border-top: 1px solid;
      transform: rotate(90deg);
      position: absolute;
      left: -11px;
      top: 3px;
      z-index: 3;
      transition: all 200ms ease;

      &:after {
        content: '';
        width: 25px;
        height: 25px;
        background-color: antiquewhite;
        position: absolute;
        left: 5px;
        top: 0px;
        z-index: 3;
      }
    }
    .a-l-inf__eyelid#upper {
      width: 25px;
      height: 1px;
      border-top: 1px solid;
      transform: rotate(92deg);
      position: absolute;
      left: -5px;
      top: 6px;
      z-index: 3;
      transition: all 200ms ease;

      &:after {
        content: '';
        width: 25px;
        height: 25px;
        background-color: antiquewhite;
        position: absolute;
        left: 2px;
        bottom: 1px;
        z-index: 3;
      }
    }
  }

  &__eyebrow#eyebrow-right {
    width: 22px;
    height: 1px;
    border-top: 2px solid;
    transform: rotate(70deg);
    position: absolute;
    left: 47px;
    top: 58px;
    z-index: 3;
    border-radius: 100%;
    transition: all 200ms ease;
  }
  &__eyebrow#eyebrow-left {
    width: 22px;
    height: 1px;
    border-top: 2px solid;
    transform: rotate(107deg);
    position: absolute;
    left: 47px;
    top: 23px;
    z-index: 3;
    border-radius: 100%;
    transition: all 200ms ease;
  }
  &__nose {
    width: 6px;
    height: 14px;
    background-color: transparent;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    position: absolute;
    left: 32px;
    top: 36px;
    z-index: 3;
    transform: rotate(57deg);
  }
  &__mouth {
    position: absolute;
    top: -30px;
    left: 32px;
    transform: rotate(45deg);
    width: 40px;
    height: 30px;
  }
  &__upper-lip {
    width: 6px;
    height: 18px;
    border-top: 1px solid #000;
    border-top-left-radius: 7px;
    position: absolute;
    top: 80px;
    left: 49px;
    transform: rotate(-60deg);

    display: none;
  }
  &__mouth-line {
    width: 21px;
    height: 19px;
    border-top: 1px solid #000;
    border-top-left-radius: 20px 4px;
    position: absolute;
    top: 79px;
    left: 23px;
    transform: rotate(44deg);
    transition: all 200ms ease;

    //new
    width: 26px;
    height: 19px;
    border-top: 2px solid #7c0909;
    border-top-left-radius: 20px 4px;
    position: absolute;
    top: 77px;
    left: 18px;
    transform: rotate(44deg);
    transition: all 200ms ease;
  }
  &__lower-lip {
    width: 6px;
    height: 17px;
    border-top: 1px solid #000;
    border-top-left-radius: 7px;
    position: absolute;
    top: 84px;
    left: 35px;
    transform: rotate(20deg);

    //new
    width: 14px;
    height: 1px;
    border-top: 2px solid #7c0909;
    border-radius: 100%;
    position: absolute;
    top: 83px;
    left: 29px;
    transform: rotate(41deg);
  }
  &__shirt#shirt-left {
    position: absolute;
    width: 59px;
    height: 64px;
    background-color: #8c8b82;
    border: 2px solid #000;
    top: 76px;
    left: 68px;
    border-top-left-radius: 70px;
    border-bottom: none;
    border-right: none;
  }
  &__shirt#shirt-right {
    position: absolute;
    width: 49px;
    height: 74px;
    background-color: #8c8b82;
    border: 2px solid #000;
    top: 74px;
    left: 103px;
    transform: rotate(-10deg);
    border-top-right-radius: 137px 90px;
    border-bottom-right-radius: 13px;
    border-left: none;
    z-index: -1;
  }
  &__tummy {
    position: absolute;
    width: 32px;
    height: 5px;
    border-top: 2px solid #000;
    top: 120px;
    left: 129px;
    border-top-right-radius: 40px 10px;
    transform: rotate(75deg);
    z-index: 5;
  }
  &__arm-left {
    position: absolute;
    width: 26px;
    height: 17px;
    border-top: 2px solid #000;
    top: 125px;
    left: 65px;
    border-right: 2px solid;
    transform: rotate(100deg);
    border-top-right-radius: 5px 9px;
    border-bottom-right-radius: 8px 5px;
    z-index: 5;
    background-color: #8c8b82;
    border-bottom-left-radius: 19px;
  }
  &__overalls-main {
    position: absolute;
    width: 62px;
    height: 63px;
    background-color: #051959;
    top: 120px;
    left: 86px;
  }
  &__overalls-strap-left {
    position: absolute;
    width: 12px;
    height: 41px;
    border-right: 2px solid #000;
    border-top-right-radius: 100px;
    background-color: #051959;
    top: 85px;
    left: 96px;
    z-index: 1;
  }
  &__overalls-strap-right {
    position: absolute;
    width: 50px;
    height: 11px;
    border-top: 2px solid;
    border-left: 2px solid;
    border-top-left-radius: 32px;
    background-color: #051959;
    transform: rotate(87deg);
    top: 100px;
    left: 110px;
  }
  &__overalls-neck {
    position: absolute;
    width: 26px;
    height: 41px;
    background-color: #8c8b82;
    border: 2px solid #000;
    top: 84px;
    left: 105px;
    transform: rotate(-6deg);
    border-left: none;
    border-top: none;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 4px;
    z-index: 0;
  }
  &__button-right {
    width: 14px;
    height: 14px;
    border-radius: 100px;
    border: 2px solid #000;
    position: absolute;
    top: 116px;
    left: 128px;
    z-index: 6;
    background-color: #d8a410;
  }
  &__button-left {
    width: 14px;
    height: 14px;
    border-radius: 100px;
    border: 2px solid #000;
    position: absolute;
    top: 119px;
    left: 95px;
    z-index: 6;
    background-color: #d8a410;
  }
  &__overalls-strap-left-cover {
    width: 45px;
    height: 20px;
    border-top: 2px solid #000;
    border-right: 2px solid #000;
    border-top-right-radius: 16px;
    border-left: 2px solid #000;
    border-bottom-left-radius: 28px;
    position: absolute;
    top: 98px;
    left: 66px;
    background-color: #8c8b82;
    transform: rotate(89deg) skew(11deg, 2deg);
    z-index: 1;
  }
  &__overalls-side-right {
    width: 7px;
    height: 15px;
    border-bottom: 2px solid #000;
    border-left: 2px solid #000;
    border-bottom-left-radius: 17px;
    position: absolute;
    top: 118px;
    left: 139px;
    background-color: #8c8b82;
    z-index: 2;
  }
  &__bok {
    width: 60px;
    height: 60px;
    border-radius: 40px;
    border-bottom: 2px solid #000;
    border-left: 2px solid #000;
    position: absolute;
    top: 109px;
    left: 72px;
    z-index: -1;
    background-color: #051959;
  }
  &__leg-left {
    width: 10px;
    height: 27px;
    border-left: 2px solid #000;
    border-bottom-left-radius: 7px;
    background-color: #051959;
    position: absolute;
    top: 160px;
    left: 80px;
    transform: rotate(3deg);
  }
  &__leg-left-bottom {
    width: 37px;
    height: 7px;
    border-bottom: 2px solid #000;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    background-color: #051959;
    position: absolute;
    top: 181px;
    left: 82px;
    transform: rotate(-3deg);
    z-index: 7;
  }
  &__leg-middle {
    width: 10px;
    height: 30px;
    border-right: 2px solid #000;
    border-bottom-right-radius: 7px;
    background-color: #051959;
    position: absolute;
    top: 157px;
    left: 110px;
    transform: rotate(-1deg);
    z-index: 6;
  }
  &__leg-right {
    width: 10px;
    height: 48px;
    border-right: 2px solid #000;
    border-bottom-right-radius: 7px 44px;
    background-color: #051959;
    position: absolute;
    top: 135px;
    left: 140px;
    transform: rotate(-5deg);
  }
  &__leg-right-bottom {
    width: 28px;
    height: 8px;
    border-bottom: 2px solid #000;
    border-bottom-right-radius: 45px 30px;
    border-bottom-left-radius: 30px 20px;
    background-color: #051959;
    position: absolute;
    top: 178px;
    left: 120px;
    transform: rotate(-3deg);
  }
  &__shoe-right {
    width: 40px;
    height: 16px;
    position: absolute;
    top: 180px;
    left: 118px;
    border: 2px solid #000;
    z-index: -1;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px 8px;
    border-bottom-left-radius: 30px 10px;
    background-color: #000000;
  }
  &__shoe-left {
    width: 42px;
    height: 22px;
    position: absolute;
    top: 178px;
    left: 74px;
    border: 2px solid #000;
    z-index: -1;
    border-top-left-radius: 30px 20px;
    border-bottom-left-radius: 12px 6px;
    border-bottom-right-radius: 30px 10px;
    background-color: #000000;
    transform: rotate(-5deg);
  }
  &__hand-left &__palm {
    width: 9px;
    height: 8px;
    position: absolute;
    left: 75px;
    top: 145px;
    background-color: antiquewhite;
  }
  &__hand-left &__finger1 {
    width: 5px;
    height: 6px;
    position: absolute;
    left: 68px;
    top: 145px;
    background-color: antiquewhite;
    border: 2px solid #000;
    border-top: none;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  &__hand-left &__finger2 {
    width: 4px;
    height: 7px;
    position: absolute;
    left: 72px;
    top: 149px;
    background-color: antiquewhite;
    border: 2px solid #000;
    border-top: none;
    border-bottom-left-radius: 10px 27px;
  }
  &__hand-left &__finger3 {
    width: 4px;
    height: 7px;
    position: absolute;
    left: 76px;
    top: 151px;
    background-color: antiquewhite;
    border: 2px solid #000;
    border-top: none;
    border-bottom-left-radius: 10px 27px;
    border-bottom-right-radius: 12px;
  }
  &__hand-left &__finger4 {
    width: 5px;
    height: 4px;
    position: absolute;
    left: 80px;
    top: 148px;
    background-color: antiquewhite;
    border: 2px solid #000;
    border-top: none;
    border-bottom-left-radius: 6px 5px;
    border-bottom-right-radius: 8px 9px;
    transform: rotate(-50deg);
  }
  &__hand-right &__finger1 {
    width: 5px;
    height: 6px;
    position: absolute;
    left: 145px;
    top: 138px;
    background-color: antiquewhite;
    border: 2px solid #000;
    border-top: none;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    z-index: -2;
  }
  &__hand-right &__finger2 {
    width: 4px;
    height: 13px;
    position: absolute;
    left: 151px;
    top: 130px;
    background-color: antiquewhite;
    border: 2px solid #000;
    border-top: none;
    border-bottom-left-radius: 10px 27px;
    border-bottom-right-radius: 12px;
    z-index: -2;
    transform: rotate(-10deg);
  }
  &:hover {
    .a-l-inf__eye#eye-left {
      .a-l-inf__eyelid#upper {
        left: -7px;
      }
      .a-l-inf__eyelid#lower {
        left: -9px;
        top: 6px;
      }
    }

    .a-l-inf__eye#eye-right {
      .a-l-inf__eyelid#upper {
        left: -7px;
      }
      .a-l-inf__eyelid#lower {
        left: -9px;
        top: 6px;
      }
    }

    .a-l-inf__eyebrow {
      &#eyebrow-left {
        left: 44px;
      }
      &#eyebrow-right {
        left: 45px;
      }
    }
    .a-l-inf {
      &__mouth-line {
        border-top-left-radius: 14px 7px;
      }
      &__head {
        top: 3px;
      }
      &__ear#ear-right {
        top: 38px;
      }
    }
  }
}
</style>
