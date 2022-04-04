import React, {createContext, useState, useContext, useEffect} from "react";
import Wishlist2 from "../data/Wishlist2.json"
import WishListItem from "../data/WIshListItems.json";


const WishContext = createContext();
export const useWish = ()=> useContext(WishContext);
const loadJSON = key=>
    key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key,data)=>
    localStorage.setItem(key,JSON.stringify(data));

export default function WishProvider({children,login}){
    const keyy = "owner_wishlist:"+login
    const [wish,setWish] = useState(loadJSON(keyy));
    const [product,setProduct] = useState(WishListItem);
    useEffect(()=>{
        if(!login) return;
        if(wish&&wish.owner_id === login) return;
        fetch("http://127.0.0.1:5000/wishlist/show", {
            method: 'POST',
            body: JSON.stringify({owner_id:login})
        }).then(res=>res.json()).then(setWish);
        //json store in attribute wishlists_inf, please use wish.wishlists_inf represent array
    },[login])
    // const newWish = (title)=>{
    //     const newWishlist = [
    //         ...wish,
    //         {
    //             "id": 1,
    //               "wishlist_id": "122323124",
    //               "owner_id": 1234,
    //               "wishlist_name": title,
    //               "wishlist_description": "wishlist description 2",
    //               "first_name": "first_name2",
    //               "last_name": "last_name2",
    //               "address": "address2",
    //               "phone": "phone2",
    //               "postcode": "1234",
    //               "state": "processing",
    //               "payer_fname": "none"
    //         }
    //     ]
    //     setWish(newWishlist);
    // }
    // const createWish =(owner_id,owner_first_name,owner_last_name,wishlist_name,description,address,phone,postcode)=>{
    //
    // }
    if(wish)
        return(
            <WishContext.Provider value={{wish,product}}>
                {children}
            </WishContext.Provider>
        )
    return(
            <WishContext.Provider value={{product}}>
                {wish && children}
            </WishContext.Provider>
        )
}