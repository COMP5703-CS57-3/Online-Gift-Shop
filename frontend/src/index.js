//index.js
import Cart from "./Components/Cart";
import Login from "./Components/login&signup"
import AccountMenu from "./homepage/Header"
import { Router, Route} from 'react-router'
import NoMatch from "./Components/nomatch";
import Index from "./Components/index.js"
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import CartCategory from "./Components/CartCategory";

ReactDOM.render((
  <Router history={browserHistory} >
      <Route path="/" component={Index}/>
      <Route path="login" component={Login}/>
      <Route path="accountmenu" component={AccountMenu}/>
      <Route path="cart" component={Cart}/>
      <Route path="CartCategory" component={CartCategory}/>
          {/*<Route path="users" component={Users}>*/}
          {/*  <Route path="/user/:userId" component={User}/>*/}
          {/*</Route>*/}
      <Route path="*" component={NoMatch}/>
  </Router>
),  document.getElementById('root'))

//ReactDOM.render(<App/>, document.getElementById('root'))
//ReactDOM.render(<Cart giftlist={giftdata} />, document.getElementById('root'))
//ReactDOM.render(<AccountMenu/>, document.getElementById('root'))