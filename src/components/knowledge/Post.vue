<template>
  <div class="post">
    <div class="post-header">
      <Avatar :name="userName" :img="avatar"></Avatar>
      <span class="note">{{ note }}</span>
    </div>
    <div class="post-conent">
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
      <Thumbnail
        :image="thumbnail.image"
        :link="thumbnail.link"
        :title="thumbnail.title"
      ></Thumbnail>
    </div>
    <FooterPost
      :like="interact.like"
      :comment="interact.comment"
      :share="interact.share"
    ></FooterPost>
  </div>
</template>

<script lang="ts" setup>
import Avatar from "@/components/elements/Avatar.vue";
import FooterPost from "@/components/knowledge/FooterPost.vue";
import Thumbnail from "@/components/elements/Thumbnail.vue";
import type { IThumbnail } from "@/components/elements/Thumbnail.vue";
import type { IInteract } from "@/components/knowledge/FooterPost.vue";

export interface IPost {
  userName?: string;
  avatar?: string;
  note?: string;
  title?: string;
  description?: string;
  thumbnail?: IThumbnail | Object | any;
  interact?: IInteract | Object | any;
}

withDefaults(defineProps<IPost>(), {
  userName: "numao",
  avatar: "image-dummy.png",
  note: "たった今",
  title: "FY22 キックオフミーティング資料",
  description: "こちらに格納されています",
  image: "sadasd",
  like: 0,
  thumbnail: {
    image: "",
    link: "",
    title: "",
  },
  interact: {
    like: 0,
    comment: 0,
    share: "",
  },
});
</script>

<style scoped lang="scss">
.post {
  padding: 15px;
  border-bottom: 1px solid var(--hrColor);
  .post-header {
    position: relative;
    .note {
      position: absolute;
      right: 20px;
      top: 0px;
      color: var(--gray);
      font-size: 0.438em;
    }
  }
  .post-conent {
    .title {
      font-size: 0.875em;
      color: black;
      word-break: break-word;
      font-weight: bold;
    }
    .description {
      font-size: 0.938em;
      color: black;
      word-break: break-word;
    }
  }
}
</style>
