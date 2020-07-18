import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavigationLink } from 'components/NavigationLink';
import { PrivateRoute } from 'containers/PrivateRoute';
import { AuthProvider } from "hooks/Auth";
import { About } from 'pages/About';
import { Herbs } from "pages/Herbs";
import { Login } from 'pages/Login';
import { Registration } from "pages/Registration";

import './App.css';

function App(props) {

    return (
        <AuthProvider>
            <Router>
                <div className="container">
                    <nav className="navbar">
                        <ul className="navbar-list">
                            <NavigationLink
                                href="/login"
                                text="Prisijungti"
                            />
                            <NavigationLink
                                href="/sign-up"
                                text="Registruotis"
                            />
                            <NavigationLink
                                href="/about"
                                text="Apie Phyto"
                            />
                            <NavigationLink
                                href="/herbs"
                                text="Vaistažolės"
                            />
                        </ul>
                    </nav>
                </div>

                <Switch>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <PrivateRoute path="/herbs" component={Herbs} />
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/sign-up">
                        <Registration />
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
/*        <Route exact path="/" component={Home} />
          <PrivateRoute path="/admin" component={Admin} />*/
