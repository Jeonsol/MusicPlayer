<template>
  <div>
    <h1>Music Player</h1>
    <div class="music_player_wrap box">
      <play-box />
    </div>
    <h1>Play List</h1>
    <ul class="list_set box">
      <list />
    </ul>
  </div>
</template>

<script>
import PlayBox from './components/PlayBox'
import List from './components/List'

export default {
  name: 'App',
  components: {
    list: List,
    'play-box': PlayBox
  },
  mounted () {
    this.axios.get('https://cors.io/?https://www.melon.com/chart/index.htm').then((response) => {
      console.log(response.data)
      /*
        user_id: {
          title: '',
          artist: '',
          playTime: ''
        }
       */
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
