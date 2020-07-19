import React, { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const TOKEN_KEY = 'token';

const AuthProvider = ({children}) => {
    const [token, setStateToken] = useState();

    useEffect(() => {
        if (!token) {
            const sessionToken = localStorage.getItem(TOKEN_KEY);
            if (sessionToken) {
                setToken(sessionToken);
            }
        }
    });

    const isAuthenticated = () => !!token;

    const setToken = token => {
        if (token) {
            localStorage.setItem(TOKEN_KEY, token);
            setStateToken(token);
        }
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem(TOKEN_KEY);
    };

    return (
        <AuthContext.Provider value={{isAuthenticated, setToken, logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthProvider, useAuth };
