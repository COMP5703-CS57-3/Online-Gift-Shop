import giftdata from "../../data/giftlist.json";
import React, {useEffect, useState} from "react";
import GiftProvider from "../../tools/useGift";
import Button from "@mui/material/Button";
import BoxItem from "../Category/BoxItem";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import {useWish} from "../../tools/useWish";
import {useInput} from "../../tools/useInput";



export default function ProductDetail({para,detail}){
    const {changeCount} = useWish();
    const {removeProduct} = useWish();
    const [countProps,resetCount] = useInput(1);
    const chang = ()=>{
       changeCount(detail.wishlist_id,para.products_id,para.size,countProps.value)
    }//
    const remove = ()=>{
       removeProduct(detail.owner_id,detail.wishlist_id,para.products_id)
    }//
    return(
            <Box>
                <BoxItem {...para}/>
                <TextField
                    {...countProps}
                  id="outlined-number"
                  label="Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Button onClick={chang}> change count</Button>
                <Button onClick={remove}> remove the gift</Button>
            </Box>
    );
}//