<template>
  <div>
    <p class="title">{{ this.$store.state.currentMusic.title }} - {{ this.$store.state.currentMusic.artist }}</p>
    <p class="time">{{ this.$store.state.currentMusic.playTime }}</p>
    <div class="button_area">
      <button @click="clickPlayButton" type="button" class="button play">{{ playTimeButtonName }}</button>
      <button @click="clickStopButton" type="button" class="button play">중지</button>
      <button @click="clickPrevButton" type="button" class="button play">이전곡</button>
      <button @click="clickNextButton" type="button" class="button play">다음곡</button>
    </div>
  </div>
</template>

<script >
import { mapState } from 'vuex'

export default {
  name: 'PlayBox',
  data () {
    return {
      playTime: null,
      playTimeButtonName: '재생',
      playFlag: true
    }
  },
  computed: {
    ...mapState(['currentMusic'])
  },
  methods: {
    pad: function (n, width) { // 개인적인 유틸함수는 어디구조에 빼놓는게 좋을까?
      n = n + ''
      return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n
    },
    clickPlayButton: function () {
      if (this.$store.state.currentMusic.playStatus) {
        if (this.playFlag) {
          this.playFlag = !this.playFlag
          this.playTimeButtonName = '일시정지'

          let time = this.$store.state.currentMusic.playTime.split(':')

          this.playTime = setInterval(() => {
            if (parseInt(time.join('')) >= parseInt(this.$store.state.currentMusic.musicTime.replace(':', ''))) {
              this.clickNextButton()
              time = this.$store.state.currentMusic.playTime.split(':')
            }
            if (time[1] > 60) {
              time[1] = this.pad(0, 2)
              time[0] = this.pad(parseInt(time[0]) + 1, 2)
            } else {
              time[1] = this.pad(parseInt(time[1]) + 1, 2)
            }
            this.$store.state.currentMusic.playTime = time.join(':')
          }, 1000)
        } else {
          this.playFlag = !this.playFlag
          this.playTimeButtonName = '재생'
          clearInterval(this.playTime)
        }
      } else {
        alert('재생할 곡을 선택해주세요.')
      }
    },
    clickStopButton: function () {
      clearInterval(this.playTime)
      this.$store.state.currentMusic.playTime = '00:00'
    },
    clickPrevButton: function () {
      if (this.$store.state.currentMusic.key === 0) {
        this.$store.commit('selectMusic', this.$store.state.musicPlayListLength - 1)
      } else {
        this.$store.commit('selectMusic', this.$store.state.currentMusic.key - 1)
      }
    },
    clickNextButton: function () {
      if (this.$store.state.currentMusic.key === this.$store.state.musicPlayListLength - 1) {
        this.$store.commit('selectMusic', 0)
      } else {
        this.$store.commit('selectMusic', this.$store.state.currentMusic.key + 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
