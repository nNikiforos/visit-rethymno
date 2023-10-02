<template>
  <div class="navbar">
    <div class="navbar-logo">Logo</div>
    <div class="navbar-list">
      <ul>
        <li class="navbar-list_link" v-for="link in links" :key="link">
          <a :href="link.link"></a>{{ link.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const links = [
      { name: "Home", link: "#" },
      { name: "History", link: "#" },
      { name: "Adventures", link: "#" },
      { name: "Events", link: "#" },
      { name: "Contact", link: "#" },
    ];

    return { links };
  },
};
</script>

<style lang="scss" scoped>
.navbar{
  background-color: blue;
  display: flex;

&-list ul{
  display: flex;
}

}


</style>
