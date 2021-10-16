<template>
  <div class="search-wrapper bg-white mb-s py-s">
    <input class="search-input px-s" type="text" placeholder="搜索">
    <button class="search-btn">
      <i class="iconfont icon-search" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="scss" scoped>
.search-wrapper {
  @include flex(center, center);
  @include radius;
  .search-input {
    width: 190px;
    height: 30px;
    background-color: map-get($colors, 'gray');
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }
  .search-btn {
    width: 40px;
    height: 30px;
    font-weight: 500;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    color: map-get($colors, 'white');
    background-color: map-get($colors, 'orange');
    cursor: pointer;
  }
}
</style>
