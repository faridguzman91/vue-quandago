<script setup>
import useCartStore from "../../stores/cart";
import BtnIconRounded from "../Common/BtnIconRounded.vue";

defineProps(["product"]);

const cartStore = useCartStore();
</script>

<template>
  <li class="mt-8 p-8 w-full text-sm border">
    <h1 class="text-sm capitalize font-bold">{{ product.title }}</h1>
    <h2 class="text-xs mt-2">{{ product.description }}</h2>
    <div class="text-lg font-bold">
      <div class="mt-4">
        <span>$</span>
        <span>{{ product.price }}</span>
      </div>
      <div class="flex justify-end">
        <BtnIconRounded @click="cartStore.addItem(product)">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </BtnIconRounded>
      </div>
    </div>
  </li>
</template>
