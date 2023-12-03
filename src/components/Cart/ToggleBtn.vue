<script setup>
import { ref, watch } from "vue";
import Badge from "../Common/Badge.vue";
const props = defineProps(["totalItems"]);
const cartRef = ref(null);

watch(
  () => props.totalItems,
  () => {
    cartRef.value.classList.add("animate__heartBeat");
  },
);

const removeTadaClass = () => {
  cartRef.value.classList.remove("animate__heartBeat");
};
</script>
<template>
  <div id="animation-box" class="inline-block cursor-pointer animate__animated" @animationend="removeTadaClass"
    ref="cartRef">
    <Badge :value="totalItems">
      <font-awesome-icon :icon="['fas', 'cart-shopping']" />
    </Badge>
  </div>
</template>
<style lang="scss"></style>
