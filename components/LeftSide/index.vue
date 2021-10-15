<template>
  <div class="app-aside bg-white">
    <div class="category-wrapper py-s">
      <nuxt-link class="m-s px-s menu-item" to="/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-home" />
        </svg>
        <span>首页</span>
      </nuxt-link>
      <nuxt-link class="m-s px-s menu-item" to="/category/2">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-vue" />
        </svg>
        <span>分类</span>
        <i class="iconfont icon-right" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAside'
}
</script>

<style lang="scss" scoped>
.app-aside {
  width: 190px;
  height: auto;
  margin-right: 10px;
  float: left;
  @include radius;
  .category-wrapper {
    .menu-item {
      font-size: 14px;
      height: 35px;
      @include radius;
      @include flex(space-between, center);
      transition: all .3s;
      &:hover {
        color: map-get($colors, 'blue');
        background-color: map-get($colors, 'gray');
      }
      span {
        flex: 1;
        margin-left: 10px;
      }
    }
  }
}
</style>
