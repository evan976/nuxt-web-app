<template>
  <div class="main-right">
    <Search />
    <HotArticleList />
    <Advertising />
    <TagList />
  </div>
</template>

<script>
import Search from './search'
import TagList from './tag'
import Advertising from '@/components/common/ad'
import HotArticleList from '@/components/article/hot'

export default {
  name: 'MainRight',
  components: {
    Search,
    HotArticleList,
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
  position: sticky;
  top: 80px;
}
</style>
