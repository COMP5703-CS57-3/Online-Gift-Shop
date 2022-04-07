import React, {createContext, useEffect, useState} from "react";
import Box from '@mui/material/Box';
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
import {node} from "prop-types";
import {Grid} from "@material-ui/core";

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
            <div style={{width:"100%",height:1500,backgroundImage: "url(" + Background + ")",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
       <Grid style={{marginLeft:"auto",marginRight:"auto",maxWidth:1500,flexWrap:"nowrap",flexDirection:"row"}}>
            <h1>WishList Detail</h1>
           <Grid item sx={4} >
               <p>{detail.wishlist_id}</p>
               <p>{detail.wishlist_name}</p>
               <p>{detail.wishlist_description}</p>
               <p>{detail.first_name} {detail.last_name}</p>

           </Grid>
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
        </Grid>
            </div>
        );
    return null;
}