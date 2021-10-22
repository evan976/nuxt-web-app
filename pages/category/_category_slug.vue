<template>
  <div class="category-page">
    <Thumb :item="currentCategory" />
    <ArticleList :article="article" @loadmore="loadMore" />
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

  computed: {
    ...mapState({
      article: state => state.article.list
    }),
    currentCategory () {
      return this.$store.state.category.data.find(
        category => category.slug === this.$route.params.category_slug
      )
    },
    defaultParams () {
      return {
        tags_slug: this.$route.params.tags_slug
      }
    },
    nextPageParams () {
      return Object.assign({
        offset: this.article.pagination.offset + 1
      }, this.defaultParams)
    },
    categorySlug () {
      return this.$route.params.category_slug
    }
  },

  head () {
    return {
      title: `${this.categorySlug} | 分类`,
      meta: [
        { hid: 'keywords', name: 'keywords', content: `${this.categorySlug}` },
        { hid: 'description', name: 'description', content: `${this.categorySlug}` }
      ]
    }
  },

  methods: {
    loadMore () {
      this.$store.dispatch('article/fetchList', this.nextPageParams)
    }
  },

  created () {
    this.$store.dispatch('article/fetchList', this.$route.params)
    if (!this.currentCategory) {
      this.$router.back()
    }
  }
}
</script>
