<template>
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    :fill="color"
    :fill-opacity="opacity"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 8.5V4.5L3 11.5L10 18.5V14.4C15 14.4 18.5 16 21 19.5C20 14.5 17 9.5 10 8.5Z"
      :fill="color"
      fill-opacity="0.54"
    />
  </svg>
</template>

<style lang="scss" scoped></style>
<script lang="ts" setup>
export interface Icon {
  color?: string;
  opacity: string
}
withDefaults(defineProps<Icon>(), {
  color: "white",
  opacity: '0.8'
});
</script>

<style scoped lang="scss">
svg {
  rotate: 90;
}
</style>
