import axios from 'axios'

const baseURL = 'http://dev.naveler.com:8007/api/'

export const login = (data, config) => axios.post(`${baseURL}login/`, data, config)
export const getCountries = () => axios.get(`${baseURL}get_countries/`)
