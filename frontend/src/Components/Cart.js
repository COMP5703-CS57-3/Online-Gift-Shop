import React from "react";
import CartProvider from "../tools/useCart";
import CategoryC from "./CategoryC";

export default function Cart() {
    return (
        <CartProvider login="test">
            <CategoryC/>
        </CartProvider>
    )
}