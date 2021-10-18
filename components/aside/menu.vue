<template>
  <div class="app-aside">
    <div class="category-wrapper bg-white py-s mb-s">
      <nuxt-link class="m-s px-s menu-item" to="/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-home" />
        </svg>
        <span>Home</span>
      </nuxt-link>
      <nuxt-link
        v-for="category in categories"
        :key="category._id"
        class="m-s px-s menu-item"
        :to="`/category/${category.slug}`"
      >
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="`#${category.extend[0].value}`" />
        </svg>
        <span>{{ category.name }}</span>
        <i class="iconfont icon-right" />
      </nuxt-link>
      <a class="m-s px-s menu-item" target="_blank" href="https://github.com/wujihua118">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-github" />
        </svg>
        <span>GitHub</span>
        <i class="iconfont icon-right" />
      </a>
      <nuxt-link class="m-s px-s menu-item" to="/about">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-about" />
        </svg>
        <span>About</span>
        <i class="iconfont icon-right" />
      </nuxt-link>
    </div>
    <Advertising />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Advertising from './right/ad'

export default {
  name: 'Aside',
  components: {
    Advertising
  },
  computed: {
    ...mapState({
      categories: state => state.category.data
    })
  }
}
</script>

<style lang="scss" scoped>
.app-aside {
  width: 190px;
  margin-right: 10px;
  .category-wrapper {
    @include radius;
    .menu-item {
      font-size: 14px;
      height: 35px;
      @include radius;
      @include flex(space-between, center);
      transition: all .3s;
      &:hover {
        color: map-get($colors, 'blue');
        background-color: map-get($colors, 'gray');
      }
      span {
        flex: 1;
        margin-left: 10px;
      }
    }
  }
}
</style>
