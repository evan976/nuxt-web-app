import { getArticleList, getArticleDetail } from '@/service/api'

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
    state.list.data = data.data
    state.list.pagination = data.pagination
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
    const { result } = await getArticleList(params)
    commit('updateListData', result)
  },

  async fetchDetail ({ commit }, id) {
    const { result } = await getArticleDetail(id)
    commit('updateDetailData', result)
  }
}
