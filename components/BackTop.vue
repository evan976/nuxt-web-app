<template>
  <div
    v-show="backTopShow"
    class="back-top bg-blue"
  >
    <i class="iconfont icon-back-top text-white" />
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  data () {
    return {
      backTopShow: false
    }
  }
}
</script>

<style lang="scss" scoped>
.back-top {
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  position: fixed;
  z-index: 9;
  right: 40px;
  bottom: 40px;
  opacity: .5;
  cursor: pointer;
  transition: opacity .2s;
  &:hover {
    opacity: 1;
  }
}
</style>
