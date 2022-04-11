import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {checkRouterAuth} from './GenRouter'
import {useEffect, useState} from 'react'
import {_local} from "../logic/local$sess";

const BeforeEach = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [auth, setAuth] = useState(false)
    useEffect(() => {
        let obj = checkRouterAuth(location.pathname)

        let blLogin = _local.get('id')
        console.log(obj, obj.auth === true, blLogin)
        if (obj && obj.auth === true && blLogin === null) {
            setAuth(false)
            navigate('/login', {replace: true})
        } else {
            setAuth(true)
        }
    }, [])
    return auth ? <Outlet/> : null
}

export default BeforeEach