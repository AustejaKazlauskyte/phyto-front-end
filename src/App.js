import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import Menu from "./Menu";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HerbDatabase from "./HerbDatabase";
import About from "./About";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul className="menu-display">
                        <li className="menu-item">
                            <Link to="/">Prisijungti</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/about">Apie Phyto</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/herb-database">Vaistažolių duomenų bazė</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/herb-database">
                        <HerbDatabase/>
                    </Route>
                    <Route path="/">
                        <Login/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

