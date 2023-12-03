<script setup>
import BtnIconRounded from "../Common/BtnIconRounded.vue";
import Tabs from "./Tabs.vue";
defineProps(["toggleCart", "totalCost"]);
const emits = defineEmits(["closeCart"]);
</script>

<template>
  <Dialog :visible="toggleCart" :closable="false" class="card glass w-1/5 border bg-base-100 shadow-lg">
    <div class="flex w-full flex-col">
      <div class="mx-auto flex w-full max-w-bd-sm items-center justify-end p-4">
        <BtnIconRounded @click="emits('closeCart')">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </BtnIconRounded>
      </div>
      <figure class="mb-6 border-primary">
        <img
          src="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="cart" />
      </figure>
      <div class="divider text-xs mb-6">Your cart</div>
    </div>
    <Tabs />
    <div class="divider mt-6"></div>
    <div class="mt-8 flex w-full flex-row justify-between text-md">
      <p>Total</p>
      <p>$ {{ totalCost }}</p>
    </div>
  </Dialog>
</template>
