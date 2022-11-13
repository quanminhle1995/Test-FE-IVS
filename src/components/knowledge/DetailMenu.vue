<template>
  <div class="detail-menu">
    <div class="group-settings">
      <div class="type-setting">
        <span>カテゴリー</span>
      </div>
      <div class="settings">
        <div class="select-type">
          <RadioButton
            label="ナレッジ"
            value="0"
            v-model="knowledge.type"
          ></RadioButton>
          <RadioButton
            label="投稿シェア"
            value="1"
            v-model="knowledge.type"
          ></RadioButton>
          <RadioButton
            label="リクエスト"
            value="2"
            v-model="knowledge.type"
          ></RadioButton>
        </div>
      </div>
    </div>
    <div class="group-settings">
      <div class="type-setting">
        <span>ナレッジ元</span>
      </div>
      <div class="settings">
        <div class="knowledge-source">
          <ul>
            <li>
              <span>通常フォロー</span>
              <div>
                <Dropdown
                  v-model="knowledge.source"
                  :list="dataSource"
                ></Dropdown>
              </div>
            </li>
            <li>
              <span>1次情報まで追いかける</span>
              <span class="highlight">numao</span>
            </li>
            <li>
              <span>以下のメンバーが1次情報の場合は表示しない</span>
              <span class="highlight">matsumoto</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="group-settings">
      <div class="type-setting">
        <span>ナレッジタグ</span>
        <InputSwitch
          labelLeft="and"
          labelRight="or"
          v-model="knowledge.keyword"
        ></InputSwitch>
      </div>
      <div class="settings">
        <div class="knowledge-keyword">
          <ul>
            <li>
              <span>キーワード</span>
              <span class="highlight">契約書</span>
            </li>
            <li>
              <span>含まないキーワード</span>
              <span class="highlight">業務委託</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="group-settings">
      <div class="type-setting">
        <span>ナレッジタグ</span>
        <InputSwitch
          labelLeft="and"
          labelRight="or"
          v-model="knowledge.tag"
        ></InputSwitch>
      </div>
      <div class="settings">
        <div class="knowledge-tag">
          <ul>
            <li>
              <span>指定タグ</span>
              <span
                ><Tag msg="契約関連" @removeTag="handleRemoveTag"></Tag
              ></span>
            </li>
            <li>
              <span>含まないタグ</span>
              <span
                ><Tag
                  msg="契約関連"
                  size="large"
                  @removeTag="handleRemoveTag"
                ></Tag
              ></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="group-settings">
      <div class="type-setting">
        <span>日時指定</span>
      </div>
      <div class="settings">
        <p>日時指定を追加する</p>
      </div>
    </div>

    <div class="group-settings">
      <div class="type-setting">
        <span>いいね数</span>
      </div>
      <div class="settings">
        <p>いいね数を指定する</p>
      </div>
    </div>
    <div class="group-settings">
      <div class="type-setting">
        <span>お気に入り</span>
      </div>
      <div class="settings">
        <input type="checkbox" v-model="knowledge.favorite" />
      </div>
    </div>
    <div class="action">
      <button @click="save">フィルターを更新</button>
      <div
        class="switch-simple-search open-simple-menu"
        @click="openSimpleMenu"
      >
        <IconSwap class="open-simple-menu"></IconSwap>
        <span class="open-simple-menu">簡易検索に切り替え</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import RadioButton from "@/components/elements/RadioButton.vue";
import InputSwitch from "@/components/elements/InputSwitch.vue";
import IconSwap from "@/components/icons/IconSwap.vue";
import Tag from "@/components/elements/Tag.vue";
import { useKnowledgeStore } from "@/stores/knowledge";
import Dropdown from "@/components/elements/Dropdown.vue";
import { storeToRefs } from "pinia";
export interface ISettings {
  type?: number;
  source?: string;
  tag?: boolean;
  keyword?: boolean;
  dateTimeDesignation?: string;
  likeCount?: number;
  favorite?: boolean;
}
export interface PropSettings {
  index: number;
  settings: ISettings | any;
}
const props = withDefaults(defineProps<PropSettings>(), {
  settings: {
    type: 0,
    source: "murakami",
    tag: false,
    keyword: false,
    dateTimeDesignation: "",
    likeCount: 0,
    favorite: false,
  },
});
const store = useKnowledgeStore();
const { openSimpleMenu, updateSettingsBord  } = store;
const { dataSource } = storeToRefs(store);

const emits = defineEmits(["saveSettings", "closeDetailMenu"]);
const { type, source, tag, keyword, dateTimeDesignation, likeCount, favorite } =
  props.settings;
const knowledge = reactive({
  type: type,
  source: source,
  tag: tag,
  keyword: keyword,
  dateTimeDesignation: dateTimeDesignation,
  likeCount: likeCount,
  favorite: favorite,
});

const handleRemoveTag = (e: Event) => {
  console.log(e);
};

const save = () => {
  updateSettingsBord(props.index, knowledge);
  emits("saveSettings", knowledge);
  emits("closeDetailMenu");
};

</script>

<style scoped lang="scss">
.detail-menu {
  position: absolute;
  width: 100%;
  background-color: white;
  height: 100%;
  z-index: 1;
  box-shadow: 0px -2px 9px -2px var(--gray);
  padding: 20px 10px;
  width: 100%;
  overflow: auto;
  overflow-x: hidden;
  padding-bottom: 10vh;
  .group-settings {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 1.5rem;
    .type-setting {
      width: 20%;
      font-size: 0.625em;
      color: var(--gray);
    }
    .settings {
      width: 80%;
      font-size: 0.625em;
      padding-left: 10px;
    }
    ul {
      list-style: none;

      padding-left: 0;
      li {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 10px;
        line-height: 2;
        span {
          width: 100%;
          font-size: 0.438em;
          color: var(--gray);
          &.highlight {
            color: var(--blue);
            font-size: 0.688em;
            font-weight: bold;
          }
        }
        // line-height: 3;
      }
    }
  }
  .action {
    button {
      background-color: var(--blue);
      color: white;
      border: none;
      padding: 5px 20px;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
    }
    .switch-simple-search {
      padding-top: 0.7rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      span {
        padding-left: 10px;
        color: var(--gray);
      }
    }
  }
  .select-type {
    display: flex;
    gap: 5px;
  }
}
</style>

function useKnowledgeStore() { throw new Error("Function not implemented."); }
function useKnowledgeStore() { throw new Error("Function not implemented."); }
