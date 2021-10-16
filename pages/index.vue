<template>
  <div class="index-page">
    <Swiper />
    <ArticleList />
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'
import ArticleList from '@/components/ArticleList'

export default {
  name: 'IndexPage',
  components: {
    Swiper,
    ArticleList
  }
}
</script>

<style lang="scss" scoped>
</style>
