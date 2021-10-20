<template>
  <div class="search-wrapper bg-white mb-s py-s">
    <input
      v-model="keyword"
      class="search-input px-s"
      type="text"
      placeholder="探索与发现"
      @keyup.enter="handleSearch"
    >
    <button class="search-btn" @click="handleSearch">
      <i class="iconfont icon-search" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    handleSearch () {
      const keyword = this.keyword.trim()
      if (!keyword) {
        return false
      }
      this.$store.dispatch('article/fetchList', { keyword })
      this.$router.push(`/search/${keyword}`)
      this.keyword = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.search-wrapper {
  @include flex(center, center);
  @include radius;
  .search-input {
    width: 190px;
    height: 30px;
    font-size: 14px;
    color: map-get($colors, 'dark');
    border: 1px solid map-get($colors, 'gray');
    background-color: map-get($colors, 'gray');
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    &:focus {
      border-color: map-get($colors, 'orange');
    }
  }
  .search-btn {
    width: 40px;
    height: 30px;
    font-weight: 500;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    color: map-get($colors, 'white');
    background-color: map-get($colors, 'orange');
    cursor: pointer;
  }
}
</style>
