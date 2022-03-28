import {IndexLink, Link} from "react-router";

export default function Index() {
    return (
        <div>
            <h1>This is index page</h1>
            <IndexLink to="/cart">Cart</IndexLink>&nbsp;
            <Link to="/login">Login</Link>&nbsp;
            <Link to="/accountmenu">AccountMenu</Link>

        </div>)

}