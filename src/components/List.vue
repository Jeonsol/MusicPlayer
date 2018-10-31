<template>
  <li class="list" @click="clickMusicList(list.key)"><a href="#" class="link" aria-selected="true">[<span class="time">{{ list.playTime }}</span>] <span class="title">{{ list.title }}</span> (<span class="artist"> {{ list.artist }}</span>)</a></li>
</template>

<script>
export default {
  name: 'List',
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
    .link {
      color: #000;
    }
  }
</style>
