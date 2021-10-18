<template>
  <div class="thumb-wrapper">
    <div v-if="item.extend.length <= 1" class="template" />
    <div v-else class="thumb" :style="{backgroundImage: `url(${item.extend[1].value})`}" />
    <div class="desc fs-md text-white">
      {{ item.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Thumb',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }

}
</script>

<style lang="scss" scoped>
.thumb-wrapper {
  width: 100%;
  height: 200px;
  @include radius;
  position: relative;
  overflow: hidden;
  .template {
    height: 200px;
    background: #f46b45;
    background: -webkit-linear-gradient(to right, rgb(244, 107, 69), rgb(238, 168, 73));
    background: linear-gradient(to right, rgb(244, 107, 69), rgb(238, 168, 73));
    filter: blur(2px);
    transition: all .2s;
    @include radius;
    &:hover {
      filter: blur(0);
    }
  }
  .thumb {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center center;
    filter: blur(2px);
    transition: all .2s;
    @include radius;
    &:hover {
      filter: blur(0);
    }
  }
  .desc {
    position: absolute;
    width: 100%;
    bottom: 40px;
    text-align: center;
}
}
</style>
