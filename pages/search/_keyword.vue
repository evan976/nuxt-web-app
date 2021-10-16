<template>
  <div class="search-page">
    <Swiper />
    <ArticleList />
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'
import ArticleList from '@/components/ArticleList'

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
