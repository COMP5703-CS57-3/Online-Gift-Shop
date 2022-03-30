import React,{useState} from "react";
import ItemCard from "./ItemCard"

export default function CategoryG({giftlist,onRemoveItems=f=>f}){
    return(
        <div style={{border:"1px solid red",background:"grey"}}>
            <h1>CategoryG</h1>
            <div className="Category">
                {giftlist.map((gift,i)=>(
                    // <Gift key={i} {...gift} onRemove={onRemoveItems}/>
                    <ItemCard key={i} {...gift} onRemove={onRemoveItems}/>
                ))}
            </div>
        </div>
    )
}