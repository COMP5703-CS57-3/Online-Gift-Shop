import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import React from "react";

import BeforEach from "./Components/router/BeforEach";
import {Router} from "./Components/router/GenRouter";

ReactDOM.render((

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
    <>

        <BrowserRouter>
            <BeforEach/>
            <Router/>
        </BrowserRouter>
    </>
), document.getElementById('root'))

