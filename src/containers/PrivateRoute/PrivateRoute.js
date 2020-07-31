import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route, useLocation } from 'react-router-dom'

import { useAuth } from 'hooks/useAuth'
import { ROUTE_LOGIN } from 'containers/Routes/constants'

const PrivateRoute = ({ children, ...other }) => {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  return (
    <Route
      {...other}
      render={() =>
        isAuthenticated() ? (
          <>{children}</>
        ) : (
          <Redirect
            to={{
              pathname: ROUTE_LOGIN,
              state: {
                referer: location.pathname,
              },
            }}
          />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
}

export default PrivateRoute
