<template>
  <div class="history">
    <div class="history__mainimg"></div>
    <div class="title container">
      <h3>{{ historyTitle }}</h3>
    </div>
    <history-slot :historyImgs="historyImgs" :historycontent="historyContent" />
  </div>
</template>

<script>
import HistorySlot from "@/components/HistoryPageSlots/HistorySlot.vue";
import historyJsonContent from "@/assets/Data/historyRethContent.json";

export default {
  data() {
    return {
      historyTitle: historyJsonContent.historyTitle,
      historyContent: historyJsonContent.historyContent,
      historyImgs: historyJsonContent.historyImgs,
    };
  },
  components: {
    HistorySlot,
  },
};
</script>

<style lang="scss">
@import "../assets/PageStyles/historypage.scss";
</style>
