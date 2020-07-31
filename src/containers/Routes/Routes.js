import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from 'containers/PrivateRoute/PrivateRoute'
import About from 'pages/about/about'
import Herbs from 'pages/herbs/herbs'
import Login from 'pages/login/login'
import Logout from 'pages/logout/logout'
import Registration from 'pages/registration/registration'

import {
  ROUTE_LOGIN,
  ROUTE_LOGOUT,
  ROUTE_SIGN_UP,
  ROUTE_ABOUT,
  ROUTE_HERBS,
} from './constants'

export default () => (
  <Switch>
    <Route path={ROUTE_LOGIN}>
      <Login />
    </Route>
    <Route path={ROUTE_LOGOUT}>
      <Logout />
    </Route>
    <Route exact path={['/', ROUTE_SIGN_UP]}>
      <Registration />
    </Route>
    <Route path={ROUTE_ABOUT}>
      <About />
    </Route>
    <PrivateRoute path={ROUTE_HERBS}>
      <Herbs />
    </PrivateRoute>
  </Switch>
)
