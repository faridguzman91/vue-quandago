<script setup>
import { ref } from "vue";

import useCartStore from "../../stores/cart";
import { useSimpleBar } from "../../composables/useSimpleScroll";
import BtnIconRounded from "../Common/BtnIconRounded.vue";
import Btn from "../Common/Btn.vue";

const cartStore = useCartStore();
const cartList = ref(null);
const emits = defineEmits(["changeTab"]);

useSimpleBar({ elementRef: cartList });
</script>
<template>
  <div
    id="list-box"
    ref="cartList"
    class="w-full h-full max-w-bd-sm mx-auto relative overflow-auto"
  >
    <div
      v-if="cartStore.items.length > 0"
      class="max-w-bd-sm mx-auto pb-8 px-4 fixed z-10 bg-white dark:bg-primary-bg-dark"
    >
      <Btn :label="Cart" size="sm" @click="emits('changeTab', 'order')">
        <font-awesome-icon :icon="['fas', 'bag-shopping']" />
      </Btn>
    </div>
    <ul class="w-full justify-between px-2 pt-20">
      <li
        v-for="item of cartStore.items"
        :key="item.id"
        class="mt-8 flex flex-col justify-between items-start"
      >
        <div class="text-sm font-mont font-bold">
          {{ item.title }}
        </div>
        <div class="text-xs flex">
          <span>{{ item.count }}</span>
          <span class="px-2">$</span>
          <span class="font-bold">{{ item.price * item.count }}</span>
        </div>
        <div class="flex">
          <div class="p-4">
            <BtnIconRounded @click="cartStore.addItem(item)">
              <font-awesome-icon :icon="['fas', 'plus']" />
            </BtnIconRounded>
          </div>
          <div class="p-4">
            <BtnIconRounded @click="cartStore.removeItem(item)">
              <font-awesome-icon :icon="['fas', 'minus']" />
            </BtnIconRounded>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss"></style>
