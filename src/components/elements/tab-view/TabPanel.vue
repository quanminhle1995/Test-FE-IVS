<template>
  <div ref="panel" class="tab-panel" :class="active ? 'active' :''">
    <div class="panel-header" @click="handleCollap">
      <slot name="header"></slot>
      <div class="icon-arrow">
        <IconArrowRight v-if="showSubMenu" />
        <IconArrowDown v-else />
      </div>
    </div>
    <div class="panel-container">
      <div class="panel-optional">
        <slot name="optional" />
      </div>
      <div class="childs">
        <span class="sub-title">{{ subtitle }}</span>
        <ul>
          <li v-for="child in childs">
            <a>{{ child.name }}</a>
          </li>
        </ul>
      </div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, withDefaults } from "vue";
import IconArrowDown from "../../icons/IconArrowDown.vue";
import IconArrowRight from "../../icons/IconArrowRight.vue";
export interface Props {
  childs?: any;
  subtitle?: string;
  active?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  subtitle: "",
  active: false,
});
const panel = ref<HTMLElement | null>(null);
const showSubMenu = ref(!props.active);
const handleCollap = () => {
  panel.value?.classList.toggle("active");
  showSubMenu.value = !showSubMenu.value;
};
</script>

<style lang="scss" scoped>
.tab-panel {
  height: 60px;
  overflow: hidden;
  transition: .3s;
  border-bottom: 1px solid white;
  .panel-header {
    display: flex;
    align-items: center;
    padding: 20px 0;
    font-size: 0.8125em;
    padding-left: 5px;
    :deep(span) {
      padding-left: 5px;
    }
    .icon-arrow {
      position:absolute;
      right: 10px;
    }
  }
  &.active {
    height: auto;
    max-height: fit-content;
    padding-bottom: 10px;
    &:first-child {
      padding-top: 20px;
    }
    .panel-header {
      position: relative;
      cursor: pointer;
      height: 30px;
      border-left: 3px solid var(--gray);
      font-size: 0.625em;
      &::after {
        content: "";
        position: absolute;
        background-color: var(--lightGray);
        width: 100%;
        height: 100%;
        left: 0px;
        opacity: 0.2;
      }
    }
  }
  .panel-optional {
    padding: 10px;
  }
}

.childs {
  .sub-title {
    padding-left: 2rem;
    font-size: 0.625em;
    color: var(--gray);
    line-height: 1.6;
  }
  ul {
    list-style: none;
    margin-top: .5rem;
    padding-left: 2rem;
    li {
      font-size: 0.8125em;
      line-height: 2;
    }
  }
}
</style>
