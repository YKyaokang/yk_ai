import axios from './config'

export const getSearchList = (keyword) => {
    return axios.get(`/search?keyword=${keyword}`)
}
