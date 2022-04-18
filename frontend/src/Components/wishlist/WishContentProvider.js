import React, {useState} from "react";
import WishProvider from "../../tools/useWish";
import CategoryW from "./CategoryW";
import {Outlet} from "react-router-dom";

export default function WishContentProvider() {
    return (
        <WishProvider>
            <Outlet/>
        </WishProvider>
    )
}