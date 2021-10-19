<template>
  <div
    v-swiper:swiper="swiperOption"
    @mouseenter="stopSwiper"
    @mouseleave="startSwiper"
  >
    <div class="swiper-wrapper">
      <div v-for="(item, index) in dataImage" :key="index" class="swiper-slide">
        <img :src="item.imgUrl">
      </div>
    </div>
    <div slot="pagination" class="swiper-pagination" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataImage: [
        {
          imgUrl: require('@/assets/images/slider_01.png')
        },
        {
          imgUrl: require('@/assets/images/slider_02.png')
        },
        {
          imgUrl: require('@/assets/images/slider_03.png')
        },
        {
          imgUrl: require('@/assets/images/slider_04.png')
        }
      ],
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
  swiper () {
    return this.$refs.swiperBox.swiper
  },
  methods: {
    stopSwiper () {
      this.swiper.autoplay.stop()
    },
    startSwiper () {
      this.swiper.autoplay.start()
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
