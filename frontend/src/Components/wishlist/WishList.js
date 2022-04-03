import React, {useState} from "react";
import CartProvider from "../../tools/useCart";

import WishProvider from "../../tools/useWish";
import CategoryW from "./CategoryW";
import Button from "@mui/material/Button";
import owner from "../../data/owner.json"
import Wishlist from "../../data/Wishlist2.json"

export default function WishList() {
    const [data,setData] = useState(Wishlist);
    fetch("http://127.0.0.1:5000/wishlist/show", {
            method: 'POST',
            body: JSON.stringify({owner_id:1})
        }).then(res=>res.json()).then(setData);
    console.log(data)
    return (
        <WishProvider>
            <CategoryW/>
        </WishProvider>
    )
}