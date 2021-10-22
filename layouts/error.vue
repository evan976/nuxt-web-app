<template>
  <div class="error-page bg-white">
    <img
      class="error-img"
      v-if="error.statusCode === 404"
      src="@/assets/images/404.svg"
      alt="404"
    >
    <h1 v-else>应用发生错误异常</h1>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: {
    error: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.error-page {
  width: 100%;
  height: 640px;
  @include radius;
  @include flex(center, center);
  .error-img {
    width: 50%;
    margin-bottom: 50px;
  }
}
</style>
