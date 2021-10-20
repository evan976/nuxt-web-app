<template>
  <div class="article-detail bg-white p-md mb-s">
    <div class="origin" />
    <h1 class="article-title text-black">
      {{ article.title }}
    </h1>
    <div class="article-img">
      <a href="/">
        <img :src="article.thumb">
      </a>
    </div>
    <div class="article-content">
      <Markdown :content="article.content" />
    </div>
  </div>
</template>

<script>
import Markdown from './markdown'

export default {
  name: 'ArticleDetail',
  components: {
    Markdown
  },
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.article-detail {
  width: 100%;
  height: auto;
  @include radius;
  position: relative;
  .article-title {
    height: 64px;
    font-weight: 500;
    line-height: 64px;
    font-size: 24px;
    text-align: center;
  }
  .article-img {
    height: 194px;
    border: 4px solid map-get($colors, 'gray');
    overflow: hidden;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
