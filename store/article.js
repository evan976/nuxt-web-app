import { getArticleList, getArticleDetail } from '@/service/api'

const getDefaultListData = () => {
  return {
    data: [],
    pagination: {}
  }
}

export const state = () => {
  return {
    list: getDefaultListData(),
    hot: [],
    detail: {}
  }
}

export const mutations = {
  updateListData (state, data) {
    state.list = data
  },
  updateExistListData (state, data) {
    state.list.data.push(...data.data)
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
  fetchList ({ commit }, params = {}) {
    const isRestart = !params.offset || params.offset === 1
    const isLoadMore = params.offset && params.offset > 1

    // 清空数据
    isRestart && commit('updateListData', getDefaultListData())

    getArticleList(params)
      .then(res => {
        isLoadMore
          ? commit('updateExistListData', res.result)
          : commit('updateListData', res.result)
      })
  },

  async fetchHotList ({ commit }) {
    const { result: { data } } = await getArticleList({ hot: true })
    commit('updateHotListData', data)
  },

  async fetchDetail ({ commit }, id) {
    const { result } = await getArticleDetail(id)
    commit('updateDetailData', result)
  }
}
