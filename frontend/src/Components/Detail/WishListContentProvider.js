import giftdata from "../../data/giftlist.json";
import React,{useState} from "react";
import ReactDOM from "react-dom";
import Login from "../old version file/login&signup";
import CartProvider from "../../tools/useCart";
import CategoryC from "../Cart/CategoryC";
import GiftDetail from "./GiftDetail";
import WishProvider from "../../tools/useWish";
import WishDetail from "./WishListDetail";

export default function WishListContentProvider(){
    return(
        <WishProvider login="test">
            <WishDetail/>
        </WishProvider>
    )
}