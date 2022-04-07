import giftdata from "../../data/giftlist.json";
import React,{useState} from "react";
import ReactDOM from "react-dom";
import Login from "../old version file/login&signup";
import CartProvider from "../../tools/useCart";
import CategoryC from "../Cart/CategoryC";
import GiftDetail from "./GiftDetail";
import CategoryW from "../wishlist/CategoryW";
import WishProvider from "../../tools/useWish";
import GiftProvider from "../../tools/useGift";

export default function DetailContentProvider(){
    return(
        <GiftProvider login="test">
            <WishProvider login={1}>
                <GiftDetail/>
            </WishProvider>
        </GiftProvider>
    )
}