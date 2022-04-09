import CartProvider from "../../tools/useCart";
import CategoryC from "../Cart/CategoryC";
import React, {useEffect} from "react";
import AdminProvider, {useAdmin} from "../../tools/useAdmin";
import {useWish} from "../../tools/useWish";
import Box from "@mui/material/Box";
import WishListItem from "../wishlist/WishListItem";
import OrderCard from "./OrderCard";
import Loading from "../normal/Loading";
import UserCard from "./UserCard";
import GiftCardA from "./GiftCardA";
import {FixedSizeList} from "react-window";

export default function AdminGiftList() {
    const {gifts} = useAdmin();
    const {getAllGifts} = useAdmin()
    const {loading} = useAdmin()
    useEffect(()=>{
        getAllGifts();
    },[])
    if(loading){
        return <Loading/>
    }
    return(
        <div>
            <Box sx={{
                display:"grid",
                gap:1,
                gridTemplateColumns:"repeat(2,1fr)"
            }}>
                <FixedSizeList
                itemCount={gifts.length}
                itemSize={400}>
                    >
                    {gifts.map((gift,i)=>(
                        <GiftCardA key={i} item={gift}/>
                    ))}
                </FixedSizeList>
            </Box>
        </div>
    )
}