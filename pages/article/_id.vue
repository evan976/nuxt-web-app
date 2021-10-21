<template>
  <div class="article-page">
    <ArticleDetail :article="article" />
    <div class="article-info bg-white my-s">
      <div class="category">
        {{ article.category.name }}
      </div>
      <div class="tags" v-for="tag in article.tags" :key="tag._id">
        {{ tag.name }}
      </div>
      <div class="times">
        {{ article.created_at | dateFormat('YYYY/MM/DD') }}
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
.copyright {
  @include radius;
}
</style>
