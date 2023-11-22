<template>
  <div class="image-carousel">
    <div class="buttons">
      <button
        :style="{
          backgroundColor: speedMultiplier === 1 ? activeColor : normalColor,
        }"
        class="speed-button"
        @click="changeSpeed(1)"
        ref="speedButton1"
      >
        x1
      </button>
      <button
        :style="{
          backgroundColor: speedMultiplier === 2 ? activeColor : normalColor,
        }"
        class="speed-button"
        @click="changeSpeed(2)"
        ref="speedButton2"
      >
        x2
      </button>
      <button
        :style="{
          backgroundColor: speedMultiplier === 4 ? activeColor : normalColor,
        }"
        class="speed-button"
        @click="changeSpeed(4)"
        ref="speedButton4"
      >
        x4
      </button>
      <button class="carousel-button" @click="prevImage">Previous</button>
      <button class="carousel-button" @click="toggleCarousel">
        {{ isPlaying ? "Stop" : "Play" }}
      </button>
      <button class="carousel-button" @click="nextImage">Next</button>
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
      normalColor: "#5e93d9", // Change this to the default color
      activeColor: "green", // Change this to the color you want for active speed
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
      // Reset color for all buttons
      this.$refs.speedButton1.style.backgroundColor = this.normalColor;
      this.$refs.speedButton2.style.backgroundColor = this.normalColor;
      this.$refs.speedButton4.style.backgroundColor = this.normalColor;
      // Set active color for the clicked button
      this.$refs[`speedButton${multiplier}`].style.backgroundColor =
        this.activeColor;
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
