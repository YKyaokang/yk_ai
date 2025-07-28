import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5174/api';

axios.interceptors.request.use((config) => {
    // 添加token
    return config;
})

axios.interceptors.response.use((data) => {
    return data
})

export default axios