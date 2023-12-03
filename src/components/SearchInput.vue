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
    class="input input-bordered w-full h-full p-4"
    placeholder="Search items"
    @input="debouncedSearch($event.target.value)"
  />
</template>
