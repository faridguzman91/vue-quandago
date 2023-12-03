<script setup lang="ts">
import { ref } from "vue";
import useCartStore from "../../stores/cart";
import ToggleBtn from "./ToggleBtn.vue";
import MainDialog from "./MainDialog.vue";

const cartStore = useCartStore();
const toggleCart = ref(false);
</script>

<template>
  <div class="sticky bottom-0 z-10 flex flex-row justify-end p-4 pb-20">
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
