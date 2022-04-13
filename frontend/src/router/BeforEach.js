import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {checkRouterAuth} from './GenRouter'
import {useApp} from "../tools/useApp";

const BeforeEach = ({children}) => {
    const navigate = useNavigate()
    const location = useLocation()
    let {login} = useApp();
    let obj = checkRouterAuth(location.pathname)

    if (obj && obj.auth === true && login === undefined) {
        return <Navigate to="/login" state={{from: location}} replace/>;

    }

    return children;

}

export default BeforeEach