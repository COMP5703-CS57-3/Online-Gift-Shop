import giftdata from "../../data/giftlist.json";
import React,{useState} from "react";
import ReactDOM from "react-dom";
import WishProvider from "../../tools/useWish";
import WishForm from "./WishForm";

export default function WishFormProvider(){
    //
    return(
        <WishProvider>
            <WishForm owner_id={1}/>
        </WishProvider>
    )
}