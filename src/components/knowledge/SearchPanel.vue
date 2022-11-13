<template>
  <div ref="searchPanel" class="search-panel">
    <input :placeholder="placeholder" @focus="hadleFocusInput" v-model="searchKey" />
    <IconSearch class="icon-search"></IconSearch>
    <div class="search-result" v-show="showSearchRerult">
      <p class="note">メンバー</p>
      <div class="user-list">
        <Avatar v-for="item in searchResult" :name="item.name" :img="item.avatar" :note="item.note"></Avatar>
      </div>
      <p class="note">
        <span>履歴</span>
      </p>
      <div class="action">ナレッジ</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconSearch from "@/components/icons/IconSearch.vue";
import Avatar from "@/components/elements/Avatar.vue";
import { ref, computed } from "vue";
import { useDetectOutsideClick } from "@/utility/common";

const searchPanel = ref<HTMLElement | null>(null);
const placeholder = ref("ボードを横断して検索");
const showSearchRerult = ref(false);
const searchKey = ref('');

const hadleFocusInput = () => {
  placeholder.value = "絞り込み検索";
  showSearchRerult.value = true;
};
useDetectOutsideClick(searchPanel, () => {
  placeholder.value = "ボードを横断して検索";
  showSearchRerult.value = false;
});

const searchResult = computed(() => {
  return listUser.filter(item => {
    return item.name.toLowerCase().includes(searchKey.value.toLocaleLowerCase());
  });
});

const listUser = [
  {
    name: 'numao',
    note: 'さんの投稿',
    avatar: ''
  },
  {
    name: 'narita',
    note: 'さんの投稿',
    avatar: ''
  }
]
</script>

<style scoped lang="scss">
.search-panel {
  position: relative;
  input {
    width: 100%;
    height: 37px;
    color: var(--gray);
    border: 1px solid var(--lineColor);
    padding-left: 35px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    &:focus-visible {
      outline: none;
    }
  }
  .icon-search {
    position: absolute;
    left: 15px;
    top: 10px;
  }
  .search-result {
    height: 243px;
    background: white;
    padding: 5px 5px 5px 25px;
    position: absolute;
    width: 100%;
    z-index: 2;
    box-shadow: 0 5px 5px -4px var(--gray);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    .note {
      text-align: center;
      color: var(--blue);
      span {
        cursor: pointer;
      }
    }
    .action {
      padding-top: 15px;
    }
    .user-list {
      border-bottom: 1px solid var(--lineColor);
      height: 145px;
      overflow: auto;
      overflow-x: hidden;
    }
  }
}
</style>
