import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5173/api', // 注意添加/api前缀
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(config => {
  // 可以在这里添加token等
  return config
})

// 响应拦截器
instance.interceptors.response.use(response => {
  if (response.data.code !== 200) {
    return Promise.reject(response.data.message)
  }
  return response.data
})

export default instance