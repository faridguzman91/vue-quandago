<script setup>
defineProps(["value"]);
</script>

<template>
  <i
    v-badge="value"
    size="large"
    class="btn btn-primary h-full w-full rounded-full p-4"
  >
    <slot></slot>
  </i>
</template>
