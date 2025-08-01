import axios from './config'

export const getRecommands = (page) => {
    return axios.get(`/images?page=${page}`)
}

