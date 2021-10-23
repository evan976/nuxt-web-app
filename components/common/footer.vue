<template>
  <div class="layout-footer bg-white fs-md">
    <span>&copy; 2021</span>
    <span class="mx-s">|</span>
    <a class="copyright fs-md text-black" target="_blank" href="https://beian.miit.gov.cn">
      滇ICP备20006236号
    </a>
    <span class="mx-s">|</span>
    <span class="fs-md text-black">
      <a class="text-green" target="_blank" href="https://nuxtjs.org/">NUXT </a>和
      <a class="text-green" target="_blank" href="https://cn.vuejs.org/">VUE </a>强力驱动
    </span>
    <span class="mx-s">|</span>
    <a class="link text-black" target="_blank" href="/sitemap.xml">耕云种月</a>
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
