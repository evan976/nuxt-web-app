<template>
  <div class="index-page">
    <Swiper />
    <ArticleList :article="article" @loadmore="loadMore" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Swiper from '@/components/common/swiper'
import ArticleList from '@/components/article/list'

export default {
  name: 'IndexPage',
  components: {
    Swiper,
    ArticleList
  },

  created () {
    this.$store.dispatch('article/fetchList')
  },

  computed: {
    ...mapState({
      article: state => state.article.list
    }),
    nextPageParams () {
      return {
        offset: this.article.pagination.offset + 1
      }
    }
  },

  methods: {
    loadMore () {
      this.$store.dispatch('article/fetchList', this.nextPageParams)
    }
  }
}
</script>
