import request from '@/service'

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
    const { result: { data } } = await request.get('categories', { params })
    commit('updateListData', data)
  }
}
