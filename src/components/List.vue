<template>
  <li :class="{list: true,active: list.playStatus}" @click="clickMusicList(list.key)"><a href="#" class="link" aria-selected="true">[<span class="time">{{ list.musicTime }}</span>] <span class="title">{{ list.title }}</span> (<span class="artist"> {{ list.artist }}</span>)</a></li>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'List',
  computed: {
    ...mapState(['currentMusic'])
  },
  methods: {
    clickMusicList: function (key) {
      this.$store.commit('selectMusic', key)
    }
  },
  props: ['list']
}
</script>

<style lang="scss" scoped>
  .list {
    margin-left: 10px;
    &.active .link {
      color: #f00;
    }
    .link {
      color: #000;
    }
  }
</style>
