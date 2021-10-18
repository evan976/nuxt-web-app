<template>
  <div class="layout-footer bg-white fs-md">
    <a class="copyright fs-md text-black" href="https://beian.miit.gov.cn">
      滇ICP备20006236号
    </a>
    <span class="mx-s">|</span>
    <span class="fs-md text-black">
      <a class="text-green" href="https://nuxtjs.org/">NUXT </a>和
      <a class="text-green" href="https://cn.vuejs.org/">VUE </a>强力驱动
    </span>
    <span class="mx-s">|</span>
    <a class="link text-black" href="https://github.com/wujihua118">耕云种月</a>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.layout-footer {
  height: 60px;
  line-height: 60px;
  width: 100%;
  text-align: center;
  opacity: .5;
  .copyright:hover {
    color: map-get($colors, 'blue');
  }
  .link:hover {
    color: map-get($colors, 'orange');
  }
}
</style>
