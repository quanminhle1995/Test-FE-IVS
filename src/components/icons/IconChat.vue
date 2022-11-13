<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="15px"
    viewBox="0 0 24 24"
    width="15px"
    :fill="color"
    :fill-opacity="opacity"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
    />
  </svg>
</template>
<script lang="ts" setup>
export interface Icon {
  color?: string;
  opacity?: string
}
withDefaults(defineProps<Icon>(), {
  color: "white",
  opacity: '0.8'
});
</script>
