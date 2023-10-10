<template>
  <div class="home">
    <div class="home__mainimg"></div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

.home {
  &__mainimg {
    background: url(../img/home/rethmain1.jpg) no-repeat center CENTER/COVER;
    height: 60vh;
    background-attachment: fixed;
  }
}
</style>
