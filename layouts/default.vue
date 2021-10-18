<template>
  <div class="default-layout">
    <Header />
    <div class="section-middle">
      <div class="main-width">
        <Aside :category="category" />
        <Nuxt class="center-content" />
        <RightSide />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/header'
import Aside from '@/components/aside/menu'
import RightSide from '@/components/aside/right'
import Footer from '@/components/common/footer'

export default {
  name: 'Layout',
  components: {
    Header,
    Aside,
    RightSide,
    Footer
  },

  asyncData ({ store }) {
    return store.dispatch('category/fetchList')
  },

  computed: {
    category () {
      return this.$store.state.category.data
    }
  }
}
</script>

<style lang="scss" scoped>
.main-width {
  @include flex(space-between, flex-start);
  .center-content {
    width: 634px;
  }
}
</style>
