import axios from 'axios'

// Default axios instance
export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  response => response,
  error => {
    // Handle error globally
    return Promise.reject(error)
  },
)
