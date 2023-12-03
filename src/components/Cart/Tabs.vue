<script setup lang="ts">
import { ref } from "vue";
import List from "./List.vue";
import Order from "./Order.vue";

const tabName = ref<string>("list");
const tabs = {
  list: List,
  order: Order,
};

const changeTab = (name: string) => {
  tabName.value = name;
};
</script>

<template>
  <div class="w-full flex-col">
    <component :is="tabs[tabName]" @changeTab="changeTab" />
  </div>
</template>
<style></style>
