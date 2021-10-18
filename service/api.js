import request from './index'

export const getArticleList = (params) => {
  return request.get('articles', params)
}

export const getArticleDetail = (id) => {
  return request.get(`articles/${id}`)
}

export const getCategoryList = (params = {}) => {
  return request.get('articles', params)
}
