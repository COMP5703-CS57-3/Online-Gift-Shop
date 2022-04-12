import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {checkRouterAuth} from './GenRouter'
import {useEffect, useState} from 'react'
import {_local} from "../logic/local$sess";
import cookie from "react-cookies";

const BeforeEach = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [auth, setAuth] = useState(false)
    useEffect(() => {
        let obj = checkRouterAuth(location.pathname)

        let blLogin = cookie.load("login")
        console.log(obj, obj.auth === true, blLogin)
        if (obj && obj.auth === true && blLogin === undefined) {
            setAuth(false)
            navigate('/login')
        } else {
            setAuth(true)
        }
    }, [])
    return auth ? <Outlet/> : null
}

export default BeforeEach