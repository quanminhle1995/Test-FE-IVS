<template>
  <div class="header-menu">
    <div class="left">
      <span class="sup-title">ワークスペース</span>
      <h4 class="title">株式会社MAKAU</h4>
    </div>
    <div class="right">
      <span class="btn-more">
        <IconViewmore></IconViewmore>
      </span>
    </div>
  </div>
  <div class="container-menu">
    <TabView>
      <TabPanel
        :childs="tabPanelKnowlead"
        subtitle="10 個のボード"
        :active="true"
      >
        <template #header>
          <IconApp></IconApp>
          <span>ダッシュボード</span><span>- タイムラインビュー</span>
        </template>
        <template #optional>
          <button class="btn-create-knowledge">ナレッジを作成</button>
        </template>
      </TabPanel>
      <TabPanel :childs="tabFeedback" :active="false">
        <template #header>
          <IconLike></IconLike>
          <span>マイフィードバック</span>
        </template>
      </TabPanel>
      <TabPanel :active="false">
        <template #header>
          <IconChat></IconChat>
          <span>マイナレッジ</span>
        </template>
      </TabPanel>
    </TabView>
  </div>
</template>

<script lang="ts" setup>
import TabView from "@/components/elements/tab-view/TabView.vue";
import TabPanel from "@/components/elements/tab-view/TabPanel.vue";
import IconViewmore from "@/components/icons/IconViewmore.vue";
import IconApp from "@/components/icons/IconApp.vue";
import IconLike from "@/components/icons/IconLike.vue";
import IconChat from "@/components/icons/IconChat.vue";

const tabPanelKnowlead = [
  {
    name: "#ALL",
    link: "",
  },
  {
    name: "#契約書関係",
    link: "",
  },
  {
    name: "#沼尾さんナレッジ",
    link: "",
  },
  {
    name: ":",
    link: "",
  },
  {
    name: "すべて表示する",
    link: "",
  },
];

const tabFeedback = [
  {
    name: "#ALL",
    link: "",
  },
];
</script>

<style scoped lang="scss">
.header-menu {
  color: white;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid white;
  .left {
    width: 85%;
    padding: 10px 25px 10px 20px;
    .sup-title {
      font-size: 0.5em;
    }
    .title {
      font-weight: 500;
    }
  }
  .right {
    width: 15%;
    align-self: center;
    .btn-more {
      font-size: 2em;
      cursor: pointer;
    }
  }
}
.container-menu {
  color: white;
}
.btn-create-knowledge {
  width: 100%;
  background-color: var(--orange);
  color: white;
  padding: 10px 0;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
}
</style>
