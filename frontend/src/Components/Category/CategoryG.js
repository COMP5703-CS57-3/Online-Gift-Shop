import React,{useState} from "react";
import BoxItem from "./BoxItem";
import Box from '@mui/material/Box';

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
                hight:500,
                gridTemplateColumns:"repeat(2,1fr)"
            }}>
                {gifts.map((gift,i)=>(
                    <BoxItem key={i} {...gift}/>
                ))}
            </Box>

        </div>
    )
}