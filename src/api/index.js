import axios from 'axios'

const API = axios.create({ baseURL: 'http://dev.naveler.com:8007/api' })

export default API
