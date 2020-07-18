import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {MainMenu} from './containers/MainMenu';
import {AuthProvider} from 'hooks/Auth';
import {Routes} from "containers/Routes";

import './App.css';

export default () => (
    <AuthProvider>
        <Router>
            <MainMenu/>
            <Routes/>
        </Router>
    </AuthProvider>
);

/*        <Route exact path="/" component={Home} />
          <PrivateRoute path="/admin" component={Admin} />*/
