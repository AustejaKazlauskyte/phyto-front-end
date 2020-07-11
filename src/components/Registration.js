import React from "react"
import RegistrationForm from "./RegistrationForm";

function Registration() {
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
                    <RegistrationForm/>
                </div>
            </div>
        </div>
    )
}

export default Registration;
