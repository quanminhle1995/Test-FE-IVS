<template>
  <div class="footer-post">
    <div class="left">
      <div class="action">
        <IconLike color="#01194B" opacity="1"></IconLike>
        <span class="count">{{like}}</span>
      </div>
      <div class="action">
        <IconChat color="#01194B" opacity="1"></IconChat>
        <span class="count">{{comment}}</span>
      </div>
      <div class="action">
        <IconShare color="#01194B" opacity="1"></IconShare>
        <span class="count">{{share}}</span>
      </div>
    </div>
    <div class="right">
     <IconViewmore color="#01194B" opacity="1"></IconViewmore>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconChat from "@/components/icons/IconChat.vue";
import IconLike from "@/components/icons/IconLike.vue";
import IconShare from "@/components/icons/IconShare.vue";
import IconViewmore from "@/components/icons/IconViewmore.vue";

export interface IInteract {
  like?: number,
  comment?: number,
  share?: number
}
defineProps<IInteract>();
</script>

<style scoped lang="scss">
.footer-post {
  padding: 10px 0 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .left {
    width: 50%;
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .right {
    width: 50%;
    display: flex;
    justify-content: right;
  }
  .action {
    display: flex;
    width: 33.33%;
    align-items:center;
    svg {
      cursor: pointer;
    }
  }
  .count {
    font-size: 0.563em;
    font-weight: bold;
    padding-left: 5px;
  }
}
</style>
