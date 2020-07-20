import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from 'containers/PrivateRoute/PrivateRoute';
import About from 'pages/About/About';
import Herbs from 'pages/Herbs/Herbs';
import Login from 'pages/Login/Login';
import Registration from 'pages/Registration/Registration';

export default () => (
    <Switch>
        <Route path='/about'>
            <About/>
        </Route>
        <PrivateRoute path='/herbs' component={Herbs} />
        <Route path='/login'>
            <Login/>
        </Route>
        <Route path={['/', '/sign-up']}>
            <Registration/>
        </Route>
    </Switch>
);
