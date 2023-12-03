<script setup>
import { ref } from "vue";
import Badge from "../Common/Badge.vue";
const props = defineProps(["totalItems"]);
const cartRef = ref(null);
</script>

<template>
  <div class="flex flex-row w-2/12 cursor-pointer text-lg" ref="cartRef">
    <Badge :value="totalItems" size="large" class="text-md">
      <font-awesome-icon :icon="['fas', 'cart-shopping']" />
    </Badge>
  </div>
</template>
