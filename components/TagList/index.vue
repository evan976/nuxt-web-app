<template>
  <div class="tag-list bg-white mb-s">
    <div class="tag-header px-s">
      <i class="iconfont icon-tags text-dark" />
      <span class="title text-dark">标签</span>
    </div>
    <div class="tag-body p-s">
      <ul class="list">
        <nuxt-link to="/tag/code" class="tag-item px-s bg-gray">
          <i class="iconfont icon-react text-dark" />
          <span class="name text-dark">哈哈</span>
        </nuxt-link>
        <nuxt-link to="/tag/vue" class="tag-item px-s bg-gray">
          <i class="iconfont icon-react text-dark" />
          <span class="name text-dark">react</span>
        </nuxt-link>
        <nuxt-link to="/tag/react" class="tag-item px-s bg-gray">
          <i class="iconfont icon-react text-dark" />
          <span class="name text-dark">react</span>
        </nuxt-link>
        <nuxt-link to="/tag/node" class="tag-item px-s bg-gray">
          <i class="iconfont icon-react text-dark" />
          <span class="name text-dark">react</span>
        </nuxt-link>
        <nuxt-link to="/tag/css" class="tag-item px-s bg-gray">
          <i class="iconfont icon-react text-dark" />
          <span class="name text-dark">react</span>
        </nuxt-link>
        <nuxt-link to="/tag/html" class="tag-item px-s bg-gray">
          <i class="iconfont icon-react text-dark" />
          <span class="name text-dark">react</span>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagList'
}
</script>

<style lang="scss" scoped>
.tag-list {
  @include radius;
  .tag-header {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid map-get($colors, 'gray');
    font-size: 14px;
  }
  .tag-body {
    height: 300px;
    overflow: scroll;
    .tag-item {
      display: inline-block;
      margin: 5px;
      @include radius(1px);
      cursor: pointer;
      transition: all .2s;
      &:hover {
        background-color: map-get($colors, 'olive') !important;
      }
      &:hover .name, &:hover i {
        color: map-get($colors, 'white');
      }
      .name {
        font-size: 14px;
        vertical-align: 2px;
      }
    }
  }
}
</style>
