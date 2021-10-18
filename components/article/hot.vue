<template>
  <div class="hot-article bg-white mb-s">
    <div class="hot-header px-s">
      <i class="iconfont icon-hot text-dark" />
      <span class="title text-dark">热门文章</span>
    </div>
    <div class="hot-body p-s">
      <ul class="article-list">
        <li class="article-item fs-md text-black">
          <span class="index bg-olive text-center text-white">1</span>
          <span class="title">文章标题</span>
        </li>
        <li class="article-item fs-md text-black">
          <span class="index bg-purple text-center text-white">2</span>
          <span class="title">文章标题</span>
        </li>
        <li class="article-item fs-md text-black">
          <span class="index bg-red text-center text-white">3</span>
          <span class="title">文章标题</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotArticle'
}
</script>

<style lang="scss" scoped>
.hot-article {
  width: 100%;
  height: auto;
  @include radius;
  .hot-header {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid map-get($colors, 'gray');
    font-size: 14px;
  }
  .article-item {
    height: 30px;
    @include flex(flex-start, center);
    .index {
      display: inline-block;
      line-height: 16px;
      width: 16px;
      height: 16px;
      margin-right: 10px;
      @include radius(1px);
    }
    .title {
      cursor: pointer;
      &:hover {
      color: map-get($colors, 'blue');
    }
    }
  }
}
</style>
