import Cart from "./Components/Cart";
import Login from "./Components/login&signup"
import NoMatch from "./Components/nomatch";
import Index from "./Components/index.js"

import {browserHistory, Route, Router} from 'react-router'

import ReactDOM from 'react-dom'

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Index}/>
        <Route path="login" component={Login}/>
        <Route path="cart" component={Cart}/>
        {/*<Route path="users" component={Users}>*/}
        {/*  <Route path="/user/:userId" component={User}/>*/}
        {/*</Route>*/}
        <Route path="*" component={NoMatch}/>
    </Router>
), document.getElementById('root'))