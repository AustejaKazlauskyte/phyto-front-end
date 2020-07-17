import React from 'react';

import './App.css';
import { About } from 'pages/About';
import { Login } from 'pages/Login';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HerbDatabase from "./components/HerbDatabase";
import Registration from "./components/Registration";
import {AuthProvider} from "hooks/Auth";
import PrivateRoute from "./PrivateRoute";

function App(props) {

    return (
        <AuthProvider>
            <Router>
                <div className="container">
                    <nav className="navbar">
                        <ul className="navbar-list">
                            <li className="navbar-item">
                                <a className="navbar-link" href="/login">Prisijungti</a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-link" href="/sign-up">Registruotis</a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-link" href="/about">Apie Phyto</a>
                            </li>
                            <li className="navbar-item">
                                <a className="navbar-link" href="/api/herbs">Vaistažolių duomenų bazė</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <Switch>
                    <Route exact path="/about">
                        <About/>
                    </Route>
                    <PrivateRoute path="/api/herbs" component={HerbDatabase} >
                    </PrivateRoute>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/sign-up">
                        <Registration/>
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
/*        <Route exact path="/" component={Home} />
          <PrivateRoute path="/admin" component={Admin} />*/
