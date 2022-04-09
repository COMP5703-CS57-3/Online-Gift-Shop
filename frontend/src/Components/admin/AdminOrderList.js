import CartProvider from "../../tools/useCart";
import CategoryC from "../Cart/CategoryC";
import React, {useEffect} from "react";
import AdminProvider, {useAdmin} from "../../tools/useAdmin";
import {useWish} from "../../tools/useWish";
import Box from "@mui/material/Box";
import WishListItem from "../wishlist/WishListItem";
import OrderCard from "./OrderCard";
import Loading from "../normal/Loading";

export default function AdminOrderList() {
    const {orderList} = useAdmin();
    const {getOrderList} = useAdmin()
    const {loading} = useAdmin()
    useEffect(()=>{
        getOrderList()
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
                {orderList.map((orderlist,i)=>(
                    <OrderCard key={i} {...orderlist}/>
                ))}
            </Box>
        </div>
    )
}