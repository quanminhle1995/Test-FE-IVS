<template>
  <div class="board">
    <div class="header">
      <span class="filter">#{{ showBoardName }}</span>
      <IconViewmore
        color="#01194B"
        class="detail-menu"
        @click="openDetailMenu"
      ></IconViewmore>
    </div>
    <DetaiMenu
      v-if="showMenuDetail"
      :index="index"
      :settings="settings"
      :boardName="showBoardName"
      @closeDetailMenu="showMenuDetail = false"
      @onChange="handleChangeSettings"
    ></DetaiMenu>

    <div class="container">
      <Post
        v-for="item in data"
        :userName="item.userName"
        :avatar="item.avatar"
        :note="item.note"
        :title="item.title"
        :description="item.description"
        :thumbnail="item.thumbnail"
        :interact="item.interact"
      ></Post>
    </div>
  </div>
</template>
<script lang="ts" setup>
import IconViewmore from "@/components/icons/IconViewmore.vue";
import { ref } from "vue";
import type { IPost } from "@/components/knowledge/Post.vue";
import Post from "@/components/knowledge/Post.vue";
import DetaiMenu from "@/components/knowledge/DetailMenu.vue";
export interface PropsBoard {
  index: number,
  boardName: string;
  data: IPost[] | any;
  settings: Object
}
const props = defineProps<PropsBoard>();
const showMenuDetail = ref(false);
const showBoardName = ref(props.boardName);
const openDetailMenu = () => {
  showMenuDetail.value = !showMenuDetail.value;
};

const handleChangeSettings = (dataChange: any) => {
  showBoardName.value = dataChange.boardName;
}

</script>

<style scoped lang="scss">
.board {
  background-color: white;
  // padding-bottom: 15vh;
  position: relative;
  .header {
    padding: 15px 22px;
    font-size: 0.9375em;
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 4px 0px var(--colorBoxShadow);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    .filter {
      width: 90%;
      font-weight: 500;
    }
    .detail-menu {
      float: right;
      cursor: pointer;
    }
  }
  .container {
    overflow: auto;
    overflow-x: hidden;
    height: 80vh;
    padding-bottom: 2vh;
  }
}
</style>
