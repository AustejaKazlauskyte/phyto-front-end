import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

import { useAuth } from 'hooks/Auth/Auth'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth()

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login' /* , state: { referer: props.location */ }}
          />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
}

export default PrivateRoute
