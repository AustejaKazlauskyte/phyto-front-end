import React from "react"

import { RegistrationForm } from "containers/RegistrationForm";

function Registration() {
    return (
        <div className="container">
            <div className="row">
                <div className="six columns">
                    <img alt="registration"
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
