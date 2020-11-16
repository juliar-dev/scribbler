import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider(props) {
    const [ user, setUser ] = useState(null);
    const initializeUser = (userDetails) => {
        setUser(userDetails);
    };

    return (
        <UserContext.Provider value={{user, initializeUser}}>
            {props.children}
        </UserContext.Provider>
    )
}