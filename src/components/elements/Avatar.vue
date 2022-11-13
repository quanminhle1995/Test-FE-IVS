<template>
  <div class="user-avatar">
    <img v-if="img" width="50px" height="50px" :src="`src/assets/images/${img}`" :alt="name" />
    <div v-else class="avt-default">
    </div>
    <span class="name">{{name}}</span>
    <span class="note">{{note}}</span>
  </div>
</template>

<script lang="ts" setup>
export interface Avatar {
  img?: string,
  name?: string,
  note?: string
}
defineProps<Avatar>();



</script>


<style scoped lang="scss">
.user-avatar {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  span {
    padding-left: 5px;
  }
  .name {
    color: var(--blue);
    font-weight: 500;
  }
  .note {
    color: var(--gray);
    padding-left: 10px;
  }
  .avt-default {
    width: 50px;
    height: 50px;
    background-color: var(--lightGray);
    border-radius: 50%;
  }
}
</style>