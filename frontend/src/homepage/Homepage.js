import React from "react"
import ReactDOM from "react-dom";
import AccountMenu from "./Header";
import {IndexLink, Link} from "react-router";



export default class homepage extends React.Component{
    render() {
        return(
            <div>
                <AccountMenu/>
                <IndexLink to="/cart">Cart</IndexLink>&nbsp;
                {/*<Link to="/login">Login</Link>&nbsp;*/}
                <Link to="/accountmenu">AccountMenu</Link>

            </div>

        )
    }
}
//ReactDOM.render(<AccountMenu/>, document.getElementById('homepage'))