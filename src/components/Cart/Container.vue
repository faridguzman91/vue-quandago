<script setup>
import { ref } from "vue";

import useCartStore from "../../stores/cart";
import ToggleBtn from "./ToggleBtn.vue";
import MainDialog from "./MainDialog.vue";

const cartStore = useCartStore();
const toggleCart = ref(false);
</script>

<template>
  <div class="sticky right-100 bottom-0 z-10 p-4 pb-20 text-md">
    <ToggleBtn
      @click="toggleCart = true"
      :total-items="cartStore.totalItems"
      class="text-lg"
    />
    <MainDialog
      :total-cost="cartStore.totalCost"
      :toggleCart="toggleCart"
      @closeCart="toggleCart = false"
    />
  </div>
</template>

<style lang="scss"></style>
