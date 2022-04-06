import React, {createContext, useEffect, useState} from "react";
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
import giftdata from "../../data/giftlist.json";
import {useInput} from "../../tools/useInput";
import ProductDetail from "./ProductDetail";

export default function WishListDetail() {
    let id = useParams();
    const [detail,setDetail] = useState();
    const {deleteWish} = useWish();
    useEffect(()=>{
        fetch("http://127.0.0.1:5000/wishlist/search", {
            method: 'POST',
            body: JSON.stringify(id)
        }).then(res=>res.json()).then(setDetail);
    },[id]);
    let {product} = useWish();

    if (detail)
        return(
       <div style={{marginLeft:"auto",marginRight:"auto",maxWidth:1500}}>
            <h1>CategoryG</h1>
           <Box>
               <p>{detail.wishlist_id}</p>
               <p>{detail.wishlist_name}</p>
               <p>{detail.wishlist_description}</p>
               <p>{detail.first_name} {detail.last_name}</p>

           </Box>
            <Box sx={{
                display:"grid",
                gap:1,
                gridTemplateColumns:"repeat(2,1fr)"
            }}>
                {detail.products.map((gift,i)=>(
                    <ProductDetail key={i} para={gift} detail={detail}/>
                ))}
            </Box>
           <Button onClick={()=>deleteWish(detail.owner_id,detail.wishlist_id)}>delete this wish list</Button>
            {/*<div className="Category">*/}
            {/*    {giftlist.map((gift,i)=>(*/}
            {/*        // <Gift key={i} {...gift} onRemove={onRemoveItems}/>*/}
            {/*        <BoxItem key={i} {...gift}/>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
        );
    return null;
}