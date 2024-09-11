<template>
  <div class="about">Этот автор хочет освоить Vue.js, поэтому что-то тут ковыряет =)</div>
</template>

<style lang="scss" scoped>
.about {
  position: absolute;
  z-index: 100;
  top: 125px;
  left: 375px;
  max-width: 340px;
  font-size: 26px;
  line-height: 1.4;

  .l-a-wrapper_night & {
    color: #fff;

    @media screen and (max-width: 940px) {
      background: rgba(0, 0, 0, 0.5);
    }
  }

  .l-a-wrapper_day & {
    @media screen and (max-width: 940px) {
      background: rgba(225, 225, 225, 0.8);
    }
  }

  @media screen and (max-width: 940px) {
    position: relative;
    z-index: 100;
    top: 0;
    left: 0;
    padding: 20px;
    margin: 0 auto;
    border-radius: 20px;
    font-size: 22px;
  }
}
</style>
