import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5174/api';

axios.interceptors.request.use((config) => {
    // 添加token
    return config;
})
// 响应拦截 
axios.interceptors.response.use((data) => {
    return data.data
})

export default axios