import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import React from "react";

import AppProvider from "./tools/useApp";
import {Router} from "./router/GenRouter";


function APP() {
    if(sessionStorage.getItem("role") === undefined) {
        sessionStorage.setItem("role", "user")
        // console.log("haven't run this")
    }
    // sessionStorage.setItem("role", "user")
        return (


            <BrowserRouter>
                <Router/>
            </BrowserRouter>

        )
}

ReactDOM.render(
    // <BrowserRouter>
    //     <Routes>
    //         <Route path="/" element={<Homepage/>}>
    //             {/*<Route path='' element={ <MainBody/>}/>*/}
    //             <Route path='' element={<CategoryG/>}/>
    //             <Route path='/cart' element={<Cart/>}/>
    //             <Route path='/wishlist' element={<WishList/>}/>
    //         </Route>
    //
    //         <Route path="/wishlist/:wishlist_id" element={<WishListContentProvider/>}/>
    //         <Route path="/cart/:id" element={<DetailContentProvider/>}/>
    //         <Route path="/wishForm" element={<WishFormProvider/>}/>
    //         <Route path="/login" element={<LogIn/>}/>
    //         <Route path="/signup" element={<SignUp/>}/>
    //         <Route path="/account" element={<Account/>}/>
    //         <Route path="/findpwd" element={<FPassword/>}/>
    //         <Route path="*" element={<NoMatch/>}/>
    //
    //         <Route path='/admin' element={<Dashboard/>}>
    //             <Route path='/admin/orderlist' element={<AdminOrderList/>}/>
    //             <Route path='/admin/user' element={<AdminUserList/>}/>
    //             <Route path='/admin/gift' element={<AdminGiftList/>}/>
    //             <Route path="/admin/addItemAdmin" element={<AddItemForm/>}/>
    //         </Route>
    //         <Route path="/example" element={<Example/>}/>
    //     </Routes>
    // </BrowserRouter>
    <AppProvider><APP/></AppProvider>

    , document.getElementById('root'))

