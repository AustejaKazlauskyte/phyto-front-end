import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "hooks/Auth/Auth";

function PrivateRoute({ component: Component, ...rest }) {
    const { isAuthenticated } = useAuth();

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{ pathname: "/login"/*, state: { referer: props.location */} }
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
