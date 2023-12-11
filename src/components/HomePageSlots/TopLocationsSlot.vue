<template>
  <slot name="top-locations">
    <div class="home__flexcontent-toplocations">
      <h3 class="title">Top locations</h3>
      <!-- SLIDER -->
      <div class="slider">
        <div class="slider__arrows-left" @click="prevLocations">
          <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div
          v-for="(location, index) in displayedLocations"
          :key="index"
          class="slider__slide"
        >
          <img :src="location.image" class="slider__slide-img" />
          <h3 class="slider__slide-title">{{ location.title }}</h3>
          <p class="slider__slide-info">{{ location.info }}</p>
        </div>
        <div class="slider__arrows-right" @click="nextLocations">
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  </slot>
</template>

<script>
import { ref, computed } from "vue";
import data from "../../assets/Data/topLocationsContent.json";

export default {
  setup() {
    const topLocations = ref(data.topLocations);
    const currentIndex = ref(0);

    const displayedLocations = computed(() => {
      const start = currentIndex.value;
      const end = start + 3;
      return topLocations.value.slice(start, end);
    });

    const nextLocations = () => {
      const lastIndex = topLocations.value.length - 1;
      currentIndex.value = (currentIndex.value + 3) % (lastIndex + 1);
    };

    const prevLocations = () => {
      const lastIndex = topLocations.value.length - 1;
      currentIndex.value =
        (currentIndex.value - 3 + (lastIndex + 1)) % (lastIndex + 1);
    };

    return { displayedLocations, nextLocations, prevLocations };
  },
};
</script>

<style lang="scss">
.title {
  text-transform: uppercase;
}
.slider {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &__arrows-left,
  &__arrows-right {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color-primary-light;
    font-size: 3rem;

    i {
      color: $color-grey-light-2;
      transition: all 0.2s;

      &:hover {
        color: $color-grey-dark-1;
      }
    }
  }

  &__arrows-left {
    margin-right: 1rem;
  }

  &__arrows-right {
    margin-left: 1rem;
  }

  &__slides {
    margin: 0 2.5rem;
    display: flex;
  }

  &__slide {
    width: 30rem;
    height: 45rem;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.505);
    overflow: hidden;

    img {
      width: 100%;
      height: 25rem;
      border-radius: 10px 10px 0 0;
      object-fit: cover;
    }

    &-title,
    &-info {
      font-size: $font-medium;
      padding: 0.5rem;
      text-align: center;
    }
  }
}
</style>
