import axios from './config'

export const getArticles = (page, pageSize) => {
    return axios.get(`/articles?page=${page}`)
}