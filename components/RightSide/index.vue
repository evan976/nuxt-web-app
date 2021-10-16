<template>
  <div class="main-right">
    <Search />
    <HotArticle />
    <Advertising />
    <TagList />
  </div>
</template>

<script>
import Search from '@/components/Search'
import HotArticle from '@/components/HotArticle'
import Advertising from '@/components/Advertising'
import TagList from '@/components/TagList'

export default {
  name: 'MainRight',
  components: {
    Search,
    HotArticle,
    Advertising,
    TagList
  }
}
</script>

<style lang="scss" scoped>
.main-right {
  width: 256px;
  height: auto;
  margin-left: 10px;
}
</style>
