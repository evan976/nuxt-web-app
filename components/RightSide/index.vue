<template>
  <div class="main-right">
    <div class="search-container bg-white">
      <Search />
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search'

export default {
  name: 'MainRight',
  components: {
    Search
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
