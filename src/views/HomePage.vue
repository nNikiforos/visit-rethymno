<template>
  <div class="home">
    <div class="home__mainimg"></div>
    <div class="home__flexcontent container">
      <div class="home__flexcontent-toplocations">
        <h3 class="title">Top locations</h3>
        <div class="slider">
          <div class="slide"></div>
        </div>
      </div>
      <div class="home__flexcontent-learnhistory">
        <h3 class="title">Our History</h3>
        <div class="clipcontainer">
          <div class="historyclip">
            <img src="../img/history/minoans1.jpg" width="220px" alt="minonan paint wall">
          </div>
        </div>
      </div>
      <div class="home__flexcontent-minigallery">
        <h3 class="title">Mini gallery</h3>
        <p>the mini galery gose herte</p>
      </div>
      <div class="home__flexcontent-events">
        <h3 class="title">EVENTS</h3>
        <div class="eventsimg">
          <img src="../img/events/arkadi/arkadi1.jpg" width="500px" alt="arkadi">
        </div>
      </div>
    </div>
    <div class="home__flexcontent-boxeslinks">
      <h3 class="title">MORE TO SEE</h3>
      <div class="boxes">
        <div class="boxes-num1">
          <h3 class="title">
            adventures
          </h3>
          <img src="../img/home/actlogo.jpg" height="250px" alt="samaria">
        </div>
        <div class="boxes-num2">
          <h3 class="title">
            nature
          </h3>
          <img src="../img/home/natlogo.jpg" height="250px" alt="preveli">
        </div>
        <div class="boxes-num3">
          <h3 class="title">
            museums
          </h3>
          <img src="../img/home/museumlogo.jpg" height="250px" alt="museum">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";
@import "../assets/homepage.scss";

.home {
  &__mainimg {
    background: url(../img/home/rethmain1.jpg) no-repeat center CENTER/COVER;
    height: 60vh;
    background-attachment: fixed;
  }
}
</style>
