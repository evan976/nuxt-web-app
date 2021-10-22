<template>
  <div
    v-swiper:swiper="swiperOption"
    @mouseenter="stopSwiper"
    @mouseleave="startSwiper"
  >
    <div class="swiper-wrapper">
      <div v-for="item in dataImage" :key="item._id" class="swiper-slide">
        <img :src="item.thumb">
      </div>
    </div>
    <div slot="pagination" class="swiper-pagination" />
  </div>
</template>

<script>
import { getArticleList } from '@/service/api'

export default {
  data () {
    return {
      dataImage: [],
      swiperOption: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: true,
        lazy: {
          loadPrevNext: true
        },
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },

  created () {
    this.loadThumb()
  },

  swiper () {
    return this.$refs.swiperBox.swiper
  },
  methods: {
    stopSwiper () {
      this.swiper.autoplay.stop()
    },
    startSwiper () {
      this.swiper.autoplay.start()
    },
    async loadThumb () {
      const { result: { data } } = await getArticleList({ limit: 6 })
      this.dataImage = data
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  height: 200px;
  @include radius;
  .swiper-slide {
    img {
      width: 100%;
      height: 100%;
      @include radius;
    }
  }
}
</style>
