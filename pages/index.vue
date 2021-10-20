<template>
  <div class="index-page">
    <Swiper />
    <ArticleList :article="article" />
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

  fetch ({ store }) {
    return store.dispatch('article/fetchList')
  },

  computed: {
    ...mapState({
      article: state => state.article.list
    })
  }
}
</script>
