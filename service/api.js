import http from './axios'

export const getArticleList = params => {
  return http.get('articles', { params })
}

export const getArticleDetail = id => {
  return http.get(`articles/${id}`)
}

export const getCategoryList = params => {
  return http.get('categories', { params })
}

export const getTagList = params => {
  return http.get('tags', { params })
}
