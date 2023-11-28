<template>
  <div class="home">
    <div class="home__mainimg"></div>
    <div class="home__flexcontent containerbg">
      <TopLocationsSlot />
      <HistorySlot />
      <MinigallerySlot />
      <EventsSlot />
    </div>
    <BoxesSlot />
  </div>
</template>

<script>
import TopLocationsSlot from "@/components/HomePageSlots/TopLocationsSlot.vue";
import HistorySlot from "@/components/HomePageSlots/HistorySlot.vue";
import EventsSlot from "@/components/HomePageSlots/EventsSlot.vue";
import MinigallerySlot from "@/components/HomePageSlots/MinigallerySlot.vue";
import BoxesSlot from "@/components/HomePageSlots/BoxesSlot.vue";

export default {
  components: {
    TopLocationsSlot,
    HistorySlot,
    EventsSlot,
    MinigallerySlot,
    BoxesSlot,
  },
};
</script>

<style lang="scss">
@import "../assets/PageStyles/homepage.scss";
</style>
