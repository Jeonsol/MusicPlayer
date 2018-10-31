import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  musicPlayList: [],
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
        playTime: '03:30'
      }
      state.musicPlayList.push(playData)
      key++
    })
  },
  selectMusic: function (state, payload) {
    state.musicPlayList.map(item => {
      if (item.key === payload) {
        state.currentMusic = item
      }
    })
  }
}

export default new Vuex.Store({
  state,
  mutations
})
