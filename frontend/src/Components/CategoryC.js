import React,{useState} from "react";
import ItemCard from "./ItemCard"
import BoxItem from "./BoxItem";
import Box from '@mui/material/Box';
import Background from '../picture/background.png'
import {useCart} from "../tools/useCart"

export default function CategoryC(){
    const {items} = useCart();
    return(
        <div style={{marginLeft:"auto",marginRight:"auto",maxWidth:1500}}>
            <h1>CategoryG</h1>
            <Box sx={{
                display:"grid",
                gap:1,
                gridTemplateColumns:"repeat(2,1fr)"
            }}>
                {items.map((gift,i)=>(
                    <ItemCard key={i} {...gift}/>
                ))}
            </Box>
            {/*<div className="Category">*/}
            {/*    {giftlist.map((gift,i)=>(*/}
            {/*        // <Gift key={i} {...gift} onRemove={onRemoveItems}/>*/}
            {/*        <BoxItem key={i} {...gift}/>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    )
}