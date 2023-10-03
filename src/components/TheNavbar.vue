<template>
  <div class="navbar">
    <div class="navbar-logo">Logo</div>
    <div class="navbar-list">
      <ul>
        <li class="navbar-list_link" v-for="link in links" :key="link">
          <router-link :to="link.link">{{ link.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const links = [
      { name: "Home", link: "/" },
      { name: "History", link: "/history" },
      { name: "Adventures", link: "/adventures" },
      { name: "Events", link: "/events" },
      { name: "Contact", link: "/contact" },
    ];

    return { links };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

.navbar {
  background-color: blue;
  display: flex;
  align-content: space-between;
  justify-content: space-around;

  padding: 25px;

  &-logo {
    background-color: orange;
  }

  &-list ul {
    display: flex;

    li {
      padding: 0 25px;
      list-style: none;

      a {
        text-decoration: none;
        color: black;
      }
    }
  }
}
</style>
