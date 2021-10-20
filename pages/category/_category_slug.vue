<template>
  <div class="category-page">
    <Thumb :item="currentCategory" />
    <ArticleList :article="article" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Thumb from '@/components/common/thumb'
import ArticleList from '@/components/article/list'

export default {
  name: 'CategoryPage',
  components: {
    Thumb,
    ArticleList
  },

  validate ({ params, store }) {
    return params.category_slug && store.state.category.data.some(
      category => category.slug === params.category_slug
    )
  },

  fetch ({ store, params }) {
    return store.dispatch('article/fetchList', params)
  },

  computed: {
    ...mapState({
      article: state => state.article.list
    }),
    currentCategory () {
      return this.$store.state.category.data.find(
        category => category.slug === this.$route.params.category_slug
      )
    }
  },

  created () {
    if (!this.currentCategory) {
      this.$router.back()
    }
  }
}
</script>
