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

<style lang="scss" scoped>

</style>
