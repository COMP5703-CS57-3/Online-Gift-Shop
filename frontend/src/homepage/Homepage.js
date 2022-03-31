import React from "react"
import ReactDOM from "react-dom";
import AccountMenu from "./Header";
import {IndexLink, IndexRoute, Link} from "react-router";
import CartCategory from "../Components/CartCategory";
import {Outlet} from 'react-router-dom';
import Background from "../picture/background.png";


export default class Homepage extends React.Component{
    render() {
        return(
            <div style={{backgroundImage:"url("+Background+")"}}>
                <AccountMenu/>
                <Outlet />
                {/*<IndexLink to="/cart">Cart</IndexLink>&nbsp;*/}
                {/*<Link to="/login">Login</Link>&nbsp;*/}
                {/*<Link to="/accountmenu">AccountMenu</Link>*/}
            </div>

        )
    }
}
//ReactDOM.render(<AccountMenu/>, document.getElementById('homepage'))