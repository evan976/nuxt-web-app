<template>
  <div class="article-page">
    <div class="article-detail bg-white p-md mb-s">
      <div class="origin" />
      <h1 class="article-title text-black">
        {{ article.title }}
      </h1>
      <div class="article-img">
        <a href="/">
          <img :src="article.thumb" :alt="article.id">
        </a>
      </div>
      <div class="article-content">
        <Markdown :content="article.content" />
      </div>
    </div>
    <div class="article-info bg-white fs-md my-s p-md">
      <div class="base-info text-dark my-xs p-s">
        本文于
        <span class="">{{ article.created_at | dateFormat('YYYY年MM月DD日') }}</span> 发布于 <span class="article-category">{{ article.category.name }}</span> ｜ 被浏览
        <span>{{ article.meta.views }}</span> 次
      </div>
      <div class="article-tags text-black my-xs p-s">
        文章标签：
        <div class="tag-item mr-s text-dark" v-for="tag in article.tags" :key="tag._id">
          {{ tag.name }}
        </div>
      </div>
      <div class="article-url text-black my-xs p-s">
        永久地址：<span class="text-dark">https://evanone.site/article/{{ article.id }}</span>
      </div>
      <div class="article-copyright text-black my-xs p-s">
        申明：<span class="text-dark">转载请注明出处，严禁非法转载！</span>
      </div>
    </div>
    <Advertising />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Markdown from '@/components/article/markdown'
import Advertising from '@/components/common/ad'

export default {
  name: 'ArticlePage',
  components: {
    Markdown,
    Advertising
  },
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },

  fetch ({ store, params }) {
    return store.dispatch('article/fetchDetail', params.id)
  },
  computed: {
    ...mapState({
      article: state => state.article.detail
    })
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

.article-info {
  @include radius;
  .base-info {
    @include radius;
    background-color: map-get($colors, 'gray');
    .article-category {
      cursor: pointer;
      transition: all .3s;
      &:hover {
        color: map-get($colors, 'blue');
      }
    }
  }
  .article-tags {
    @include radius;
    display: flex;
    background-color: map-get($colors, 'gray');
    .tag-item {
      cursor: pointer;
      transition: all .3s;
      &:hover {
        color: map-get($colors, 'blue');
      }
    }
  }
  .article-url,
  .article-copyright {
    @include radius;
    background-color: map-get($colors, 'gray');
    span {
      cursor: pointer;
      transition: all .3s;
      &:hover {
        color: map-get($colors, 'blue');
      }
    }
  }
}
</style>
