<template>
  <div class="default-layout">
    <Header />
    <div class="section-middle">
      <div class="main-width">
        <LeftSide />
        <Nuxt class="center-content" />
        <RightSide />
      </div>
    </div>
    <Footer />
    <BackTop />
  </div>
</template>

<script>
import Header from '@/components/Header'
import LeftSide from '@/components/LeftSide'
import RightSide from '@/components/RightSide'
import Footer from '@/components/Footer'
import BackTop from '@/components/BackTop'

export default {
  name: 'Layout',
  components: {
    Header,
    LeftSide,
    RightSide,
    Footer,
    BackTop
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
