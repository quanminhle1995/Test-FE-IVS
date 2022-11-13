<template>
  <div class="list-post">
    <Board v-for="(item, index) in filterDataBoard" :key="item.key" :boardName="item.boardName" :data="item.posts" :settings="item.settings" :index="index"></Board>
  </div>
  <button class="btn-add-filter" @click="showSimpleMenu = true">
    +
  </button>
  <SimpleMenu v-if="showSimpleMenu" @close="showSimpleMenu = false" type="create"></SimpleMenu>
</template>

<script lang="ts" setup>
import Board from "@/components/knowledge/Board.vue";
import {ref} from "vue";
import { storeToRefs } from "pinia";
import SimpleMenu from "@/components/knowledge/SimpleMenu.vue";
import { useKnowledgeStore } from "@/stores/knowledge";
const store = useKnowledgeStore();
const { getDataBoard, } = store;
const { filterDataBoard} = storeToRefs(store);
const showSimpleMenu = ref(false);
getDataBoard();
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
