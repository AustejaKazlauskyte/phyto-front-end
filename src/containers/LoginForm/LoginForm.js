import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import Button from 'components/Button/Button';
import { useAuth } from "hooks/Auth/Auth";

function LoginForm() {
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isAuthenticated, setToken} = useAuth();

    const login = event => {
        event.preventDefault();
        axios.post("http://localhost:8080/login", {
            email,
            password
        }).then(result => {
            if (result.status === 200) {
                setToken(result.data.token);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

    return (
        isAuthenticated() ? (<Redirect to="/herbs" />) : (
            <div className="container" style={{margin: "50% auto 20%"}}>
                <form onSubmit={login}>
                    <h3>Sveiki užsukę</h3>
                    <label>Prisijungimo vardas</label>
                    <input
                        className="u-full-width"
                        type="email"
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value);
                        }}
                        placeholder="pvz., jonas@pastodezute.lt" />
                    <label>Slaptažodis</label>
                    <input
                        className="u-full-width"
                        type="password"
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                        placeholder="slaptažodis" />
                    <Button type="submit">Prisijungti</Button>
                </form>
                {isError && <p>Pateikėte neteisingą informaciją</p>}
            </div>
        )
    )
}

export default LoginForm;
