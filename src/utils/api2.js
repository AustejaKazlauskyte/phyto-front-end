import { useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import axios from 'axios'

import { ROUTE_LOGOUT } from 'containers/Routes/constants'

const BASE_URL = 'http://localhost:8080/api'

const useApi = () => {
  const [isLoading, setLoading] = useState(false)

  const history = useHistory()
  const location = useLocation()

  const get = (url) => fetch(axios.get, url)

  const post = (url, data) => fetch(axios.post, url, data)

  const put = (url, data) => fetch(axios.put, url, data)

  const del = (url, data) => fetch(axios.delete, url, data)

  const getHeaders = () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  })

  const fetch = (fn, url, data) => {
    setLoading(true)
    const fullUrl = BASE_URL + url

    const response = data
      ? fn(fullUrl, data, getHeaders())
      : fn(fullUrl, getHeaders())

    return new Promise((resolve, reject) =>
      response
        .then(({ data: payload }) => {
          setLoading(false)
          resolve(payload)
        })
        .catch((error) => {
          setLoading(false)
          if (error.response.status === 403) {
            history.push(ROUTE_LOGOUT, {
              referer: location.pathname,
            })
          }
          reject(error)
        }),
    )
  }

  return [{ get, post, put, del }, { isLoading }]
}

export default useApi
