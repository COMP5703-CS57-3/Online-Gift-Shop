import React, {useState} from "react";
import WishProvider from "../../tools/useWish";
import CategoryW from "./CategoryW";

export default function WishList() {
    return (
        <WishProvider>
            <CategoryW/>
        </WishProvider>
    )
}