<template>
  <div class="thumb-wrapper">
    background
  </div>
</template>

<script>
export default {
  name: 'Thumb'

}
</script>

<style lang="scss" scoped>
.thumb-wrapper {
  width: 100%;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background-color: map-get($colors, 'white');
  @include radius;
}
</style>
