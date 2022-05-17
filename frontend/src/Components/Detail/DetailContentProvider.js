import React from "react";
import GiftDetail from "./GiftDetail";
import WishProvider from "../../tools/useWish";

export default function DetailContentProvider(){
    return(
            <WishProvider>
                <GiftDetail/>
            </WishProvider>
    )
}