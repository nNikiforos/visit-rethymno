<template>
  <slot name="learn-history">
    <div class="home__flexcontent-learnhistory">
      <h3 class="title">
        LEARN THE HISTORY OF RETHYMNO
        <router-link :to="'/history'">HERE</router-link>
      </h3>
      <div class="clipcontainer">
        <div class="clipcontainer__images">
          <img
            src="/img/home/historybox/arkadi.jpg"
            width="220px"
            alt="minonan paint wall"
          />
        </div>
        <div class="clipcontainer__images">
          <img
            src="/img/home/historybox/minoan.jpeg"
            width="220px"
            alt="minonan paint wall bull games"
          />
        </div>
        <div class="clipcontainer__images">
          <img
            src="/img/home/historybox/modern4.jpg"
            width="220px"
            alt="minonan paint wall"
          />
        </div>
      </div>
    </div>
  </slot>
</template>

<style lang="scss" scoped>
.home__flexcontent-learnhistory {
  a {
    color: red;
  }
  .clipcontainer {
    position: relative;
    height: 50rem;

    margin: 0 auto;
    transition: all 1s ease-in;

    &:hover {
      transform: scale(1.01);
    }

    &__images {
      position: absolute;
      width: 100%;
      height: 100%;
      transition: all 1.5s ease-in-out;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 2.5s;

        &:hover {
          border-radius: 5px;
        }
      }

      &:nth-child(1) {
        clip-path: polygon(10% 0, 39.5% 0, 29.5% 100%, 0% 100%);
        z-index: 1;
      }

      &:nth-child(2) {
        clip-path: polygon(40% 0, 70.5% 0, 60.5% 100%, 30% 100%);
        z-index: 1;
      }

      &:nth-child(3) {
        clip-path: polygon(71% 0, 100% 0, 90% 100%, 61% 100%);
        z-index: 1;
      }

      &:hover {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

        z-index: 40;
      }
    }
  }
}
</style>
