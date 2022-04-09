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
import ForgetPassword from "./Components/forget password";
import AdminOrderList from "./Components/admin/AdminOrderList";
import Dashboard from "./Components/admin/Dashboard";
import AdminUserList from "./Components/admin/AdminUserList";
import Example from "./Components/example/Example";
import AdminGiftList from "./Components/admin/AdminGiftList";
import AddItemForm from "./Components/admin/AddItemForm";



ReactDOM.render((

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
            <Route path="/forget" element={<ForgetPassword/>}/>
            <Route path="*" element={<NoMatch/>}/>

            <Route path='/admin' element={<Dashboard/>}>
                <Route path='/admin/orderlist' element={<AdminOrderList/>}/>
                <Route path='/admin/user' element={<AdminUserList/>}/>
                <Route path='/admin/gift' element={<AdminGiftList/>}/>
                <Route path="/admin/addItemAdmin" element={<AddItemForm/>}/>
            </Route>
            <Route path="/example" element={<Example/>}/>
        </Routes>
    </BrowserRouter>
), document.getElementById('root'))