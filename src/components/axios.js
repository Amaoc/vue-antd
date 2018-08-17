import axiosLib from 'axios'
import { baseUrl } from '@/config/env'

// import { catchError } from '@/util'

const axios = axiosLib.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

axios.defaults.headers.post.Accept = '*/*'

// http发送前的操作 全局loading添加 ==
axios.interceptors.request.use((config) => {
  return config
})

axios.interceptors.response.use((res) => {
  return Promise.resolve(res.data)
}, (rej) => {
  return rej
})

export default axios
