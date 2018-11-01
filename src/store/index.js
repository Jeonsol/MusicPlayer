import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  musicPlayList: [],
  musicPlayListLength: 0,
  currentMusic: {}
}

const mutations = {
  setPlayList: function (state, payload) {
    let key = 0
    const cheerio = require('cheerio')
    let $ = cheerio.load(payload)

    $('#lst50').each(function (index, element) {
      let playData = {
        key: key,
        title: $(this).find('.rank01').text().trim(),
        artist: $(this).find('.checkEllipsis a').text().trim(),
        playTime: '00:00',
        musicTime: '00:10',
        playStatus: false
      }
      state.musicPlayList.push(playData)
      key++
    })
    state.musicPlayListLength = key
  },
  selectMusic: function (state, payload) {
    state.currentMusic.playStatus = false
    state.musicPlayList.map(item => {
      if (item.key === payload) {
        state.currentMusic = item
        state.currentMusic.playStatus = true
        state.currentMusic.playTime = '00:00'
      }
    })
  }
}

export default new Vuex.Store({
  state,
  mutations
})
