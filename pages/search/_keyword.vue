<template>
  <div class="search-page">
    <Swiper />
    <ArticleList />
  </div>
</template>

<script>
import Swiper from '@/components/common/swiper'
import ArticleList from '@/components/article/list'

export default {
  name: 'SearchPage',
  components: {
    Swiper,
    ArticleList
  }
}
</script>

<style lang="scss" scoped>
</style>
