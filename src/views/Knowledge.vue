<template>
  <HeaderPage msg="ダッシュボード"></HeaderPage>
  <div class="knowledge-container">
    <div class="view-mode">
      <IconViewMode></IconViewMode>
      <span>タイムラインビュー</span>
    </div>
    <SearchPanel></SearchPanel>
    <router-view />
    <!-- <RouterView /> -->
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderPage from "@/components/HeaderPage.vue";
import IconViewMode from "@/components/icons/IconViewMode.vue";
import SearchPanel from "@/components/knowledge/SearchPanel.vue";
</script>

<style scoped lang="scss">
.knowledge-container {
  position: relative;
  padding: 0px 50px 5px 20px;
  .view-mode {
    padding: 5px 50px 5px 15px;
    display: flex;
    align-items: center;
    span {
      padding-left: 5px;
      font-size: 0.9375em;
    }
  }
}
</style>
