<template>
  <div class="tag-page">
    <Thumb />
    <ArticleList />
  </div>
</template>

<script>
import Thumb from '@/components/Thumb'
import ArticleList from '@/components/ArticleList'

export default {
  name: 'TagPage',
  components: {
    Thumb,
    ArticleList
  }
}
</script>

<style>

</style>
