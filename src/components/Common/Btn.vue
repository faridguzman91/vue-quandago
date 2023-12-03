<script setup>
defineProps(["label", "icon", "size"]);
</script>

<template>
  <button class="btn outlined text-md h-full p-4">
    <slot></slot>
  </button>
</template>

<style lang="scss"></style>
