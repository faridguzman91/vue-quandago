<script setup>
defineProps(["value"]);
</script>

<template>
  <button
    v-badge="value"
    size="large"
    class="btn btn-primary h-full w-full rounded-full p-4"
  >
    <slot></slot>
  </button>
</template>
