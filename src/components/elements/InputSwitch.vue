<template>
  <div class="input-switch">
    <div class="left" :class="activeLeft ? 'checked' : ''" @click="handleSelectInputSwitch(false)">
      <label>{{ labelLeft }}</label>
    </div>
    <div class="right" :class="!activeLeft ? 'checked' : ''" @click="handleSelectInputSwitch(true)">
      <label>{{ labelRight }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
const props = defineProps(["labelLeft", "labelRight", "modelValue"]);
const emits = defineEmits(["update:modelValue"]);
const handleSelectInputSwitch = (value: boolean) => {
  emits('update:modelValue',value);
};
const activeLeft = computed(() => {
  return !props.modelValue;
});
</script>

<style scoped lang="scss">
.input-switch {
  display: flex;
  justify-content: center;
  cursor: pointer;
  .left {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right: none !important;
  }
  .right {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: none !important;
  }
  .left,
  .right {
    border: 1px solid var(--gray);
    padding: 2px 5px;
    width: 50%;
    label {
      font-size: 0.563em;
      cursor: pointer;
    }
    &.checked {
      background: var(--blue);
      color: white;
      font-weight: bold;
      transition: .3s;
    }
  }
}
</style>
