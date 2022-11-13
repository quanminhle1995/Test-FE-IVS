
<template>
  <div class="header-page">
    {{msg}}
  </div>
</template>

<script lang="ts" setup>
defineProps(['msg']);
</script>


<style scoped lang="scss">
.header-page {
  border-bottom: 1px solid var(--lineColor);
  font-size: 1.25em;
  padding: 5px 30px;
  font-weight: 500;
}
</style>