<template>
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21 9H14.6899L15.64 4.42999L15.67 4.10999C15.67 3.70001 15.5 3.32001 15.23 3.04999L14.17 2L7.58997 8.59003C7.21997 8.95001 7 9.45001 7 10V20C7 21.1 7.90002 22 9 22H18C18.83 22 19.54 21.5 19.84 20.78L22.86 13.73C22.95 13.5 23 13.26 23 13V11C23 9.90002 22.1 9 21 9ZM21 13L18 20H9V10L13.34 5.65997L12.23 11H21V13ZM5 10H1V22H5V10Z"
      :fill="color"
      :fill-opacity="opacity"
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
