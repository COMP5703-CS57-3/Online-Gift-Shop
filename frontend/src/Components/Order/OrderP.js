import React, {useState} from "react";
import WishProvider from "../../tools/useWish";
import OrderProvider from "../../tools/useOrder";
import MyOrder from "./MyOrder";

export default function OrderP() {

    return (
        <OrderProvider>
            <MyOrder/>
        </OrderProvider>
    )
}