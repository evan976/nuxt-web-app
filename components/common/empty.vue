<template>
  <div class="empty bg-white mt-s">
    <img class="empty-icon" src="@/assets/images/empty.svg">
    <span class="text-grey fs-md">空空如也</span>
  </div>
</template>

<script>
export default {
  name: 'Empty'
}
</script>

<style lang="scss" scoped>
.empty {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @include radius;
  .empty-icon {
    width: 48px;
  }
}
</style>
