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
