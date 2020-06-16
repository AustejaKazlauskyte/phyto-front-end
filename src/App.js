import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import Menu from "./Menu";

class App extends React.Component {
    render() {
        return (
            <div>
                <Menu/>
                <Login/>
            </div>
        )
    } ;

}

export default App;
