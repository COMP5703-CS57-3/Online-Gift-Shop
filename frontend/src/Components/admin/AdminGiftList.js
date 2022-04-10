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
    const giftlist = gifts.map((gift,index)=>(
        {
            gift: gift,
            index: index
        }
    ))
    const render = ({index,style})=>(
        <GiftCardA style={style} item={giftlist[index].gift}/>
    )

    return(

            <FixedSizeList
                width={window.innerHeight}
                height={window.innerWidth}
                itemCount={giftlist.length}
                itemSize={300}
            >
                {render}
            </FixedSizeList>

    )
}