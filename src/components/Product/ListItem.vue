<script setup>
import useCartStore from "../../stores/cart";
import BtnIconRounded from "../Common/BtnIconRounded.vue";

defineProps(["product"]);

const cartStore = useCartStore();
</script>

<template>
  <li class="card card-body mt-8 w-full rounded-s border bg-base-100 p-8 text-sm shadow-lg">
    <h1 class="text-sm font-bold capitalize">{{ product.title }}</h1>
    <h2 class="mt-2 text-xs">{{ product.description }}</h2>
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

