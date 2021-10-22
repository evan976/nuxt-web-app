<template>
  <div class="timeline-page bg-white">
    <div class="timeline-body p-md">
      <ul>
        <li v-for="article in aritcleList" :key="article._id">
          <div class="bullet bg-green" />
          <div class="time fs-md text-grey mx-md">
            {{ article.created_at | dateFormat('YYYY/MM/DD') }}
          </div>
          <div
            class="title fs-lg text-dark"
            @click="$router.push(`/article/${article.id}`)"
          >
            {{ article.title }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getArticleList } from '@/service/api'

export default {
  name: 'TimelinePage',
  data () {
    return {
      aritcleList: []
    }
  },

  head () {
    return {
      title: 'Evan | 时间轴',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '博客，个人网站，前端开发，vuejs，vue ssr，nodejs，nuxtjs' },
        { hid: 'description', name: 'description', content: '开源博客，Evan的个人博客网站，基于nuxt ssr首屏服务器端渲染，用于分享、交流、记录和学习。' }
      ]
    }
  },

  async fetch () {
    const { result: { data } } = await getArticleList()
    this.aritcleList = data
  }
}
</script>

<style lang="scss" scoped>
.timeline-page {
  width: 100%;
  height: auto;
  @include radius;
  .timeline-body {
    ul {
      padding: 2em;
      position: relative;
      li {
        display: flex;
        height: 3em;
        align-items: center;
        .bullet {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          border: 3px solid map-get($colors, 'gray');
        }
        .title {
          cursor: pointer;
          transition: all .2s;
          border-bottom: 1px solid map-get($colors, 'gray');
          &:hover {
            color: map-get($colors, 'blue');
            border-bottom: 1px solid map-get($colors, 'blue');
          }
        }
      }
    }
  }
}
</style>
