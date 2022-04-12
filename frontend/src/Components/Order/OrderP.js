import React, {useState} from "react";
import WishProvider from "../../tools/useWish";
import OrderProvider from "../../tools/useOrder";
import MyOrder from "./MyOrder";
import {Outlet} from "react-router-dom";


export default function OrderP() {

    return (
        <OrderProvider>
            <Outlet/>
        </OrderProvider>
    )
}