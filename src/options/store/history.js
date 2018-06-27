import Vue from 'vue'

const state = {
  tableData: []
}

const getters = {}
const mutations = {
  setHistoryData(state, payload) {
    state.tableData = payload
  }
}

const actions = {
  async getHistoryData(context) {
    let ajaxURL = 'km_workhours_main/kmWorkhoursMain.do?method=worcalendar&pageno=1&s_ajax=true'
    // 加了也没用
    // ajaxURL += `&fdStart=2018-06-25+00%3A00`
    // ajaxURL += `&fdEnd=2018-07-02+00%3A00`
    const res = await Vue.http.get(ajaxURL)
    const con = res.body.main
    context.commit('setHistoryData', con)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}