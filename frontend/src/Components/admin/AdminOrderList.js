import React, {useEffect} from "react";
import {useAdmin} from "../../tools/useAdmin";
import Box from "@mui/material/Box";
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
                {orderList.map((order,i)=>(
                    <OrderCard key={i} {...order}/>
                ))}
            </Box>
        </div>
    )
}