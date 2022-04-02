import ReactDOM from 'react-dom'
// import {browserHistory, IndexRoute} from 'react-router'
// import { Router, Route, Link } from 'react-router'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./Components/homepage/Homepage"
import CartCategory from "./Components/Category/CartCategory";
import LogIn from "./Components/login";
import SignUp from "./Components/signup";
import {Rotate90DegreesCcw} from "@mui/icons-material";
import NoMatch from "./Components/nomatch";
import Cart from "./Components/Cart/Cart";
import GiftDetail from "./Components/GiftDetail/GiftDetail";
import DetailContentProvider from "./Components/GiftDetail/DetailContentProvider";
import Account from "./Components/account";



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
                <Route path='/cart' element={<Cart/>}/>
                {/*<Route path='c' element={<CartCategory/>}/>*/}
            </Route>

            <Route path="/login" element={<LogIn/>}/>
            <Route path="/cart/:id" element={<DetailContentProvider/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="*" element={<NoMatch/>}/>
        </Routes>
    </BrowserRouter>
), document.getElementById('root'))