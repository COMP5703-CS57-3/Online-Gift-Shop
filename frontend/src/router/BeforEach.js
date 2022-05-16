import {Navigate, useLocation} from "react-router-dom";
import {checkRouterAuth} from './GenRouter'
import {useApp} from "../tools/useApp";

const BeforeEach = ({children}) => {
    const role = sessionStorage.getItem("role")
    const location = useLocation()
    let {login} = useApp();
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
    }
    else{

        if (obj && obj.auth === true && login === undefined) {
            // console.log(2)
            return obj.role.indexOf("user") !== -1 ? <Navigate to="/login" state={{from: location}} replace/> :
                <Navigate to="/adlogin" state={{from: location}} replace/>

        } else if (children.type.name !== "LogIn" || children.type.name !== "AdminLogIn") {
            // return obj.role.indexOf("user") !== -1 ? <Navigate to="/login" state={{from: location}} replace/> :
            //     <Navigate to="/adlogin" state={{from: location}} replace/>
            // console.log(children)
        }
    }
    return children;

}

export default BeforeEach