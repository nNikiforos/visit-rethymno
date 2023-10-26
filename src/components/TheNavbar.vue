<template>
  <div class="navbar">
    <div class="navbar__logo">
      <router-link to="/">
        <img src="/img/rethlogo1.png" alt="logo" />
      </router-link>
    </div>
    <div>
      <ul class="navbar__list">
        <li class="navbar__list-link" v-for="link in links" :key="link">
          <router-link :to="link.link" exact-active-class="active-link">{{
            link.name
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import links from "../links.js";

export default {
  data() {
    return {
      links: links,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/navbar.scss";
</style>
