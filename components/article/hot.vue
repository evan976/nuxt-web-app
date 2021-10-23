<template>
  <div class="hot-article bg-white mb-s">
    <div class="hot-header px-s">
      <i class="iconfont icon-hot text-dark" />
      <span class="title text-dark">热门文章</span>
    </div>
    <div class="hot-body p-s">
      <ul class="article-list">
        <li
          v-for="(hot, index) in hotArticle"
          :key="hot._id"
          class="article-item fs-md text-dark"
          @click="$router.push(`/article/${hot.id}`)"
        >
          <span
            class="index text-center text-white"
            :class="index + 1 === 1 ? 'bg-red' : (index + 1 === 2 ? 'bg-orange' : (index + 1 === 3 ? 'bg-green' : 'bg-gray'))"
          >
            {{ index + 1 }}
          </span>
          <span class="title">{{ hot.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HotArticle',

  created () {
    this.fetchHotArticleList()
  },

  computed: {
    ...mapState({
      hotArticle: state => state.article.hot
    })
  },

  methods: {
    fetchHotArticleList () {
      this.$store.dispatch('article/fetchHotList')
    }
  }
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
