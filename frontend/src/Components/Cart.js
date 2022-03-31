import giftdata from "../data/giftlist.json";
import React,{useState} from "react";
import Giftlist from "./Giftlist";
import ReactDOM from "react-dom";
import Login from "./login&signup";
import CartProvider from "../tools/useCart";
import CategoryC from "./CategoryC";

export default function Cart(){
    return(
        <CartProvider login="test">
            <CategoryC/>
        </CartProvider>
    )
}