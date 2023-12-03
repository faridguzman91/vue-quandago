<script setup>
defineProps(["icon", "fontSize"]);
</script>

<template>
  <button class="btn btn-outline m-2 h-full text-sm">
    <slot></slot>
  </button>
</template>

<style lang="scss"></style>
