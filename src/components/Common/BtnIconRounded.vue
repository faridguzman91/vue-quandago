<script setup>
defineProps(["icon", "fontSize"]);
</script>

<template>
  <button class="btn btn-outline text-sm m-2 h-full">
    <slot></slot>
  </button>
</template>

<style lang="scss"></style>
