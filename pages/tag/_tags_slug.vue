<template>
  <div class="tag-page">
    <Thumb :item="currentTag" />
    <ArticleList :article="article" />
  </div>
</template>

<script>
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

  fetch ({ store, params }) {
    return store.dispatch('article/fetchList', params)
  },

  computed: {
    article () {
      return this.$store.state.article.list
    },
    currentTag () {
      return this.$store.state.tag.data.find(
        tag => tag.slug === this.$route.params.tags_slug
      )
    }
  },

  created () {
    if (!this.currentTag) {
      this.$router.back()
    }
  }

}
</script>

<style>

</style>
