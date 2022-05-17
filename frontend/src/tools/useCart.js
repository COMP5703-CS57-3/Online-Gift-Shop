import React, {createContext, useContext, useEffect, useState} from "react";
import giftdata from "../data/giftlist.json";
// import {v4} from "uuid";

const CartContext = createContext();
export const useCart = ()=> useContext(CartContext);
const loadJSON = key=>
    key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key,data)=>
    localStorage.setItem(key,JSON.stringify(data));

export default function CartProvider({children,login}){
    const [items,setItems] = useState(loadJSON("test"));

    localStorage.clear()
    //
    useEffect(()=>{
        if(!login) return;
        //if(login=="test") return;
        setItems(giftdata);
    },[login]);
    useEffect(()=>{
        //saveJSON("test",items);
    },[items])
    (items)
    const removeItems = id => setItems(items.filter(item=>item.id!==id));
    if(items)
        return (
        <CartContext.Provider value={{items,removeItems}}>
            {children}
        </CartContext.Provider>
        )
    return null
}