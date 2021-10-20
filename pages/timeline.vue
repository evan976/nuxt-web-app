<template>
  <div class="timeline-page bg-white">
    <div class="timeline-body p-md">
      <ul>
        <li v-for="article in articles" :key="article._id">
          <div class="bullet bg-purple" />
          <div class="time fs-md text-grey mx-md">
            {{ article.created_at | dateFormat('YYYY/MM/DD') }}
          </div>
          <div
            class="title fs-lg text-dark"
            @click="$router.push(`/article/${article.id}`)"
          >
            {{ article.title }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TimelinePage',

  computed: {
    ...mapState({
      articles: state => state.article.list.data
    })
  }
}
</script>

<style lang="scss" scoped>
.timeline-page {
  width: 100%;
  height: auto;
  @include radius;
  .timeline-body {
    ul {
      padding: 2em;
      position: relative;
      li {
        display: flex;
        height: 3em;
        align-items: center;
        .bullet {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          border: 3px solid map-get($colors, 'gray');
        }
        .title {
          cursor: pointer;
          transition: all .2s;
          border-bottom: 1px solid map-get($colors, 'gray');
          &:hover {
            color: map-get($colors, 'blue');
            border-bottom: 1px solid map-get($colors, 'blue');
          }
        }
      }
    }
  }
}
</style>
