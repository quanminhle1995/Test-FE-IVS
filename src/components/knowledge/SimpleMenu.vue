<template>
  <div class="simple-menu" ref="simpleMenu">
    <div class="info">
      <input placeholder="#タイトルを入力" v-model="data.boardName" />
      <div class="options">
        <div class="option">
          <label>カテゴリー</label>
          <div class="content">
            <RadioButton
              label="ナレッジ"
              value="0"
              v-model="data.type"
            ></RadioButton>
            <RadioButton
              label="投稿シェア"
              value="1"
              v-model="data.type"
            ></RadioButton>
            <RadioButton
              label="投稿シェア"
              value="2"
              v-model="data.type"
            ></RadioButton>
          </div>
        </div>
        <div class="option">
          <label>ナレッジ元</label>
          <div class="content">
            <Dropdown v-model="data.source" :list="dataSource"></Dropdown>
          </div>
        </div>
        <div class="option">
          <label>キーワード</label>
          <div class="content">
            <Dropdown v-model="data.keyword" :list="dataKeyWord"></Dropdown>
          </div>
        </div>
      </div>
    </div>
    <div class="filters-loading">
      <span class="loading">フィルター設定中…</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import RadioButton from "@/components/elements/RadioButton.vue";
import { reactive, ref, computed, watch } from "vue";
import Dropdown from "@/components/elements/Dropdown.vue";
import { useDetectOutsideClick } from "@/utility/common";
import { useKnowledgeStore } from "@/stores/knowledge";
import { storeToRefs } from "pinia";
const emits = defineEmits(["simpleMenuChange", "close", "update:modelValue"]);
const props = defineProps(["type", "modelValue"]);

const store = useKnowledgeStore();
const { dataKeyWord, dataSource, createNewBoard } = store;
const data = ref({
  boardName: "",
  index: "",
  tag: "",
  type: "",
  source: "",
  keyword: "",
  dateTimeDesignation: ""
});

const simpleMenu = ref<HTMLElement | null>(null);
if (props.type === "create") {
  useDetectOutsideClick(simpleMenu, (e: any) => {
    if (!!data.value.boardName) {
      createNewBoard(data.value);
      emits("close");
    } else if (!e.target.classList.value.includes("btn-add-filter")) {
      emits("close");
    }
  });
} else if (props.type === "update") {
  data.value = props.modelValue;
  watch(data.value, () => {
    emits("update:modelValue", data);
  });
}
</script>

<style scoped lang="scss">
.simple-menu {
  position: absolute;
  top: 0;
  right: 50px;
  height: 100%;
  width: 29%;
  background: white;
  margin-top: 77px;

  .info {
    padding: 19px 22px;
    box-shadow: 0px 1px 7px -3px var(--gray);
    border-radius: 5px;
    input {
      width: 100%;
      height: 31px;
      border: none;
      outline: none;
      color: var(--gray);
      margin-bottom: 1rem;
      &::placeholder {
        color: var(--lightGray);
      }
    }
    .option {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      font-size: 0.563em;
      margin-bottom: 1rem;
      color: var(--gray);
      label {
        width: 25%;
      }
      .content {
        width: 75%;
        display: flex;
        gap: 5px;
      }
    }
  }
  .filters-loading {
    height: 100%;
    text-align: center;
    padding-top: 100px;
    font-weight: bold;
    span {
      font-size: 0.563em;
      color: var(--blue);
    }
  }
}
</style>
