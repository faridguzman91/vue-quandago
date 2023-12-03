<script setup>
import { useDebounceFn } from "@vueuse/core";
const emit = defineEmits(["searching"]);
const debouncedSearch = useDebounceFn((value) => {
  emit("searching", value);
}, 1000);
</script>

<template>
  <input
    type="text"
    class="input input-bordered h-full w-full p-4 text-primary"
    placeholder="Search for product..."
    @input="debouncedSearch($event.target.value)"
  />
</template>
