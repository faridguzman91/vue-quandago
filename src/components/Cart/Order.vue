<script setup>
import Btn from "../Common/Btn.vue";
const emits = defineEmits(["changeTab"]);
</script>
<template>
  <div class="flex h-full flex-col items-center justify-center">
    <span className="loading loading-bars loading-lg"></span>
    <p class="text-lg">Processing order...</p>
    <div class="mt-8">
      <Btn @click="emits('changeTab', 'list')"> Cancel </Btn>
    </div>
  </div>
</template>
<style></style>
