import {Navigate, useLocation} from "react-router-dom";
import {checkRouterAuth} from './GenRouter'
import {useApp} from "../tools/useApp";

const BeforeEach = ({children}) => {
    const role = sessionStorage.getItem("role")
    const location = useLocation()
    const {login, Role} = useApp();
    let obj = checkRouterAuth(location.pathname)
    // console.log(obj)
    if (location.from) {
        if (obj && obj.role.indexOf(role) === -1) {
            // console.log(1)
            return obj.role.indexOf("user") !== -1 ? <Navigate to="/login" state={{from: location}} replace/> :
                <Navigate to="/adlogin" state={{from: location}} replace/>
        }
        if (obj && obj.auth === true && login === undefined) {
            // console.log(2)
            return obj.role.indexOf("user") !== -1 ? <Navigate to="/login" state={{from: location}} replace/> :
                <Navigate to="/adlogin" state={{from: location}} replace/>

        }
    } else {

        if (obj && obj.auth === true && login === undefined) {
            // console.log(2)
            return obj.role.indexOf("user") !== -1 ? <Navigate to="/login" state={{from: location}} replace/> :
                <Navigate to="/adlogin" state={{from: location}} replace/>

        } else if (children.type.name !== "LogIn" || children.type.name !== "AdminLogIn") {
            //console.log(Role, obj, obj.role, obj.auth)
            if (Role === 'user' && obj.role.length === 1 && obj.role[0] === 'admin' && obj.auth) {
                //console.log('1')
                return <Navigate to="/adlogin" state={{from: location}} replace/>
            } else if (Role === 'user' && obj.role.length === 2 && obj.auth) {
                return <Navigate to="/login" state={{from: location}} replace/>
            }
            //     console.log(1)
            //     return <Navigate to="/login" state={{from: location}} replace/>
            // }
            // else{
            //     return <Navigate to="/adlogin" state={{from: location}} replace/>
            // }
            // return obj.role.indexOf("user") !== -1 ? <Navigate to="/login" state={{from: location}} replace/> :
            //     <Navigate to="/adlogin" state={{from: location}} replace/>
            // console.log(children)
        }
    }
    return children;

}

export default BeforeEach