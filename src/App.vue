<template>
  <div>
    <the-navbar />
    <RouterView></RouterView>
    <the-footer />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheNavbar,
    TheFooter,
  },
};
</script>

<style lang="scss">
@import "./assets/global.scss";
</style>
