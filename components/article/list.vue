<template>
  <transition name="fade" mode="out-in" appear>
    <div class="article-wrapper">
      <div v-if="article.data.length">
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
                <div class="created-time mr-xl">
                  <i class="iconfont icon-date text-grey" />
                  <span class="text-grey">{{ item.created_at | dateFormat() }}</span>
                </div>
                <div class="views mr-xl">
                  <i class="iconfont icon-eye text-grey" />
                  <span class="text-grey">{{ item.meta.views }}</span>
                </div>
                <div class="category mr-xl">
                  <i class="iconfont icon-category text-grey" />
                  <span class="text-grey">{{ item.category.name }}</span>
                </div>
                <div class="category">
                  <i class="iconfont icon-tags text-grey" />
                  <span class="text-grey">{{ item.tags.length }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pagination bg-white my-s fs-md">
          <svg class="icon ml-md" aria-hidden="true">
            <use xlink:href="#icon-loading" />
          </svg>
          <div
            class="pagination-next text-white bg-olive"
            @click="$emit('loadmore')"
          >拨云见日</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'ArticleList',
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
      height: 200%;
      top: -30%;
      left: -10px;
      background: map-get($colors, 'gray');
      transform: rotate(18deg);
    }
  }
}
</style>
