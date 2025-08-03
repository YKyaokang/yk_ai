import axios from "./config";

export const login = (data) => {
    return axios.post('/login', data)
}

export const getUser = async () => {
    return await axios.get('/user')
}