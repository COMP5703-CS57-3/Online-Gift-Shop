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
import GiftDetail from "./Components/Detail/GiftDetail";
import DetailContentProvider from "./Components/Detail/DetailContentProvider";
import Account from "./Components/account";
import WishListItem from "./Components/wishlist/WishListItem";
import WishList from "./Components/wishlist/WishList";
import WishListContentProvider from "./Components/Detail/WishListContentProvider";
import WishFormProvider from "./Components/wishlist/WishFormProvider";
import CategoryG from "./Components/Category/CategoryG";
import MainBody from "./Components/homepage/MainBody";
import React from "react";



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
                {/*<Route path='' element={ <MainBody/>}/>*/}
                <Route path='' element={<CategoryG/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/wishlist' element={<WishList/>}/>
            </Route>

            <Route path="/wishlist/:wishlist_id" element={<WishListContentProvider/>}/>
            <Route path="/cart/:id" element={<DetailContentProvider/>}/>
            <Route path="/wishForm" element={<WishFormProvider/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="*" element={<NoMatch/>}/>
        </Routes>
    </BrowserRouter>
), document.getElementById('root'))