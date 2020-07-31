import React from 'react'
import { Redirect } from 'react-router'

import { useAuth } from 'hooks/useAuth'
import { ROUTE_LOGIN } from 'containers/Routes/constants'

const Logout = () => {
  const { logout } = useAuth()

  logout()

  return <Redirect to={ROUTE_LOGIN} />
}

export default Logout
