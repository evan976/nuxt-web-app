import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:8000/api/private/v1/',
  timeout: 10000
})

service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return Promise.resolve(res.data)
    } else {
      return Promise.reject(res)
    }
  },
  err => {
    return Promise.reject(err)
  }
)

export default service
