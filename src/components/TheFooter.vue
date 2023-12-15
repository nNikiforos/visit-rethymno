<template>
  <div class="footer">
    <div class="footer__usefullinks">
      <h3>Useful links</h3>
      <ul class="footer__list">
        <li class="footer__list-link" v-for="link in links" :key="link">
          <router-link :to="link.link">{{ link.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="footer__activities">
      <h3>activities</h3>
      <router-link to="/activities">adventures</router-link>
      <router-link to="/activities">nature</router-link>
      <router-link to="/activities">museums</router-link>
    </div>
    <div class="footer__events">
      <h3>events</h3>
      <router-link to="/events">event1</router-link>
      <router-link to="/events">event2</router-link>
      <router-link to="/events">event3</router-link>
      <router-link to="/events">event4</router-link>
    </div>
    <div class="footer__contact">
      <h3>contact</h3>
      <p>Crete/Rethymno</p>
      <p>Rethymno 74100</p>
      <a href="mailto:example@example.com">example@example.com</a>
      <p>TEL:(+30)6971000000</p>
    </div>
    <div class="footer__logo">
      <router-link to="/">
        <img src="/img/rethlogo1.png" alt="logo" />
      </router-link>
    </div>
    <div class="footer__copyrights">
      <p>&copy; 2023 Nikos Nikiforos. All rights reserved.</p>
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
@import "@/assets/footer.scss";
</style>
