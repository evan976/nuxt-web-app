<template>
  <div class="about-page bg-white p-md">
    <div class="about-me">
      <div class="title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-me" />
        </svg>
        <span class="fs-lg text-blue ml-xs">关于我</span>
      </div>
      <div class="content px-md">
        <li>95后、男、宅</li>
        <li>野生程序员</li>
        <li>技术癌、强迫症、敏感患者</li>
        <li>总之</li>
        <li>碌碌无为，啥也不是，散会！</li>
      </div>
    </div>
    <div class="about-blog">
      <div class="title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-compute" />
        </svg>
        <span class="fs-lg text-purple ml-xs">关于网站</span>
      </div>
      <div class="content px-md">
        <li>这是第一个版本</li>
        <li>很垃圾</li>
        <li>如果之后有时间</li>
        <li>我会重构</li>
        <li>对了，移动端没适配（是不是很拉）</li>
      </div>
    </div>
    <div class="about-future">
      <div class="title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-future" />
        </svg>
        <span class="fs-lg text-orange ml-xs">关于未来</span>
      </div>
      <div class="content px-md">
        <li>我想</li>
        <li>我的未来</li>
        <li>大概是</li>
        <li>一台电脑、一支烟、一杯茶、一个人</li>
        <li>足矣</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  head () {
    return {
      title: 'Evan | 关于',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '博客，个人网站，前端开发，vuejs，vue ssr，nodejs，nuxtjs' },
        { hid: 'description', name: 'description', content: '开源博客，Evan的个人博客网站，基于nuxt ssr首屏服务器端渲染，用于分享、交流、记录和学习。' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.about-page {
  width: 100%;
  height: auto;
  .title {
    margin: 10px 0;
    height: 40px;
    @include flex(flex-start, center);
    border-bottom: 1px solid map-get($colors, 'gray');
  }
  .content {
    li {
      list-style: none;
      font-size: 16px;
      line-height: 2;
      color: map-get($colors, 'dark');
    }
  }
}
</style>
