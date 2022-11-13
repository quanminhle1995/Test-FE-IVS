<template>
  <a class="thumbnail" :href="link">
    <img alt="thumbnail" width="289" height="160" :src="`src/assets/images/${image}`" />

    <div class="description">
      <span class="title">{{ title }}</span>
      <span class="link" >{{ link }}</span>
    </div>
  </a>
</template>

<script setup lang="ts">
export interface IThumbnail {
  image?: string;
  title?: string;
  link?: string;
}
defineProps<IThumbnail>();

</script>

<style scoped lang="scss">
.thumbnail {
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  text-decoration: none;
  img {
    width: 100%;
    height: auto;
  }
  .description {
    width: 100%;
    background-color: #0000001a;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    line-height: 1.6;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    .title {
      width: 100%;
      font-size: 0.438em;
      color: var(--lightBlue);
    }
    .link {
      color: var(--gray);
      font-size: 0.625em;
      width: 107px;
      overflow: hidden;
      cursor: pointer;
      text-decoration: none;
    }
  }
}
</style>
