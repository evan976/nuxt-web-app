<template>
  <div class="article-page">
    <ArticleDetail :article="article" />
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
import Advertising from '@/components/aside/right/ad'
import ArticleDetail from '@/components/article/item'

export default {
  name: 'ArticlePage',
  components: {
    Advertising,
    ArticleDetail
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
