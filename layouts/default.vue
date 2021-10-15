<template>
  <div class="default-layout">
    <Header />
    <div class="section-middle">
      <div class="main-width">
        <LeftSide />
        <Nuxt />
        <RightSide />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import LeftSide from '@/components/LeftSide'
import RightSide from '@/components/RightSide'
import Footer from '@/components/Footer'

export default {
  name: 'Layout',
  components: {
    Header,
    LeftSide,
    RightSide,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.main-width {
  @include flex(space-between, flex-start);
}
</style>
