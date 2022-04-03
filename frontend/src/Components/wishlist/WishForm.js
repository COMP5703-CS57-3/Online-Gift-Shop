import WishProvider from "../../tools/useWish";
import CategoryW from "./CategoryW";
import React, {useRef, useState} from "react";
import {useInput} from "../../tools/useInput";

export default function WishForm() {
    const [titleProps,resetTitle] = useInput("");
    // console.log(wishTitle.current.valueOf());
    const submit = e=>{
        e.preventDefault();
        resetTitle();
    }
    return (
        <form onSubmit={submit}>
            <input {...titleProps} type="text" placeholder="wish list name" required />
            <button>ADD</button>
        </form>
    )
}