import React, {createContext, useState} from "react";
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {useParams} from "react-router-dom";
import {useCart} from "../../tools/useCart";
import {alpha} from "@mui/material/styles";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import {Button, Input} from "@mui/material";
import Background from "../../picture/background.png";
import {useWish} from "../../tools/useWish";
import ItemCard from "../Cart/ItemCard";
import BoxItem from "../Category/BoxItem";

export default function WishDetail() {
    let {id} = useParams();

    let {product} = useWish();
    return(
       <div style={{marginLeft:"auto",marginRight:"auto",maxWidth:1500}}>
            <h1>CategoryG</h1>
            <Box sx={{
                display:"grid",
                gap:1,
                gridTemplateColumns:"repeat(2,1fr)"
            }}>
                {product.map((gift,i)=>(
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
    );
}