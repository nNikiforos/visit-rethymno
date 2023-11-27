<template>
  <slot name="events">
    <div class="-events">
      <h3 class="title">EVENTS</h3>
      <div class="events__images">
        <img
          v-if="currentImage !== null"
          :src="images[currentImage].src"
          :alt="images[currentImage].alt"
        />
      </div>
    </div>
  </slot>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: "/img/events/arkadi/arkadi1.jpg", alt: "arkadi" },
        { src: "/img/events/miriokefala/miriokefala5.jpg", alt: "church" },
        { src: "/img/events/carnival/carnival3.jpg", alt: "carnival" },
      ],
      currentImage: null,
    };
  },
  mounted() {
    this.startSlideShow();
  },
  methods: {
    startSlideShow() {
      this.currentImage = 0;
      setInterval(() => {
        this.nextImage();
      }, 5000);
    },
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.events {
  align-self: center;
  padding-bottom: 25px;
  justify-content: center;

  &__images {
    img {
      box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.772);
      height: 45rem;
      width: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
}
</style>
