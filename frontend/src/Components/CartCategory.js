import giftdata from "../data/giftlist.json";
import React, {useEffect, useState} from "react";
import CategoryG from "./CategoryG";

const loadJSON = key=>
    key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key,data)=>
    localStorage.setItem(key,JSON.stringify(data));

export default function CartCategory({login="test"}){
    const [items, setItems] = useState(loadJSON("test"));

    useEffect(()=>{
        if(!login) return;
        if(login=="test") return;
        setItems(giftdata);
    },[login]);
    useEffect(()=>{
        saveJSON("test",items);
    },[items])
    if(items)
        return <CategoryG
                giftlist = {items}
                onRemoveItems={
                    id=>{
                        const newItems = items.filter(item=>item.id!==id);
                        setItems(newItems);
                    }
                }
            />
    return(
            <CategoryG
                giftlist = {items}
                onRemoveItems={
                    id=>{
                        const newItems = items.filter(item=>item.id!==id);
                        setItems(newItems);
                    }
                }
            />
    );
}