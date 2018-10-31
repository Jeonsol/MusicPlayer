<template>
  <div>
    <p class="title">{{ this.$store.state.currentMusic.title }}</p>
    <p class="time">{{ this.$store.state.currentMusic.playTime }}</p>
    <div class="button_area">
      <button type="button" class="button play">재생</button>
      <button type="button" class="button play">중지</button>
      <button type="button" class="button play">이전곡</button>
      <button type="button" class="button play">다음곡</button>
    </div>
  </div>
</template>

<script >
import { mapState } from 'vuex'

export default {
  name: 'PlayBox',
  computed: {
    ...mapState(['currentMusic'])
  }
}
</script>

<style lang="scss" scoped></style>
