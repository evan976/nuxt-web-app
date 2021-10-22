<template>
  <div class="search-page">
    <Swiper />
    <Advertising v-if="!article.data.length" />
    <Empty v-if="!article.data.length" />
    <ArticleList :article="article" @loadmore="loadMore" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Empty from '@/components/common/empty'
import Swiper from '@/components/common/swiper'
import Advertising from '@/components/common/ad'
import ArticleList from '@/components/article/list'

export default {
  name: 'SearchPage',
  components: {
    Empty,
    Swiper,
    Advertising,
    ArticleList
  },
  computed: {
    ...mapState({
      article: state => state.article.list
    }),
    defaultParams () {
      return {
        keyword: this.$route.params.keyword
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
  }
}
</script>
