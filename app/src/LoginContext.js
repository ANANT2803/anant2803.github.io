import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginValue = (props) => {
    const [ isLogin, setIsLogin ] = useState([ false, '' ])

    return (
        <LoginContext.Provider value={[ isLogin, setIsLogin ]}>
            { props.children }
        </LoginContext.Provider>
    );
};