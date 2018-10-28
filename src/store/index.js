import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  musicPlayList: []
}

const mutations = {
  setPlayList: function (state, payload) {
    const cheerio = require('cheerio')
    let $ = cheerio.load(payload)

    $('#lst50').each(function (index, element) {
      let playData = {
        title: $(this).find('.rank01').text().trim(),
        artist: $(this).find('.checkEllipsis a').text().trim(),
        playTime: '03:30'
      }
      state.musicPlayList.push(playData)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations
})
