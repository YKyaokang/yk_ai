import request from './config'

export const getRepos = () => {
    return request.get('/repos')
}

// 可以添加更多方法
export const addRepo = (data) => {
    return request.post('/repos', data)
}