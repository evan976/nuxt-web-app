<template>
  <div class="layout-header bg-white mb-lg">
    <div class="main-width">
      <div class="logo">
        <a href="/">
          <img src="@/assets/images/logo.svg" alt="logo">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
.layout-header {
  height: 60px;
  @include box-shadow(0px 1px 4px rgba(255, 255, 255, .2));
  @include clearfix;
  @include flex(space-between, center);
}
</style>
