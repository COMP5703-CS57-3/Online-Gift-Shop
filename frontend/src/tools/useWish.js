import React, {createContext, useState, useContext, useEffect} from "react";
import Wishlist2 from "../data/Wishlist2.json"
import WishListItem from "../data/WIshListItems.json";
import {useNavigate} from "react-router-dom";


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
        }).then(res=>res.json()).then(res=>{
            setWish(res.wishlists_inf);
            saveJSON(keyy,res.wishlists_inf);
            console.log("leaking");
        });
        //json store in attribute wishlists_inf, please use wish.wishlists_inf represent array
    },[login])
    let navi = useNavigate();

    const deleteWish = (ownerId,wishId)=>{
        const nav =()=> navi("/wishlist");
        fetch("http://127.0.0.1:5000/wishlist/delete", {
            method: 'POST',
            body: JSON.stringify(
                {
                    owner_id:ownerId,
                    wishlist_id:wishId
                })
        }).then(console.log).then(()=>{
            const data = wish.filter(item=>item.wishlist_id!==wishId)
            setWish(data);
            saveJSON(keyy,data);
            nav();
        });
    }
    const createWish = (id,firstname,lastname,wishlistnameP,descriptionP,addressP,phoneP,postcodeP)=>{
        const nav =()=> navi("/wishlist");
        fetch("http://127.0.0.1:5000/wishlist/create", {
            method: 'POST',
            body: JSON.stringify(
                {
                    owner_id:id,
                    owner_first_name:firstname,
                    owner_last_name:lastname,
                    wishlist_name:wishlistnameP,
                    description:descriptionP,
                    address:addressP,
                    phone:phoneP,
                    postcode:postcodeP
                })
        }).then(console.log);
        fetch("http://127.0.0.1:5000/wishlist/show", {
            method: 'POST',
            body: JSON.stringify({owner_id:login})
        }).then(res=>res.json()).then(res=>{
            setWish(res.wishlists_inf);
            saveJSON(keyy,res.wishlists_inf);
            nav();
        });

    }

    const addProduct = (ownerId,wishlistId,productId,sizeA)=>{
        fetch("http://127.0.0.1:5000/wishlist/add", {
            method: 'POST',
            body: JSON.stringify(
                {
                    owner_id: ownerId,
                    wishlist_id: wishlistId,
                    product_id: 1,
                    size: sizeA
                })
        }).then(console.log);
    }

    const changeCount = (wishlistId,proId,sizeA,countA)=>{
        fetch("http://127.0.0.1:5000/wishlist/changeCount", {
            method: 'put',
            body: JSON.stringify(
                {
                    wishlist_id: wishlistId,
                    products_id: proId,
                    size: sizeA,
                    count: countA
                })
        }).then(console.log);
    }

    const removeProduct = (ownerId,wishlistId,proId)=>{
        fetch("http://127.0.0.1:5000/wishlist/remove", {
            method: 'POST',
            body: JSON.stringify(
                {
                    owner_id: ownerId,
                    wishlist_id: wishlistId,
                    product_id: proId
                })
        }).then(console.log);
    }
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
    // }、、
    if(wish)
        return(
            <WishContext.Provider value={{wish,product,createWish,deleteWish,addProduct,changeCount,removeProduct}}>
                {children}
            </WishContext.Provider>
        )
    return(
            <WishContext.Provider value={{wish,product,createWish,deleteWish,addProduct,changeCount,removeProduct}}>
                {wish && children}
            </WishContext.Provider>
        )
}