<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import BtnIconRounded from "../components/Common/BtnIconRounded.vue";
import DarkmodeToggler from "../components/Nav/DarkmodeToggler.vue";
const router = useRouter();
const openSidebar = ref(false);
const toggleSidebarAndNav = (destination: string) => {
  openSidebar.value = !openSidebar.value;
  router.push(destination);
};
</script>

<template>
  <div id="top-bar" class="flex items-center justify-between p-4">
    <BtnIconRounded class="sm" icon="pi pi-bars" @click="toggleSidebarAndNav">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </BtnIconRounded>
    <div id="nav-right-ctrls" class="w-full h-full flex justify-end items-center">
      <DarkmodeToggler />
    </div>
  </div>

  <Sidebar v-model:visible="openSidebar" :position="sideBarPosition" :showCloseIcon="false" class="bg-base-100">
    <template #header>
      <div class="position-layout-fix flex justify-end w-full">
        <BtnIconRounded @click="toggleSidebarAndNav">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </BtnIconRounded>
      </div>
    </template>
    <div class="position-layout-fix">
      <nav>
        <ul class="text-sm text-primary capitalize">
          <li>
            <button @click="toggleSidebarAndNav('/')">Home</button>
          </li>
        </ul>
      </nav>
    </div>
  </Sidebar>
</template>
