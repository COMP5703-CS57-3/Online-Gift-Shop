import React, {useEffect} from "react";
import {useWish} from "../../tools/useWish";
import Box from "@mui/material/Box";
import WishListItem from "../wishlist/WishListItem";
import {useOrder} from "../../tools/useOrder";
import Loading from "../normal/Loading";

export default function MyOrder(){
    const {order,getOrderByPayer} = useOrder();
    const {loading} = useOrder()
    useEffect(()=>{
        getOrderByPayer(0);
    },[])
    if(loading){
        return <Loading/>
    }
    if(order){
        return(
        <div>
            <Box sx={{
                display:"grid",
                gap:1,
                gridTemplateColumns:"repeat(2,1fr)"
            }}>
                {order.map((order,i)=>(
                    <div key={i}>
                        <h2>{order.id}</h2>
                        <h2>{order.order_number}</h2>
                    </div>
                ))}
            </Box>
        </div>
    )
    }
    return <h2>find nothing</h2>

}