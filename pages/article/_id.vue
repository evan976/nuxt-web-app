<template>
  <div class="article-detail">
    <Thumb />
    <ArticleDetail />
  </div>
</template>

<script>
import Thumb from '@/components/Thumb'
import ArticleDetail from '@/components/ArticleDetail'

export default {
  name: 'ArticlePage',
  components: {
    Thumb,
    ArticleDetail
  }
}
</script>

<style>

</style>
