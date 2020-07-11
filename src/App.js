import React from 'react';
import './App.css';
import Login from "./components/Login";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HerbDatabase from "./components/HerbDatabase";
import About from "./components/About";
import Registration from "./components/Registration";
import {AuthContext} from "./context/auth";
import PrivateRoute from "./PrivateRoute";

export default function App() {
    return (
        <AuthContext.Provider value={false}>
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
        </AuthContext.Provider>
    );
}
/*        <Route exact path="/" component={Home} />
          <PrivateRoute path="/admin" component={Admin} />*/
