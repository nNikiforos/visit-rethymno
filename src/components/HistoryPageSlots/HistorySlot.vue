<template>
  <slot name="rethmno-history">
    <div class="history__content container">
      <p id="content0">{{ historycontent }}</p>

      <img
        v-for="(history, index) in historyImgs"
        :key="index"
        :src="history.url"
        :alt="history.description"
        :id="'num' + index"
      />

      <p id="content1">{{ historycontent1 }}</p>
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
