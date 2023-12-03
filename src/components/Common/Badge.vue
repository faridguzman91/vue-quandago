<script setup>
defineProps(["value"]);
</script>

<template>
  <button v-badge="value" class="btn btn-primary w-full h-full rounded-full text-md p-4">
    <slot></slot>
  </button>
</template>

<style lang="scss"></style>
