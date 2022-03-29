import giftdata from "../data/giftlist.json";
import React,{useState} from "react";
import Giftlist from "./Giftlist";
import ReactDOM from "react-dom";
import Login from "./login&signup";

export default function Cart(){
    const [items, setItems] = useState(giftdata);
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