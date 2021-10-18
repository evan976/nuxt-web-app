export const actions = {
  nuxtServerInit (store) {
    // 初始化任务
    const initFetchData = [
      store.dispatch('tag/fetchList'),
      store.dispatch('category/fetchList')
    ]
    return Promise.all(initFetchData)
  }
}
