<template>
  <div class="article-page">
    <div class="article-detail bg-white p-md mb-s">
      <div class="article-origin fs-lg text-white">
        <div class="origin-bg" :style="article.origin === 0 ? 'border-bottom: 48px solid #39B54A;' : 'border-bottom: 48px solid #E54D42;'" />
        <p>{{ article.origin === 0 ? '原创' : '转载' }}</p>
      </div>
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
        <span class="">
          {{ article.created_at | dateFormat('YYYY年MM月DD日') }}
        </span>
        发布于
        <nuxt-link
          class="article-category"
          :to="`/category/${article.category.slug}`"
        >
          {{ article.category.name }}
        </nuxt-link>
        <span class="mx-s">|</span>
        被浏览
        <span>{{ article.meta.views }}</span> 次
      </div>
      <div class="article-tags text-black my-xs p-s">
        文章标签：
        <nuxt-link
          class="tag-item mr-s text-dark"
          v-for="tag in article.tags"
          :key="tag._id"
          :to="`/tag/${tag.slug}`"
        >
          {{ tag.name }}
        </nuxt-link>
      </div>
      <div class="article-url text-black my-xs p-s">
        永久链接：
        <a
          class="text-dark"
          :href="`/article/${article.id}`"
          target="_blank"
        >
          https://evanone.site/article/{{ article.id }}
        </a>
      </div>
      <div class="article-copyright text-black my-xs p-s">
        版权申明：<a class="text-dark">遵循CC 4.0 BY-SA版权协议，转载请注明出处，严禁非法转载</a>
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
  },

  head () {
    return {
      title: this.article.title,
      meta: [
        { hid: 'keywords', name: 'keywords', content: this.article.keywords },
        { hid: 'description', name: 'description', content: this.article.description }
      ]
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
  .article-origin {
    position: absolute;
    top: 0;
    left: 0;
    width: 48px;
    height: 48px;
    text-align: center;
    p {
      transform: rotate(-45deg);
      position: relative;
      top: 8px;
      left: -4px;
    }
    .origin-bg{
      width: 0;
      height: 0;
      border-right: 48px solid transparent;
      border-left: 48px solid transparent;
      transform: rotate(-45deg);
      position: absolute;
      top: -7px;
      left: -31px;
    }
  }
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
      border-bottom: 1px solid map-get($colors, 'grey');
      transition: all .3s;
      &:hover {
        color: map-get($colors, 'blue');
        border-bottom: 1px solid map-get($colors, 'blue');
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
      border-bottom: 1px solid map-get($colors, 'grey');
      &:hover {
        color: map-get($colors, 'blue');
        border-bottom: 1px solid map-get($colors, 'blue');
      }
    }
  }
  .article-url,
  .article-copyright {
    @include radius;
    background-color: map-get($colors, 'gray');
    a {
      cursor: pointer;
      border-bottom: 1px solid map-get($colors, 'grey');
      transition: all .3s;
      &:hover {
        border-bottom: 1px solid map-get($colors, 'blue');
        color: map-get($colors, 'blue');
      }
    }
  }
}
</style>
