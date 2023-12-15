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

    <div
      class="events__detailboxes container"
      v-for="(event, index) in eventsJsonData.events"
      :key="event.id"
    >
      <div
        class="events__detailboxes-detailbox"
        :class="{ 'row-reverse': index % 2 === 1 }"
      >
        <div class="events__detailboxes-detailbox-content">
          <h3 class="title">{{ event.title }}</h3>
          <h3 class="title"></h3>
          <p>{{ event.content }}</p>
        </div>
        <ImageCarousel :images="event.images" />
      </div>
      <div
        class="linebrake"
        v-if="index !== eventsJsonData.events.length - 1"
      ></div>
    </div>
  </div>
</template>

<script setup>
import ImageCarousel from "../components/ImageCarousel.vue";
import eventsJsonData from "../assets/Data/eventRethContent.json";
</script>

<style lang="scss" scoped>
@import "../assets/PageStyles/eventpage.scss";
</style>
