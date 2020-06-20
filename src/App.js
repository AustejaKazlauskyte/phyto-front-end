import React from 'react';
import './App.css';
import Login from "./components/Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HerbDatabase from "./components/HerbDatabase";
import About from "./components/About";

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
                            <Link to="/api/herbs">Vaistažolių duomenų bazė</Link>
                        </li>
                    </ul>
                </nav>

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
            </div>
        </Router>
    );
}

