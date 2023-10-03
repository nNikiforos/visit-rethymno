<template>
  <div>
    <the-navbar />
    <RouterView></RouterView>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";

export default {
  components: {
    TheNavbar,
  },
};
</script>

<style lang="scss" scoped>
@import url(./assets/global.scss);
</style>
