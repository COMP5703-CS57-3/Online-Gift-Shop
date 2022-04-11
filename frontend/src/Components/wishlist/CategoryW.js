import React,{useState} from "react";
import ItemCard from "../Cart/ItemCard"
import Box from '@mui/material/Box';
import Background from '../../picture/background.png'
import {useWish} from "../../tools/useWish";
import WishListItem from "./WishListItem";
import Loading from "../normal/Loading";
import Container from "@mui/material/Container";

export default function CategoryW(){
    const {wish} = useWish();
    const {loading} = useWish();
    if(loading){
        return (
            <Box style={{width:"100%",height:1500,backgroundImage: "url(" + Background + ")",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                <Container maxWidth="lg" style={{backgroundColor:"white"}}  sx={{ boxShadow: 1,borderRadius: 2}}>
                    <Loading />
                </Container>
            </Box>
        )
    }
    //console.log(wish);
    return(
        <Container maxWidth="lg" style={{backgroundColor:"white"}}  sx={{ boxShadow: 1,borderRadius: 2}}>
            <Box style={{width:"100%",height:1500,backgroundImage: "url(" + Background + ")",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                <Box sx={{
                    display:"grid",
                    gap:1,
                    gridTemplateColumns:"repeat(2,1fr)"
                }}>
                    {wish.map((wishlist,i)=>(
                        <WishListItem key={i} {...wishlist}/>
                    ))}
                </Box>
            </Box>
        </Container>
    )
}