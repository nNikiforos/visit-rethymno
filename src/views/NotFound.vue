<template>
  <div class="notfound">
    <div class="notfound-text">
      <h1>Sorry the page you are looking for dose not exist.</h1>
      <h3>
        Try instead to go back to
        <router-link to="/">the Home page</router-link>.
      </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notfound {
  height: 100vh;
  background-color: rgb(178, 106, 209);

  &-text {
    text-align: center;
  }
}
</style>
