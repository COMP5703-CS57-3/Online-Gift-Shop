import React, {createContext, useState, useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import cookie from "react-cookies";
import {UserRouter,AdminRouter} from "../router/GenRouter";

const AppContext = createContext();
export const useApp = ()=> useContext(AppContext);

export default function AppProvider({children}){
    const [login, setLogin]=useState(cookie.load("login"))
    const [Role, setRole]=useState("user")
    return(
        <AppContext.Provider value={{login,setLogin,Role, setRole}}>
            {children}
        </AppContext.Provider>
    )
}