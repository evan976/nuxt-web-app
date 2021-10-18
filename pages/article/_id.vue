<template>
  <div class="article-detail">
    <Thumb />
    <ArticleDetail />
  </div>
</template>

<script>
import Thumb from '@/components/common/thumb'
import ArticleDetail from '@/components/article/item'

export default {
  name: 'ArticlePage',
  components: {
    Thumb,
    ArticleDetail
  }
}
</script>

<style lang="scss" scoped>

</style>
