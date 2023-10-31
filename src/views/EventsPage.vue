<template>
  <div class="events">
    <div class="events__mainimg">
      <div class="events__mainimg-img1"></div>
      <div class="events__mainimg-img2"></div>
    </div>

    <div class="events__maintitle title">
      <h3>{{ eventsJsonData.mainTitle }}</h3>
    </div>

    <div class="events__maincontent">
      <p>{{ eventsJsonData.mainContent }}</p>
    </div>

    <div class="events__detailboxes container">
      <!-- first content -->
      <div class="events__detailboxes-detailbox">
        <div class="events__detailboxes-detailbox-content">
          <h3 class="title">{{ eventsJsonData.title[0].num0 }}</h3>
          <p>{{ eventsJsonData.content[0].num0 }}</p>
        </div>
        <div class="events__detailboxes-detailbox-carousel">carousel</div>
      </div>
      <div class="linebrake"></div>

      <!-- second content -->
      <div class="events__detailboxes-detailbox">
        <div class="events__detailboxes-detailbox-content">
          <h3 class="title">{{ eventsJsonData.title[1].num1 }}</h3>
          <p>{{ eventsJsonData.content[1].num1 }}</p>
        </div>
        <div class="events__detailboxes-detailbox-carousel">carousel</div>
      </div>
      <div class="linebrake"></div>

      <!-- third content -->
      <div class="events__detailboxes-detailbox">
        <div class="events__detailboxes-detailbox-content">
          <h3 class="title">{{ eventsJsonData.title[2].num2 }}</h3>
          <p>{{ eventsJsonData.content[2].num2 }}</p>
        </div>
        <div class="events__detailboxes-detailbox-carousel">carousel</div>
      </div>
      <div class="linebrake"></div>

      <!-- fourth content -->
      <div class="events__detailboxes-detailbox">
        <div class="events__detailboxes-detailbox-content">
          <h3 class="title">{{ eventsJsonData.title[3].num3 }}</h3>
          <p>{{ eventsJsonData.content[3].num3 }}</p>
        </div>
        <div class="events__detailboxes-detailbox-carousel">carousel</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import eventsJsonData from "../assets/Data/eventRethContent.json";
</script>

<style lang="scss" scoped>
@import "../assets/PageStyles/eventpage.scss";
</style>
