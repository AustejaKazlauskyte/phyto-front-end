import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {About} from 'pages/About';
import {PrivateRoute} from 'containers/PrivateRoute';
import {Herbs} from 'pages/Herbs';
import {Login} from 'pages/Login';
import {Registration} from 'pages/Registration';

export default () => (
    <Switch>
        <Route exact path='/about'>
            <About/>
        </Route>
        <PrivateRoute path='/herbs' component={Herbs}/>
        <Route path='/login'>
            <Login/>
        </Route>
        <Route path='/sign-up'>
            <Registration/>
        </Route>
    </Switch>
);
