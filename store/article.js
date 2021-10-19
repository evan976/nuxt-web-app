import request from '@/service'

const getListData = () => {
  return {
    data: [],
    pagination: {}
  }
}

export const state = () => {
  return {
    list: getListData(),
    hot: [],
    detail: {}
  }
}

export const mutations = {
  updateListData (state, data) {
    state.list.data = data
  },
  updateHotListData (state, data) {
    state.hot = data
  },
  updateDetailData (state, data) {
    state.detail = data
  }
}

export const actions = {
  async fetchList ({ commit }, params = {}) {
    const { result } = await request.get('articles', { params })
    commit('updateListData', result)
  },

  async fetchDetail ({ commit }, id) {
    const { result } = await request.get(`articles/${id}`)
    commit('updateDetailData', result)
  }
}
