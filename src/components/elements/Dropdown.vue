<template>
  <div class="dropdown" ref="dropdown">
    <span class="value-select" @click="handleShowItems">{{showName ? showName : '設定なし'}}</span>
    <div class="list-item" v-if="showListItem">
      <ul>
        <li class="title" @click="showListItem = false">メンバーを検索</li>
        <li class="item" :class="checkActiveItem(item.value) ? 'active' : ''" v-for="item in list" @click="selectItem(item.value)">
          <div class="btn-radio"></div>
          {{ item.value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useDetectOutsideClick } from "@/utility/common";
export interface ItemDropdown {
  name: string,
  value: any
}
export interface PropsDropdown {
  list: ItemDropdown[],
  modelValue: any
}

// ["list", "modelValue"]
const props = defineProps<PropsDropdown>();
const emits = defineEmits(['update:modelValue']);
const showListItem = ref(false);

const dropdown = ref<HTMLElement | null>();
useDetectOutsideClick(dropdown, () => {
  // console.log("useDetectOutsideClick");
  showListItem.value = false;
})

const handleShowItems = () => {
  showListItem.value = true;
}

const checkActiveItem = (valueItem: any) => {
  return valueItem == props.modelValue;
}

const selectItem = (valueItem: any) => {
  emits('update:modelValue', valueItem);
  showListItem.value = false;
}

const showName = computed(() => {
  return props.list.find(i => i.value == props.modelValue)?.name;
});

</script>

<style scoped lang="scss">
.dropdown {
  position: relative;
  .value-select {
    font-size: 0.563em;
    color: var(--gray);
    cursor: pointer;
  }
  .list-item {
    background-color: white;
    position: absolute;
    top: 0px;
    box-shadow: 0px 0px 3px 0 grey;
    border-radius: 5px;
    z-index: 1;
    ul {
      padding: 0;
      list-style: none;
      overflow: auto;
      overflow-x: hidden;
      li {
        font-size: 0.75em;
        margin-bottom: 3px;
        &.title {
          font-size: 0.813em;
          background-color: var(--bgTitleDropdown);
          padding: 2px 51px 2px 10px;
          width: max-content;
        }
        &.item {
          color: var(--blue);
          display: flex;
          padding-left: 5px;
          cursor: pointer;
          .btn-radio {
            position: relative;
            width: 15px;
            height: 15px;
            background: var(--lightGray);
            border-radius: 50%;
            margin-right: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          &.active {
            .btn-radio {
              border: 1px solid var(--blue);
              &:after {
                position: absolute;
                content: '';
                width: 10px;
                height: 10px;
                background: var(--blue);
                border-radius: 50%;
              }
            }
          }
          &:hover {
            .btn-radio {
              border: 1px solid var(--blue);
              &:after {
                position: absolute;
                content: '';
                width: 10px;
                height: 10px;
                background: var(--blue);
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
