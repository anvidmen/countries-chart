import axios from 'axios'

const baseURL = 'http://localhost:5000'

export const login = data => axios.get(`${baseURL}login`, data)
export const getCountries = () => axios.get(`${baseURL}countries`)
