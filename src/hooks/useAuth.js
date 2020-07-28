import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const AuthContext = createContext()

const useAuth = () => useContext(AuthContext)

const TOKEN_KEY = 'token'

const AuthProvider = ({ children }) => {
  const [token, setStateToken] = useState()

  useEffect(() => {
    if (!token) {
      const sessionToken = localStorage.getItem(TOKEN_KEY)
      if (sessionToken) {
        setToken(sessionToken)
      }
    }
  })

  const isAuthenticated = () => !!token

  const setToken = (tokenValue) => {
    if (tokenValue) {
      localStorage.setItem(TOKEN_KEY, tokenValue)
      setStateToken(tokenValue)
    }
  }

  const logout = () => {
    setStateToken(null)
    localStorage.removeItem(TOKEN_KEY)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export { AuthProvider, useAuth }
