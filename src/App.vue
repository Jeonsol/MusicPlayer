<template>
  <div>
    <!--<h1>Music Player</h1>-->
    <div class="music_player_wrap box">
      <play-box />
    </div>
    <!--<h1>Play List</h1>-->
    <ul class="list_set box">
      <list v-for="list in musicPlayList" :key="list.title" :list="list" />
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PlayBox from './components/PlayBox'
import List from './components/List'

export default {
  name: 'App',
  computed: {
    ...mapState(['musicPlayList'])
  },
  components: {
    list: List,
    'play-box': PlayBox
  },
  mounted () {
    this.axios.get('https://www.melon.com/chart/index.htm').then((response) => {
      this.$store.commit('setPlayList', response.data)
    })
  }
}
</script>

<style lang="scss" scoped>
  .box {
    padding: 10px;
    border: 1px solid #ccc;
  }
</style>
