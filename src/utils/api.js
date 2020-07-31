import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api'

const get = (url) => fetch(axios.get, url)

const post = (url, data) => fetch(axios.post, url, data)

const put = (url, data) => fetch(axios.put, url, data)

const del = (url) => fetch(axios.delete, url)

const getHeaders = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
})

const fetch = (fn, url, data) => {
  const fullUrl = BASE_URL + url
  const response = data
    ? fn(fullUrl, data, getHeaders())
    : fn(fullUrl, getHeaders())

  return new Promise((resolve, reject) =>
    response
      .then(({ data: payload }) => {
        resolve(payload)
      })
      .catch((error) => {
        if (error.response.status === 403) {
          // window.history.pushState('/login', '')
        }
        reject(error)
      }),
  )
}

export default { get, post, put, del }
