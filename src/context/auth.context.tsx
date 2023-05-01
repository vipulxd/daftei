import React from 'react';

let AuthContext = React.createContext(null);

export interface Props {
    children: JSX.Element | JSX.Element[] | string
}
export const AuthContextProvider = ({children}:Props )=>{
    return (
        <AuthContext.Provider value={null}>
            {children}
            </AuthContext.Provider>
    )
}