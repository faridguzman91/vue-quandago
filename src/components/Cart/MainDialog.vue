<script setup>
import BtnIconRounded from "../Common/BtnIconRounded.vue";
import Tabs from "./Tabs.vue";

defineProps(["toggleCart", "totalCost"]);
const emits = defineEmits(["closeCart"]);
</script>

<template>
  <Dialog :visible="toggleCart" :closable="false" class="w-1/5 bg-base-100">
    <div class="w-full flex flex-col">
      <div class="w-full max-w-bd-sm mx-auto p-4 flex items-center justify-end">
        <BtnIconRounded @click="emits('closeCart')">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </BtnIconRounded>
      </div>
    </div>
    <Tabs />
    <div class="divider mt-6"></div>
    <div class="w-full text-md mt-8 flex flex-row justify-between">
      <p>Total</p>
      <p>$ {{ totalCost }}</p>
    </div>
  </Dialog>
</template>
