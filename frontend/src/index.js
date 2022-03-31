import ReactDOM from 'react-dom'
// import {browserHistory, IndexRoute} from 'react-router'
// import { Router, Route, Link } from 'react-router'
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Homepage from "./homepage/Homepage"
import CartCategory from "./Components/CartCategory";
import AccountMenu from "./homepage/Header";


ReactDOM.render((
    // <Router history={browserHistory} >
    //     {/*<Route path="/" component={AccountMenu}>*/}
    //
    //     {/*</Route>*/}
    //
    //     {/*<Route path="/login" component={LogIn}>*/}
    //     {/*    <IndexRoute  component={CartCategory}/>*/}
    //     {/*</Route>*/}
    //     {/*    /!*<Route path="users" component={Users}>*!/*/}
    //     {/*    /!*  <Route path="/user/:userId" component={User}/>*!/*/}
    //     {/*    /!*</Route>*!/*/}
    //     {/*<Route path="*" component={NoMatch}/>*/}
    //
    // </Router>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}>
                <Route path='' element={<CartCategory/>}/>
                {/*<Route path='c' element={<CartCategory/>}/>*/}

            </Route>
        </Routes>
    </BrowserRouter>
), document.getElementById('root'))