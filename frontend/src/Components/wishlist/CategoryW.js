import React, {useState} from "react";
import Box from '@mui/material/Box';
import Background from '../../picture/background.png'
import {useWish} from "../../tools/useWish";
import WishListItem from "./WishListItem";
import Loading from "../normal/Loading";
import Container from "@mui/material/Container";
import cookie from "react-cookies";
import BeforeEach from "../../router/BeforEach";
import {Navigate, useLocation, useNavigate} from "react-router-dom";

export default function CategoryW() {
    const user = cookie.load("login");
    console.log(user)
    const navigate = useNavigate()
    const {wish} = useWish();
    const {loading} = useWish();
    const location = useLocation()
    if (loading) {
        return (
                <Box style={{
                    width: "100%",
                    height: 1500,
                    backgroundImage: "url(" + Background + ")",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>
                    <Container maxWidth="lg" style={{backgroundColor: "white"}} sx={{boxShadow: 1, borderRadius: 2}}>
                        <Loading/>
                    </Container>
                </Box>
        )
    }

    if(user&&wish){
         return (
            <Box style={{
                width: "100%",
                height: 1500,
                backgroundImage: "url(" + Background + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>
                <Container maxWidth="lg" style={{backgroundColor: "white"}} sx={{boxShadow: 1, borderRadius: 2}}>

                    <Box sx={{
                        display: "grid",
                        gap: 1,
                        gridTemplateColumns: "repeat(2,1fr)"
                    }}>
                        {wish.map((wishlist, i) => (
                            <WishListItem key={i} {...wishlist}/>
                        ))}
                    </Box>
                </Container>
            </Box>
    )
    }
     return <Navigate to='/login' state={{ from: location }} replace/>
    //console.log(wish);

}