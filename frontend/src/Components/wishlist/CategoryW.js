import React,{useState} from "react";
import ItemCard from "../Cart/ItemCard"
import Box from '@mui/material/Box';
import Background from '../../picture/background.png'
import {useWish} from "../../tools/useWish";
import WishListItem from "./WishListItem";

export default function CategoryW(){
    const {wish} = useWish();
    //console.log(wish);
    return(
        <div>
            <Box sx={{
                display:"grid",
                gap:1,
                gridTemplateColumns:"repeat(2,1fr)"
            }}>
                {wish.map((wishlist,i)=>(
                    <WishListItem key={i} {...wishlist}/>
                ))}
            </Box>
        </div>
    )
}