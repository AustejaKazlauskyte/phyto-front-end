import React from 'react';
import './App.css';
import Login from "./components/Login";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HerbDatabase from "./components/HerbDatabase";
import About from "./components/About";

export default function App() {
    return (
        <Router>
            <div className="container">
                <nav className="navbar">
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a className="navbar-link" href="/">Prisijungti</a>
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


            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/api/herbs">
                    <HerbDatabase/>
                </Route>
                <Route path="/">
                    <Login/>
                </Route>
            </Switch>

        </Router>
    );
}

