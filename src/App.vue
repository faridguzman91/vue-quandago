<script setup>
import Navbar from "./layouts/Navbar.vue";
</script>

<template>
  <div
    id="app-layout"
    class="mx-auto grid h-full max-w-bd-md grid-rows-bd-base"
  >
    <Navbar />
    <main class="h-full overflow-hidden">
      <div
        id="main-content-layout"
        class="flex h-full items-center justify-center"
      >
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<style></style>
