import React,{useState} from "react";
import Gift from "./Gift";
import ItemInCart from "./ItemInCart";

export default function Giftlist({giftlist,style,onRemoveItems=f=>f}){
    return(
        <div style={{border:"1px solid red",...style}}>
            <h1>gift list</h1>
            <div className="Giftlist">
                {giftlist.map((gift,i)=>(
                    // <Gift key={i} {...gift} onRemove={onRemoveItems}/>
                    <ItemInCart key={i} {...gift} onRemove={onRemoveItems}/>
                ))}
            </div>
        </div>
    )
}