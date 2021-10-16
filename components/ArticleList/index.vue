<template>
  <div class="article-wrapper">
    <div class="article-list bg-white my-s p-s">
      <div class="article-item py-s">
        <div class="article-thumb">
          <a href="/">
            <img src="@/assets/images/article_thumb.png">
          </a>
        </div>
        <div class="article-info">
          <a class="title text-black fs-lg">
            这是标题信息
          </a>
          <p class="desc text-dark fs-md my-sm">
            这是描述信息
          </p>
          <div class="others">
            <div class="created-time">
              <i class="iconfont icon-date text-grey" />
              <span class="text-grey">2021-10-16</span>
            </div>
            <div class="views mx-md">
              <i class="iconfont icon-eye text-grey" />
              <span class="text-grey">33</span>
            </div>
            <div class="category">
              <i class="iconfont icon-category text-grey" />
              <span class="text-grey">vue</span>
            </div>
          </div>
        </div>
      </div>
      <div class="article-item py-s">
        <div class="article-thumb">
          <a href="/">
            <img src="@/assets/images/article_thumb.png">
          </a>
        </div>
        <div class="article-info">
          <a class="title text-black fs-lg">
            这是标题信息
          </a>
          <p class="desc text-dark fs-md my-sm">
            这是描述信息
          </p>
          <div class="others">
            <div class="created-time">
              <i class="iconfont icon-date text-grey" />
              <span class="text-grey">2021-10-16</span>
            </div>
            <div class="views mx-md">
              <i class="iconfont icon-eye text-grey" />
              <span class="text-grey">33</span>
            </div>
            <div class="category">
              <i class="iconfont icon-category text-grey" />
              <span class="text-grey">vue</span>
            </div>
          </div>
        </div>
      </div>
      <div class="article-item py-s">
        <div class="article-thumb">
          <a href="/">
            <img src="@/assets/images/article_thumb.png">
          </a>
        </div>
        <div class="article-info">
          <a class="title text-black fs-lg">
            这是标题信息
          </a>
          <p class="desc text-dark fs-md my-sm">
            这是描述信息
          </p>
          <div class="others">
            <div class="created-time">
              <i class="iconfont icon-date text-grey" />
              <span class="text-grey">2021-10-16</span>
            </div>
            <div class="views mx-md">
              <i class="iconfont icon-eye text-grey" />
              <span class="text-grey">33</span>
            </div>
            <div class="category">
              <i class="iconfont icon-category text-grey" />
              <span class="text-grey">vue</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination bg-white text-center">
      <i class="icon" />
      <span class="fs-md text-dark">more</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleList'
}
</script>

<style lang="scss" scoped>
.article-list {
  @include radius;
  .article-item {
    border-bottom: 1px solid map-get($colors, 'gray');
    @include flex(flex-start, center);
    .article-thumb {
      width: 140px;
      border: 1px dashed map-get($colors, 'gray');
      @include radius;
      transition: all .3s;
      &:hover {
        border: 1px dashed map-get($colors, 'grey');
      }
    }
    .article-info {
      margin-left: 10px;
      > .title {
        cursor: pointer;
        transition: all .3s;
        &:hover {
          color: map-get($colors, 'blue');
          border-bottom: 1px solid map-get($colors, 'blue');
        }
      }
      > .others {
        @include flex(center, center);
        font-size: 12px;
        span {
          vertical-align: 1px;
        }
      }
    }
  }
}
.pagination {
  height: 25px;
  line-height: 25px;
  opacity: .8;
  @include radius;
  cursor: pointer;
  transition: all .2s;
  &:hover {
    opacity: 1;
  }
}
</style>
