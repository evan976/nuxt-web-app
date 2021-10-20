<template>
  <div class="article-page">
    <ArticleDetail :article="article" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ArticleDetail from '@/components/article/item'

export default {
  name: 'ArticlePage',
  components: {
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

</style>
