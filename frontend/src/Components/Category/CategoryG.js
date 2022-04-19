import React, {useEffect, useState} from "react";
import BoxItem from "./BoxItem";
import Box from '@mui/material/Box';

import {useGift} from "../../tools/useGift";
import {ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import Button from "@mui/material/Button";
import Loading from "../normal/Loading";
import NetworkError from "../normal/NetweorkError";
import {useNavigate} from "react-router-dom";
import GiftItem from "./GiftItem";

export default function CategoryG(){
    const {gifts} = useGift();
    let navi = useNavigate();
    const nav =(id)=> navi("/gift/"+id);
    const {loading,getGifts,setLoading,error} = useGift();
    const [second,setSecond] = useState(false);
    useEffect(()=>{
        setLoading(true)
        setSecond(true)
        getGifts()
    },[])
    if (second&&!loading&&!gifts){
        if(error&&error!=="normal"){
            return <NetworkError errorType={error}/>
        }
        return <NetworkError errorType="no data"/>
    }
    if (!second||loading){
        return <Loading/>
    }
    if(Array.isArray(gifts)&&gifts.length===0){
        return(
            <h1>no gifts or network problem</h1>
        )
    }
    if(Array.isArray(gifts)){
        return(
        <ImageList sx={{width:1000,height:910,}} cols={3} gap={50} >
            {gifts.map((gift,i) =>(
                    <GiftItem key={i} {...gift}/>
            ))}
        </ImageList>
    )
    }
    return(
        <ImageList sx={{width:1000,height:910,}} cols={3} gap={50} >
            {gifts.map((gift,i) =>(
                    <GiftItem key={i} {...gift}/>
            ))}
        </ImageList>
    )
}