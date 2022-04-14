import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {checkRouterAuth} from './GenRouter'
import {useApp} from "../tools/useApp";

const BeforeEach = ({children}) => {
    const role=sessionStorage.getItem("role")
    const location = useLocation()
    let {login} = useApp();
    let {CurrRouter}=useApp();
    let obj = checkRouterAuth(CurrRouter,location.pathname)
    if (obj && obj.role.indexOf(role)===-1){
        return obj.role.indexOf("admin")===-1?<Navigate to="/login" state={{from: location}} replace/>:<Navigate to="/nomatch" state={{from: location}} replace/>
    }
    if (obj && obj.auth === true && login === undefined) {
        return obj.role.indexOf("admin")===-1?<Navigate to="/login" state={{from: location}} replace/>:<Navigate to="/nomatch" state={{from: location}} replace/>

    }

    return children;

}

export default BeforeEach