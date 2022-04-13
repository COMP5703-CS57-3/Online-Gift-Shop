import React, {createContext, useState, useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import cookie from "react-cookies";


const AppContext = createContext();
export const useApp = ()=> useContext(AppContext);

export default function AppProvider({children}){
    const [login, setLogin]=useState(cookie.load("login"))

    return(
        <AppContext.Provider value={{login,setLogin}}>
            {children}
        </AppContext.Provider>
    )
}