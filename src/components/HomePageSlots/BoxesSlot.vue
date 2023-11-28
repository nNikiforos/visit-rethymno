<template>
  <slot name="boxes">
    <h2 class="moretosee title">MORE TO SEE</h2>
    <h2 class="arrowdown title">&dArr;</h2>

    <div class="home__boxes">
      <div class="home__boxes-num1">
        <h3 class="home__boxtitle titlelight">adventures</h3>
      </div>
      <div class="home__boxes-num2">
        <h3 class="home__boxtitle titlelight">nature</h3>
      </div>
      <div class="home__boxes-num3">
        <h3 class="home__boxtitle titlelight">museums</h3>
      </div>
    </div>
  </slot>
</template>

<style lang="scss" scoped>
.moretosee {
  text-align: center;
  margin-bottom: 0;
}

.arrowdown {
  text-align: center;
  margin-top: 0;
  font-size: 3rem;
}

/* 3 BOXES MORE TO SEE */
.home {
  &__boxes {
    display: flex;
    width: 100%;
    height: 35rem;
    overflow: hidden;
    cursor: pointer;

    &-num1 {
      width: 40vw;
      background: url(/public/img/home/actlogo.jpg) center center/cover;
      transition: all 1s ease-in-out;
    }

    &-num2 {
      width: 30vw;
      background: url(/public/img/home/natlogo.jpg) center center/cover;
      transition: all 1s ease-in-out;
      border-left: 1px solid hsla(0, 0%, 100%, 0.336);
      border-right: 1px solid hsla(0, 0%, 100%, 0.336);
    }

    &-num3 {
      width: 30vw;
      background: url(/public/img/home/museumlogo.jpg) center center/cover;
      transition: all 1s ease-in-out;
    }

    &-num1:hover,
    &-num2:hover,
    &-num3:hover {
      scale: 1.02;
    }
  }

  &__boxtitle {
    text-transform: uppercase;
    padding: 25px;
  }

  &__boxes-num2 &__boxtitle {
    display: flex;
    height: 100%;
    flex-direction: column-reverse;
    align-items: flex-end;
  }
}
</style>
