import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
    const [token, storeToken] = useState();

    const isAuthenticated = () => {
        /* if (!token) {
             const sessionToken = localStorage.getItem('token');
             if (sessionToken) {
                 storeToken(sessionToken);
             }*/
        /*  }*/
        console.log(5, !!token)
        return !!token;
    };

    const setToken = token => {
        /* if (token) {*/
        localStorage.removeItem('token', token);
        /* }*/
        console.log(4.5, token)

        storeToken(token)

    };

    return (
        <AuthContext.Provider value={{isAuthenticated, setToken}}>
            {children}
        </AuthContext.Provider>
    )

}

/*export function useAuth() {
    return useContext(AuthContext);
}*/
export { AuthProvider, useAuth };
