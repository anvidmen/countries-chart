import axios from 'axios'

const BASE_URL = 'http://dev.naveler.com:8007/api/'

export const login = (data, config) => axios.post(`${BASE_URL}login/`, data, config)
export const getCountries = () => axios.get(`${BASE_URL}get_countries/`)
