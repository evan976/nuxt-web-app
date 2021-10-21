<template>
  <div class="pagination bg-white mb-md fs-md">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-loading" />
    </svg>
  </div>
</template>

<script>

export default {
  name: 'Pagination',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  width: 100%;
  height: 30px;
  @include flex(center, center);
  @include radius;
}
</style>
