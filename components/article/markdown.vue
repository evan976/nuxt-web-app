<template>
  <div class="markdown" v-html="html" />
</template>

<script>
import markdown from '@/plugins/markdown'
import 'highlight.js/styles/atom-one-light.css'

export default {
  name: 'Markdown',
  props: {
    content: {
      type: String,
      default: ''
    },
    htmled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    html () {
      return markdown(this.content || '')
    }
  }
}
</script>

<style lang="scss">
.markdown {
  h1, h2, h3, h4, h5, h6 {
    line-height: 2.5;
    font-weight: 500;
    text-indent: 0;
    color: map-get($colors, 'black');
  }
  p {
    line-height: 1.6;
    font-size: 14px;
    margin: 10px 0;
    text-indent: 1.6em;
    color: map-get($colors, 'dark');
    code {
      padding: 0 .4em;
      @include radius;
      background-color: map-get($colors, 'gray');
    }
  }
  span {
    font-size: 15px;
  }

  img {
    max-width: 100%;
    position: relative;
    margin: 0 auto;
    display: block;
    text-align: center;
    @include radius;
    opacity: .9;
    cursor: pointer;
    border: 4px solid map-get($colors, 'gray');
  }
  ul, ol {
    > li {
      line-height: 1.8;
      padding: .4em 0;
      margin: 0 2em;
      font-size: 14px;
      list-style-type: disc;
      color: map-get($colors, 'dark');
      &:hover {
        background-color: map-get($colors, 'gray');
      }
      > p {
        text-indent: 0;
        color: map-get($colors, 'dark');
      }
      > ul {
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
