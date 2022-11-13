<template>
  <div class="list-post">
    <Bord v-for="(item, index) in filterDataBord" :key="item.key" :tag="item.tag" :data="item.posts" :settings="item.settings" :index="index"></Bord>
  </div>
  <button class="btn-add-filter open-simple-menu" @click="openSimpleMenu">
    +
  </button>
  <SimpleMenu v-if="showSimpleMenu"></SimpleMenu>
</template>

<script lang="ts" setup>
import Bord from "@/components/knowledge/Bord.vue";
import { storeToRefs } from "pinia";
import SimpleMenu from "@/components/knowledge/SimpleMenu.vue";
import { useKnowledgeStore } from "@/stores/knowledge";
const store = useKnowledgeStore();
const { openSimpleMenu, getDataBord, } = store;
const { showSimpleMenu, filterDataBord} = storeToRefs(store);
getDataBord();
</script>

<style scoped lang="scss">
.list-post {
  padding-top: 10px;
  display: -webkit-inline-box;
  gap: 15px;
  height: 89vh;
  overflow: auto;
  overflow-y: hidden;
  position: relative;
  .board {
    width: 33.3333%;
  }
}
.btn-add-filter {
  position: absolute;
  right: 0px;
  top: 8rem;
  width: 43px;
  height: 50px;
  background-color: white;
  color: var(--gray);
  border: none;
  outline: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  cursor: pointer;
  z-index: 1;
}
</style>
