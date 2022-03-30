import giftdata from "../data/giftlist.json";
import React,{useState} from "react";
import CategoryG from "./CategoryG";
import Giftlist from "./Giftlist";

export default function CartCategory(){
    const [items, setItems] = useState(giftdata);
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
    )
}