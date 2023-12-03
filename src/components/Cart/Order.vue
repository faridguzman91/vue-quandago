<script setup>
import Btn from "../Common/Btn.vue";
const emits = defineEmits(["changeTab"]);
</script>
<template>
  <div class="h-full flex flex-col justify-center items-center">
    <h1
      class="text-lg text-secondary dark:text-white font-ssp font-bold capitalize"
    ></h1>
    <div class="mt-8">
      <Btn :label="cart - list" size="sm" @click="emits('changeTab', 'list')" />
    </div>
  </div>
</template>
<style></style>
