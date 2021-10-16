<template>
  <div class="category-page">
    <Thumb />
    <ArticleList />
  </div>
</template>

<script>
import Thumb from '@/components/Thumb'
import ArticleList from '@/components/ArticleList'

export default {
  name: 'CategoryPage',
  components: {
    Thumb,
    ArticleList
  }
}
</script>

<style lang="scss" scoped>

</style>
