<script setup>
defineProps(["label", "icon", "size"]);
</script>

<template>
  <button :label="label" :icon="icon" class="flat font-ssp" :class="[size]" />
</template>

<style lang="scss"></style>
