<template>
  <div class="radio-button" :class="active ? 'checked' : ''" @click="handleSelectRadioButton">
    <IconCheck v-if="active"></IconCheck>
    <label>{{label}}</label>
    <input ref="input"  type="radio" :value="value" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconCheck from "@/components/icons/IconCheck.vue";
import { computed } from "@vue/reactivity";
const props = defineProps(['label', 'value', 'modelValue']);
const emits = defineEmits(['update:modelValue']);
const input = ref<HTMLElement>();
const handleSelectRadioButton = () => {
  input?.value?.click();
  emits('update:modelValue', props.value);
};
const active = computed(() => {
  return props.value == props.modelValue
});
</script>

<style scoped lang="scss">
.radio-button {
  display: flex;
  justify-content: center;
  border: 1px solid var(--gray);
  border-radius: 5px;
  padding: 2px 0;
  cursor: pointer;
  width: 68px;
  &.checked {
    border-color: var(--blue);
  }
  svg {
    margin-right: 5px
  }
  input {
    cursor: pointer;
    display: none;
  }
}
</style>