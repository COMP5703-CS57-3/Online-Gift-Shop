import React, {createContext, useContext, useState} from "react";
import cookie from "react-cookies";


const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export default function AppProvider({children}) {
    const [login, setLogin] = useState(cookie.load("login"))
    const [Role, setRole] = useState("user")
    return (
        <AppContext.Provider value={{login, setLogin, Role, setRole}}>
            {children}
        </AppContext.Provider>
    )
}