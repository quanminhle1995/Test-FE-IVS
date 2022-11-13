<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import LeftMenu from "@/components/menu-left/LeftMenu.vue";
</script>

<template>
  <section id="menu-left">
    <LeftMenu></LeftMenu>
  </section>
  <section id="main-content">
    <RouterView />
  </section>
</template>

<style scoped></style>
