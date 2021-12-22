import axios from 'axios'

export const getApiClient = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_BASEURL,
  })
}
