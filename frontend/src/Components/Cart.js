import React,{useState} from "react";
import Giftlist from "./Giftlist";

export default function Cart({giftlist,style}){
    const [items, setItems] = useState(giftlist);
    return(
        <Giftlist
            giftlist = {items}
            onRemoveItems={
                id=>{
                    const newItems = items.filter(item=>item.id!==id);
                    setItems(newItems);
            }}
        />
    )
}