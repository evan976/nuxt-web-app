<template>
  <div class="index-page">
    <Swiper />
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'
export default {
  name: 'IndexPage',
  components: {
    Swiper
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  width: 634px;
}
</style>
