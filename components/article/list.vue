<template>
  <div class="article-wrapper">
    <div class="article-list bg-white my-s p-s">
      <div
        v-for="item in article.data"
        :key="item._id"
        class="article-item py-s"
      >
        <div class="article-thumb">
          <a @click="toDetail(item)">
            <img :src="item.thumb">
          </a>
        </div>
        <div class="article-info">
          <a class="title text-black fs-lg" @click="toDetail(item)">
            {{ item.title }}
          </a>
          <p class="desc text-dark fs-md my-sm">
            {{ item.description }}
          </p>
          <div class="others">
            <div class="created-time">
              <i class="iconfont icon-date text-grey" />
              <span class="text-grey">{{ item.created_at | dateFormat() }}</span>
            </div>
            <div class="views mx-md">
              <i class="iconfont icon-eye text-grey" />
              <span class="text-grey">{{ item.meta.views }}</span>
            </div>
            <div class="category">
              <i class="iconfont icon-category text-grey" />
              <span class="text-grey">{{ item.category.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <Empty v-if="!article.data.length" />
    </div>
    <Pagination />
  </div>
</template>

<script>
import Pagination from './pagination.vue'
import Empty from '@/components/common/empty'

export default {
  name: 'ArticleList',
  components: {
    Empty,
    Pagination
  },
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    toDetail (article) {
      this.$router.push(`/article/${article.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.article-list {
  @include radius;
  .article-item {
    border-bottom: 1px solid map-get($colors, 'gray');
    &:last-child {
      border: none;
    }
    @include flex(flex-start, center);
    .article-thumb {
      width: 140px;
      height: 100px;
      border: 1px dashed map-get($colors, 'gray');
      @include radius;
      transition: all .3s;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
      &:hover {
        border: 1px dashed map-get($colors, 'grey');
      }
    }
    .article-info {
      margin-left: 10px;
      > .title {
        cursor: pointer;
        transition: all .3s;
        &:hover {
          color: map-get($colors, 'blue');
          border-bottom: 1px solid map-get($colors, 'blue');
        }
      }
      > .others {
        @include flex(center, center);
        font-size: 12px;
        span {
          vertical-align: 1px;
        }
      }
    }
  }
}
</style>
