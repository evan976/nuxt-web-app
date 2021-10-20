import { getCategoryList } from '@/service/api'

export const state = () => {
  return {
    data: []
  }
}

export const mutations = {
  updateListData (state, data) {
    state.data = data
  }
}

export const actions = {
  async fetchList ({ commit }, params = {}) {
    const { result: { data } } = await getCategoryList(params)
    commit('updateListData', data)
  }
}
