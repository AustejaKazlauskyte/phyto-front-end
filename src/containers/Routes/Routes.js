import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from 'containers/PrivateRoute/PrivateRoute'
import About from 'pages/about/about'
import Herbs from 'pages/herbs/herbs'
import Login from 'pages/login/login'
import Registration from 'pages/registration/registration'

export const ROUTE_ABOUT = '/about'
export const ROUTE_HERBS = '/herbs'
export const ROUTE_LOGIN = '/login'
export const ROUTE_SIGN_UP = '/sign-up'

export default () => (
  <Switch>
    <Route path={ROUTE_ABOUT}>
      <About />
    </Route>
    <PrivateRoute path={ROUTE_HERBS} component={Herbs} />
    <Route path={ROUTE_LOGIN}>
      <Login />
    </Route>
    <Route path={['/', ROUTE_SIGN_UP]}>
      <Registration />
    </Route>
  </Switch>
)
