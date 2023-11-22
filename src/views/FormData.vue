<template>
  <div class="dataform">
    <ul class="dataform__lists">
      <li
        v-for="(item, index) in dataItems"
        :key="index"
        class="dataform__lists-list"
      >
        <h3 class="dataform__lists-list-name">{{ item.name }}</h3>
        <h3 class="dataform__lists-list-lastname">{{ item.lastname }}</h3>
        <p class="dataform__lists-list-email">{{ item.email }}</p>
        <p class="dataform__lists-list-phone">{{ item.phone }}</p>
        <p class="dataform__lists-list-message">{{ item.message }}</p>
        <button class="dataform__lists-list-delete" @click="deleteItem(index)">
          Delete
        </button>
      </li>
    </ul>
    <div>
      <button v-show="dataItems.length > 0" @click="deleteAll">
        Delete All
      </button>
    </div>
    <h1 class="dataform__nomessage" v-if="dataItems.length === 0">
      NO MESSAGES
    </h1>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const dataItems = ref([
      {
        name: "Nikos",
        lastname: "Nikiforos",
        email: "email",
        phone: "6971884966",
        message: "message",
      },
      {
        name: "manos",
        lastname: "skata",
        email: "email",
        phone: "6971884966",
        message: "message sjhit",
      },
      // Add more items as needed
    ]);

    const deleteItem = (index) => {
      dataItems.value.splice(index, 1);
    };

    const deleteAll = () => {
      dataItems.value = [];
    };

    return {
      dataItems,
      deleteItem,
      deleteAll,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/PageStyles/formdata.scss";
</style>
