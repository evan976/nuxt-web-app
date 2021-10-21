<template>
  <div class="layout-header bg-white mb-lg">
    <div class="main-width">
      <div class="logo">
        <a href="/">
          <img src="@/assets/images/logo.svg" alt="logo">
        </a>
        <div class="title text-blue fs-md">
          生之宇宙，归之殊途
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.layout-header {
  position: sticky;
  top: 0;
  z-index: 99;
  opacity: .8;
  height: 60px;
  @include box-shadow(0px 1px 4px rgba(255, 255, 255, .2));
  @include clearfix;
  .logo {
    height: 60px;
    width: 280px;
    display: flex;
    @include flex(space-around, center);
    img {
      vertical-align: -4px;
    }
  }
}
</style>
