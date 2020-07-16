import React from "react"
import LoginForm from "./LoginForm";

function Login() {
    return (
        <div className="container">
            <div className="row">
                <div className="six columns">
                    <img alt="login image"
                         src="/images/phyto-mergina-su-svarku.png"
                         className="login-image"
                    />
                </div>
                <div className="six columns">
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}

export default Login;
