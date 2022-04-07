import React,{useState} from "react";
import ItemCard from "../Cart/ItemCard"
import BoxItem from "./BoxItem";
import Box from '@mui/material/Box';
import Background from '../../picture/background.png'
import {useGift} from "../../tools/useGift";

export default function CategoryG(){
    const {gifts} = useGift();
    if(gifts===undefined){
        return(<h2 style={{margin: "auto", textAlign: "center"}}> No gifts</h2>)
    }
    return(
        <div style={{marginRight:"auto",maxWidth:1000}}>
            {/*<h1>CategoryG</h1>*/}

            <Box sx={{
                display:"grid",
                gap:1,
                // width:600,
                hight:500,
                gridTemplateColumns:"repeat(2,1fr)"
            }}>
                {gifts.map((gift,i)=>(
                    // <Gift key={i} {...gift} onRemove={onRemoveItems}/>
                    <BoxItem key={i} {...gift}/>
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