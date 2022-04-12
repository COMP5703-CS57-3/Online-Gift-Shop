import {Navigate, Outlet, useLocation, useNavigate} from "react-router-dom";
import {checkRouterAuth} from './GenRouter'
import {useEffect, useState} from 'react'
import {_local, _session} from "../logic/local$sess";
import cookie from "react-cookies";

const BeforeEach = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [auth, setAuth] = useState(false)
    useEffect(() => {
        let obj = checkRouterAuth(location.pathname)
        // console.log(location)
        _session.set("curr",location.state)
        let blLogin = cookie.load("login")
        console.log(obj, obj.auth === true, blLogin)
        if (obj && obj.auth === true && blLogin === undefined) {
            setAuth(false)

        } else {
            setAuth(true)
        }
    }, [location])
    console.log(auth)
    const res=auth ? <Outlet/> : <Navigate to='/login' state={{ from: location }} replace/>
    console.log(res)
    return res
}

export default BeforeEach