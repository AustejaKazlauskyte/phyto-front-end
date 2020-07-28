import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import MainMenu from 'containers/MainMenu/MainMenu'
import Routes from 'containers/Routes/Routes'
import { AuthProvider } from 'hooks/useAuth'

import './App.css'

export default () => (
  <AuthProvider>
    <Router>
      <MainMenu />
      <Routes />
    </Router>
  </AuthProvider>
)
