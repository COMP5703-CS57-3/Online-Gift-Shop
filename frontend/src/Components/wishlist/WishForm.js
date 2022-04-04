import WishProvider, {useWish} from "../../tools/useWish";
import CategoryW from "./CategoryW";
import React, {useRef, useState} from "react";
import {useInput} from "../../tools/useInput";

export default function WishForm({owner_id}) {
    const [titleProps,resetTitle] = useInput("123");
    const [firstnameProps,resetfirst] = useInput("123");
    const [lastnameProps,resetLast] = useInput("123");
    const [descriptionProps,resetDescription] = useInput("123");
    const [addressProps,resetAddress] = useInput("123");
    const [phoneProps,resetPhone] =useInput("123");
    const [postcodeProps,resetPostcode] = useInput("123");
    const {createWish} = useWish()
    // console.log(wishTitle.current.valueOf());
    const submit = e=>{
        e.preventDefault();
        createWish(owner_id,firstnameProps.value,lastnameProps.value,titleProps.value,descriptionProps.value,addressProps.value,phoneProps.value,postcodeProps.value);
        // resetTitle();
        // resetAddress();
        // resetDescription();
        // resetfirst();
        // resetLast();
        // resetPhone();
        // resetPostcode();
    }

    return (
        <form onSubmit={submit}>
            title: <input {...titleProps} type="text" placeholder="wish list name" required />
            firstname"<input {...firstnameProps} type="text" required />
            lastname:<input {...lastnameProps} type="text"  required />
            description:<input {...descriptionProps} type="text" required />
            address:<input {...addressProps} type="text"  required />
            phone:<input {...phoneProps} type="text" required />
            postcode:<input {...postcodeProps} type="text" required />
            <button>ADD</button>
        </form>
    )
}