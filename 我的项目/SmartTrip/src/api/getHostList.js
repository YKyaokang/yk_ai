import axios from './config'

export const getHostList = () => {
    return axios.get('/hotlist')
}