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

export default function AdminUserList() {
    const {users} = useAdmin();
    const {getUsers} = useAdmin()
    const {loading} = useAdmin()
    useEffect(()=>{
        getUsers()
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
                {users.map((user,i)=>(
                    <UserCard key={i} {...user}/>
                ))}
            </Box>
        </div>
    )
}