import React from "react";
import CartProvider from "../../tools/useCart";

import WishProvider from "../../tools/useWish";
import CategoryW from "./CategoryW";

export default function WishList() {
    return (
        <WishProvider>
            <CategoryW/>
        </WishProvider>
    )
}