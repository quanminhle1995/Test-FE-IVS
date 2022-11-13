<template>
  <div class="tag" v-if="msg">
    <span :class="size">{{msg}}</span>
    <span class="icon-close" @click="removeTag">x</span>
  </div>
</template>


<script setup lang="ts">
defineProps(['msg','size']);
const emits = defineEmits(['removeTag'])
const removeTag = (e: Event) => {
  emits('removeTag', e)
}

</script>


<style scoped lang="scss">
.tag {
  display: flex;
  justify-self: center;
  background-color: var(--bgTag);
  width: fit-content;
  padding: 2px 5px;
  border-radius: 5px;
  span {
    color: var(--blue);
    font-weight: bold;
    font-size: 0.625em;
    &.small {
      font-size: 0.625em;
    }
    &.large {
      font-size: 3em;
    }
  } 
  .icon-close {
    margin-left:10px;
    cursor: pointer;
    color: var(--gray);
  }
}
</style>