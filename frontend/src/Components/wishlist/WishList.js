import React from "react";
import CartProvider from "../../tools/useCart";

import WishProvider from "../../tools/useWish";
import CategoryW from "./CategoryW";
import Button from "@mui/material/Button";
import owner from "../../data/owner.json"

export default function WishList() {
    const formData = new FormData();
    formData.append("owner_id",1);
    fetch("http://127.0.0.1:5000/wishlist/show",
        {
            method: 'POST',
            body: {owner_id:1},
            headers: {
            'Content-Type': 'application/json'
          }
        }).then(console.log)
    return (
        <WishProvider>
            <Button>show</Button>
            <CategoryW/>
        </WishProvider>
    )
}