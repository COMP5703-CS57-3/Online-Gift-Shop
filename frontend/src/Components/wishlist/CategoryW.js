import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Background from '../../picture/background.png'
import {useWish} from "../../tools/useWish";
import WishListItem from "./WishListItem";
import Loading from "../normal/Loading";
import Container from "@mui/material/Container";
import cookie from "react-cookies";
import BeforeEach from "../../router/BeforEach";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {Button} from "@material-ui/core";

export default function CategoryW() {
    const user = cookie.load("login");
    const navigate = useNavigate()
    const {wish} = useWish();
    const [second,setSecond] = useState(false)
    const {loading2,getWish,setLoading2} = useWish();
    const location = useLocation()
    const navi =()=> navigate("/wish/wishForm")
    useEffect(()=>{
        setLoading2(true)
        setSecond(true)
        getWish(user)
    },[])
    if(!user){
        return <Navigate to='/login' state={{ from: location }} replace/>
    }
    if (loading2||!second) {
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
    if(second&&!wish){
        return <Box style={{
                width: "100%",
                height: 1500,
                backgroundImage: "url(" + Background + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>
                <Container maxWidth="lg" style={{backgroundColor: "white"}} sx={{boxShadow: 1, borderRadius: 2}}>
                    <Button onClick={navi}>wishForm</Button>
                    <h3>user do not have wish list, please create one</h3>
                </Container>
            </Box>
    }
    if(second&&user&&wish&&user!=="0"){
         return (
            <Box style={{
                width: "100%",
                height: 1500,
                backgroundImage: "url(" + Background + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>
                <Container maxWidth="lg" style={{backgroundColor: "white"}} sx={{boxShadow: 1, borderRadius: 2}}>
                    <Button onClick={navi}>wishForm</Button>
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
     return <h2>123</h2>
    //console.log(wish);

}