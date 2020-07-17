import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import { useAuth } from "hooks/Auth";

function LoginForm(props) {

    const [, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isAuthenticated, setToken} = useAuth();

    /*  const referer = props.location.state.referer || '/';*/

    function postLogin(event) {
        event.preventDefault();
        axios.post("http://localhost:8080/login", {
            email,
            password
        }).then(result => {
            if (result.status === 200) {
                setToken(result.data.token);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
        /*console.log("login")*/
    }

    return (
        isAuthenticated() ? (<Redirect to="/api/herbs" />) : (
            <div className="container" style={{margin: "50% auto 20%"}}>
                <form>
                    <label><h3>Sveiki užsukę</h3></label>
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
                    <button
                        className="button-primary"
                        onClick={postLogin}>Prisijungti
                    </button>
                </form>
                {isError && <p>Pateikėte neteisingą informaciją</p>}
            </div>)

    )
}

export default LoginForm;
