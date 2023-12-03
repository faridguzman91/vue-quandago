<script setup>
defineProps(["label", "icon", "size"]);
</script>

<template>
  <button class="outlined btn h-full p-4 text-md">
    <slot></slot>
  </button>
</template>

<style lang="scss"></style>
