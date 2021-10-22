<template>
  <div class="tag-page">
    <Thumb :item="currentTag" />
    <ArticleList :article="article" @loadmore="loadMore" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Thumb from '@/components/common/thumb'
import ArticleList from '@/components/article/list'

export default {
  name: 'TagPage',
  components: {
    Thumb,
    ArticleList
  },

  validate ({ params, store }) {
    return params.tags_slug && store.state.tag.data.some(
      tag => tag.slug === params.tags_slug
    )
  },

  computed: {
    ...mapState({
      article: state => state.article.list
    }),
    currentTag () {
      return this.$store.state.tag.data.find(
        tag => tag.slug === this.$route.params.tags_slug
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
    }
  },

  methods: {
    loadMore () {
      this.$store.dispatch('article/fetchList', this.nextPageParams)
    }
  },

  created () {
    this.$store.dispatch('article/fetchList', this.$route.params)
    if (!this.currentTag) {
      this.$router.back()
    }
  }
}
</script>
