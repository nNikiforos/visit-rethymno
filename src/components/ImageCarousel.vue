<template>
  <div class="image-carousel">
    <div class="buttons">
      <button class="carousel-button" @click="prevImage">Previous</button>
      <button class="carousel-button" @click="toggleCarousel">
        {{ isPlaying ? "Stop" : "Play" }}
      </button>
      <button class="carousel-button" @click="nextImage">Next</button>
      <button class="speed-button" @click="changeSpeed(1)">x1</button>
      <button class="speed-button" @click="changeSpeed(2)">x2</button>
      <button class="speed-button" @click="changeSpeed(4)">x4</button>
    </div>
    <img :src="currentImage" alt="Carousel Image" />
  </div>
</template>
<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      isPlaying: false,
      intervalId: null,
      speedMultiplier: 1,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
    intervalDuration() {
      return 4000 / this.speedMultiplier;
    },
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    toggleCarousel() {
      if (this.isPlaying) {
        clearInterval(this.intervalId);
      } else {
        this.intervalId = setInterval(this.nextImage, this.intervalDuration);
      }
      this.isPlaying = !this.isPlaying;
    },
    changeSpeed(multiplier) {
      this.speedMultiplier = multiplier;
      if (this.isPlaying) {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.nextImage, this.intervalDuration);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.image-carousel {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
}

.buttons {
  margin-top: 2px;
  align-self: center;
}

.image-carousel img {
  height: 30rem;
  width: 45rem;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
  box-shadow: 0 0 8px 2px rgb(43, 42, 42);
}

.carousel-button {
  background-color: $color-primary;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}

.speed-button {
  background-color: $color-primary-dark;
  color: white;
  border: none;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 100%;
}
</style>
