<template>
  <div class="search-page">
    <Swiper />
    <ArticleList :article="article" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Swiper from '@/components/common/swiper'
import ArticleList from '@/components/article/list'

export default {
  name: 'SearchPage',
  components: {
    Swiper,
    ArticleList
  },
  computed: {
    ...mapState({
      article: state => state.article.list
    })
  }
}
</script>
