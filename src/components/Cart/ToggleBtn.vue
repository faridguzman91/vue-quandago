<script setup>
import { ref } from "vue";
import Badge from "../Common/Badge.vue";
const props = defineProps(["totalItems"]);
const cartRef = ref(null);
</script>

<template>
  <div class="flex w-28 cursor-pointer flex-row text-lg" ref="cartRef">
    <Badge :value="totalItems" size="large" class="text-md">
      <font-awesome-icon :icon="['fas', 'cart-shopping']" />
    </Badge>
  </div>
</template>
