<template>
  <div class="pagination bg-white my-s fs-md">
    <svg class="icon ml-md" aria-hidden="true">
      <use xlink:href="#icon-loading" />
    </svg>
    <div class="pagination-next text-white bg-olive">拨云见日</div>
  </div>
</template>

<script>

export default {
  name: 'Pagination'
}
</script>

<style lang="scss" scoped>
.pagination {
  width: 100%;
  height: 30px;
  line-height: 30px;
  @include flex(space-between, center);
  @include radius;
  .icon {
    width: 14px;
    height: 14px;
  }
  .pagination-next {
    width: 100px;
    text-align: center;
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
    position: relative;
    cursor: pointer;
    opacity: .7;
    transition: opacity .2s;;
    &:hover {
      opacity: 1;
    }
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 15px;
      height: 150%;
      top: -30%;
      left: -10px;
      background: map-get($colors, 'gray');
      transform: rotate(18deg);
    }
  }
}
</style>
