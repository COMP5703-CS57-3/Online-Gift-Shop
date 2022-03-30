import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { Router, Route, Link } from 'react-router'

import NoMatch from "./Components/nomatch";
import Index from "./Components/index.js"
import Cart from "./Components/Cart";
import Login from "./Components/login&signup"
import homepage from "./homepage/Homepage"



ReactDOM.render((
  <Router history={browserHistory} >
      <Route path="/" component={homepage}/>
        <Route path="cart" component={Cart}/>
      <Route path="login" component={Login}/>

          {/*<Route path="users" component={Users}>*/}
          {/*  <Route path="/user/:userId" component={User}/>*/}
          {/*</Route>*/}
      <Route path="*" component={NoMatch}/>
  </Router>
),  document.getElementById('root'))