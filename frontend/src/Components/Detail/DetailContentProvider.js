import giftdata from "../../data/giftlist.json";
import React,{useState} from "react";
import ReactDOM from "react-dom";
import Login from "../old version file/login&signup";
import CartProvider from "../../tools/useCart";
import CategoryC from "../Cart/CategoryC";
import GiftDetail from "./GiftDetail";
import CategoryW from "../wishlist/CategoryW";
import WishProvider from "../../tools/useWish";

export default function DetailContentProvider(){
    return(
        <CartProvider login="test">
            <WishProvider login={1}>
                <GiftDetail/>
            </WishProvider>
        </CartProvider>
    )
}