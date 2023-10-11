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
      <a href="#">adventures</a>
      <a href="#">nature</a>
      <a href="#">museums</a>
    </div>
    <div class="footer__events">
      <h3>events</h3>
      <a href="#">event1</a>
      <a href="#">event2</a>
      <a href="#">event3</a>
    </div>
    <div class="footer__contact">
      <h3>contact</h3>
      <p>Crete/Rethymno</p>
      <p>Rethymno 74100</p>
      <a href="mailto:example@example.com">example@example.com</a>
      <p>TEL:(+30)6971000000</p>
    </div>
    <div class="footer__logo">LOGO</div>
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
@import "@/assets/global.scss";
@import "@/assets/footer.scss";
</style>
