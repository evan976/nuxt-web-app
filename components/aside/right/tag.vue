<template>
  <div class="tag-list bg-white mb-s">
    <div class="tag-header px-s">
      <i class="iconfont icon-tags text-dark" />
      <span class="title text-dark">标签</span>
    </div>
    <div class="tag-body p-s">
      <ul class="list">
        <nuxt-link
          v-for="tag in tags"
          :key="tag._id"
          class="tag-item px-s bg-gray"
          :to="`/tag/${tag.slug}`"
        >
          <i
            class="iconfont text-dark"
            :class="tag.extend.length && tag.extend[0].value"
          />
          <span class="name text-dark">{{ tag.name }} ({{ tag.count }})</span>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TagList',
  computed: {
    ...mapState({
      tags: state => state.tag.data
    })
  }
}
</script>

<style lang="scss" scoped>
.tag-list {
  @include radius;
  .tag-header {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid map-get($colors, 'gray');
    font-size: 14px;
  }
  .tag-body {
    height: 300px;
    overflow: scroll;
    .tag-item {
      display: inline-block;
      margin: 5px;
      @include radius(1px);
      cursor: pointer;
      transition: all .2s;
      &:hover {
        background-color: map-get($colors, 'olive') !important;
      }
      &:hover .name, &:hover i {
        color: map-get($colors, 'white');
      }
      .name {
        font-size: 14px;
        vertical-align: 2px;
      }
    }
  }
}
</style>
