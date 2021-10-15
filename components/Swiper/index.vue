<template>
  <div class="swiper-wrapper">
    slider
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  width: 100%;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background-color: map-get($colors, 'white');
  @include radius;
}
</style>
