<template>
  <div class="default-layout">
    <Header />
    <div class="section-middle">
      <div class="main-width">
        <Aside />
        <Nuxt class="center-content" />
        <RightSide />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/header'
import Aside from '@/components/left-aside/menu'
import RightSide from '@/components/right-aside'
import Footer from '@/components/common/footer'

export default {
  name: 'Layout',
  components: {
    Header,
    Aside,
    RightSide,
    Footer
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
