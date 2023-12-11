<template>
  <div class="activities">
    <div class="activities__mainimg">
      <img
        :src="currentBackground"
        alt="current activity"
        class="activites__mainimg-adventure"
      />
    </div>
    <div class="activities__main-title title">
      <h2>
        Rethymno: A Destination for Adventure-Seekers and Culture Enthusiasts
      </h2>
    </div>
    <div class="activities__main-intro">
      <p>
        Rethymno, is the perfect destination for travelers seeking a mix of
        adventure and culture. From its pristine beaches and crystal clear
        waters, to its rich historical and cultural heritage, Rethymno has
        something to offer for everyone. Take a stroll through the old town,
        admire the Venetian architecture, and immerse yourself in the local
        museums and monuments. Or, if you're feeling adventurous, go on a hike
        in the nearby mountains, go snorkeling in the turquoise waters, or
        simply relax and soak up the Mediterranean sun. With so much to see and
        do, Rethymno is the ultimate destination for adventure-seekers and
        culture enthusiasts.
      </p>
    </div>
    <div class="activities__section containerbg">
      <div class="activities__section-tabs">
        <button
          :class="{
            'custom-btn': true,
            activetab: currentBackground === '/img/activities/adventure.jpg',
          }"
          @click="
            changeBackground('/img/activities/adventure.jpg', 'adventure')
          "
        >
          ADVENTURES
        </button>
        <button
          :class="{
            'custom-btn': true,
            activetab: currentBackground === '/img/activities/nature.jpg',
          }"
          @click="changeBackground('/img/activities/nature.jpg', 'nature')"
        >
          NATURE
        </button>
        <button
          :class="{
            'custom-btn': true,
            activetab: currentBackground === '/img/activities/museum.jpg',
          }"
          @click="changeBackground('/img/activities/museum.jpg', 'museum')"
        >
          MUSEUM
        </button>
      </div>
      <!-- TABS WITH CONTENT -->
      <div class="activities__section-contents">
        <!-- Adventures tab -->
        <div
          class="activities__section-contents-content"
          v-if="currentTab === 'adventure'"
        >
          <div class="activity-box">
            <img
              src="/img/activities/adventures/bungee.jpg"
              alt="bunge jumping"
            />
            <h3 class="title">Bunge jumping</h3>
          </div>
          <div class="activity-box">
            <img src="/img/activities/adventures/dive.jpg" alt="diving" />
            <h3 class="title">diving center</h3>
          </div>
          <div class="activity-box">
            <img
              src="/img/activities/adventures/watersport.jpg"
              alt="water sport"
            />
            <h3 class="title">Water sports</h3>
          </div>
          <div class="activity-box">
            <img
              src="/img/activities/adventures/pirates.jpg"
              alt="pirte ship"
            />
            <h3 class="title">the pirate ship</h3>
          </div>
          <div class="activity-box">
            <img
              src="/img/activities/adventures/modal-safari2.jpg"
              alt="safari"
            />
            <h3 class="title">safari adventure</h3>
          </div>
          <div class="activity-box">
            <img
              src="/img/activities/adventures/modal-samaria2.jpg"
              alt="samaria"
            />
            <h3 class="title">diving center</h3>
          </div>
        </div>

        <!-- Nature tab -->
        <div
          class="activities__section-contents-content"
          v-if="currentTab === 'nature'"
        >
          <div class="activity-box">
            <img src="/img/activities/nature/melidoni.jpg" alt="melidoni " />
            <h3 class="title">melidoni cave</h3>
          </div>
          <div class="activity-box">
            <img
              src="/img/activities/nature/psiloritis.jpg"
              alt="psiloritis "
            />
            <h3 class="title">psiloritis mountain</h3>
          </div>
          <div class="activity-box">
            <img
              src="/img/activities/nature/triopetra.jpg"
              alt="triopetra sea"
            />
            <h3 class="title">triopetra sea</h3>
          </div>
          <div class="activity-box">
            <img src="/img/activities/nature/preveli.jpg" alt="preveli " />
            <h3 class="title">preveli</h3>
          </div>
        </div>

        <!-- Museum tab -->
        <div
          class="activities__section-contents-content"
          v-if="currentTab === 'museum'"
        >
          <div class="activity-box">
            <img src="/img/activities/museums/arkadi.jpg" alt="arkadi " />
            <h3 class="title">arkadi</h3>
          </div>
          <div class="activity-box">
            <img src="/img/activities/museums/logia.jpg" alt="logia " />
            <h3 class="title">logia museum</h3>
          </div>
          <div class="activity-box">
            <img
              src="/img/activities/museums/palentologiko.jpg"
              alt="palentologiko "
            />
            <h3 class="title">palentologiko</h3>
          </div>
          <div class="activity-box">
            <img src="/img/activities/museums/tehnon.jpg" alt="tehnon " />
            <h3 class="title">tehnon</h3>
          </div>
          <div class="activity-box">
            <img src="/img/activities/museums/military1.jpg" alt="military " />
            <h3 class="title">military</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentBackground: "/img/activities/adventure.jpg",
      currentTab: "adventure",
    };
  },
  methods: {
    changeBackground(imagePath, tab) {
      this.currentBackground = imagePath;
      this.currentTab = tab;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/PageStyles/activitiespage.scss";
</style>
