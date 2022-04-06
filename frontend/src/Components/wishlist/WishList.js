import React, {useState} from "react";
import WishProvider from "../../tools/useWish";
import CategoryW from "./CategoryW";

export default function WishList() {

    return (
        <WishProvider  login={1}>
            <CategoryW/>
        </WishProvider>
    )
}