import axios from 'axios'

const instance = axios.create({
    baseURL: `http://localhost:${process.env.REACT_APP_SERVER_PORT}`
})

export default instance