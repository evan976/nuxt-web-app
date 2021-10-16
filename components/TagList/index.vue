<template>
  <div class="tag-list bg-white">
    <div class="tag-header px-s">
      <i class="iconfont icon-tags text-dark" />
      <span class="title text-dark">标签</span>
    </div>
    <div class="tag-body p-s">
      <ul class="list">
        <li class="tag-item px-s bg-gray">
          <i class="iconfont icon-react text-dark" />
          <span class="name text-dark">react</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagList'
}
</script>

<style lang="scss" scoped>
.tag-list {
  @include radius;
  width: 100%;
  height: 300px;
  .tag-header {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid map-get($colors, 'gray');
    font-size: 14px;
  }
  .tag-item {
    display: inline-block;
    @include radius(1px);
    cursor: pointer;
    transition: all .2s;
    &:hover {
      background-color: map-get($colors, 'olive');
    }
    &:hover .name, &:hover i {
       color: map-get($colors, 'white');
    }
    .name {
      vertical-align: 1px;
    }
  }
}
</style>
