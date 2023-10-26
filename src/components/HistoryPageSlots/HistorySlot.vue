<template>
  <slot name="rethmno-history">
    <div class="history__content container">
      <p>{{ historycontent }}</p>
      <img
        id="num0"
        :src="historyImgs[0].url"
        :alt="historyImgs[0].description"
      />
      <img
        id="num1"
        :src="historyImgs[1].url"
        :alt="historyImgs[1].description"
      />
      <img
        id="num2"
        :src="historyImgs[2].url"
        :alt="historyImgs[2].description"
      />
      <img
        id="num3"
        :src="historyImgs[3].url"
        :alt="historyImgs[3].description"
      />
      <img
        id="num4"
        :src="historyImgs[4].url"
        :alt="historyImgs[4].description"
      />
      <img
        id="num5"
        :src="historyImgs[5].url"
        :alt="historyImgs[5].description"
      />
    </div>
  </slot>
</template>

<script>
export default {
  props: {
    historycontent: String,
    historyImgs: Array,
  },
};
</script>

<style lang="scss">
@import "/src/assets/PageStyles/historypage.scss";
</style>
