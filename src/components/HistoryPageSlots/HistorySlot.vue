<template>
  <slot name="rethmno-history">
    <div class="history__content container">
      <p id="content0">{{ historycontent }}</p>
      <!-- /* ancient images */ -->
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
      <!-- /* War images */ -->
      <img
        id="num6"
        :src="historyImgs[6].url"
        :alt="historyImgs[6].description"
      />
      <img
        id="num7"
        :src="historyImgs[7].url"
        :alt="historyImgs[7].description"
      />
      <img
        id="num8"
        :src="historyImgs[8].url"
        :alt="historyImgs[8].description"
      />
      <img
        id="num9"
        :src="historyImgs[9].url"
        :alt="historyImgs[9].description"
      />
      <p id="content1">{{ historycontent1 }}</p>
      <img
        id="num10"
        :src="historyImgs[10].url"
        :alt="historyImgs[10].description"
      />
      <img
        id="num11"
        :src="historyImgs[11].url"
        :alt="historyImgs[11].description"
      />
      <img
        id="num12"
        :src="historyImgs[12].url"
        :alt="historyImgs[12].description"
      />
      <img
        id="num13"
        :src="historyImgs[13].url"
        :alt="historyImgs[13].description"
      />
    </div>
  </slot>
</template>

<script>
export default {
  props: {
    historycontent: String,
    historycontent1: String,
    historyImgs: Array,
  },
};
</script>

<style lang="scss">
@import "/src/assets/PageStyles/historypage.scss";
</style>
