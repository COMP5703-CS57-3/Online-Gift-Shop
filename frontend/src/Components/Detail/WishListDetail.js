import React, {createContext, useEffect, useState} from "react";
import Box from '@mui/material/Box';
import {useNavigate, useParams} from "react-router-dom";
import {useCart} from "../../tools/useCart";
import {alpha} from "@mui/material/styles";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import {Button, Input, TextField} from "@mui/material";
import Background from "../../picture/background.png";
import {useWish} from "../../tools/useWish";
import ItemCard from "../Cart/ItemCard";
import BoxItem from "../Category/BoxItem";
import giftdata from "../../data/giftlist.json";
import {useInput} from "../../tools/useInput";
import ProductDetail from "./ProductDetail";
import {node} from "prop-types";
import {Alert, CssBaseline, Grid} from "@material-ui/core";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Loading from "../normal/Loading";
import cookie from "react-cookies";
import ProductForNoOwner from "./ProductForNoOwner";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Stack from "@mui/material/Stack";

export default function WishListDetail() {
    let {id} = useParams();
    const user = cookie.load("login");
    let navi = useNavigate();
    const nav =()=> navi("/order/createOrder/"+id)
    const [detail,setDetail] = useState();
    const [loading,setLoading] = useState(true);
    const {deleteWish,sendEmail} = useWish();
    const [targetEmailProps,resetTargetEmailProps] = useInput()
    useEffect(()=>{
        setLoading(true);
        fetch("http://127.0.0.1:5000/api/wishlist/search", {
            method: 'POST',
            body: JSON.stringify({
                    wishlist_id : id
                })
        }).then(res=>res.json()).then(setDetail).then(()=>{
            setLoading(false)
            console.log(123)
        });
    },[id]);
    let {product} = useWish();
    const handleSendEmail = ()=>{
        sendEmail(detail.wishlist_id,targetEmailProps.value)
    }

    if(detail&&parseInt(user)!==detail.owner_id){
        return(
            <React.Fragment >
                <CssBaseline/>
                <Box style={{width:"100%",height:1500,backgroundImage: "url(" + Background + ")",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                    <Container maxWidth="lg" style={{backgroundColor:"white"}}  sx={{ boxShadow: 1,borderRadius: 2}}>
                    <Box>
                        <h1 style={{textAlign:"center"}}>WishList Detail</h1>
                        <Grid spacing={1} direction="row" container justifyContent="flex-start" alignItems="center">
                            <Grid item xs={6} sx={{ml:2}}>
                                <Typography variant="h4">
                                    Wishlist Name: {detail.wishlist_name}
                                </Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <Typography variant="h5">
                                    Invitation code: {detail.wishlist_id}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{my:3,ml:2}}>
                                <Typography variant="body1">
                                    Description: {detail.wishlist_description}
                                </Typography>
                            </Grid>
                            <Grid item xs={11} sx={{ml:2}}>
                                <Typography >
                                    Owner information
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ml:2}}>
                                <Typography >
                                    Owner Name: {detail.first_name} {detail.last_name}
                                </Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <Typography >
                                    Phone: {detail.phone}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ml:2}}>
                                <Typography >
                                    address: {detail.address}
                                </Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <Typography >
                                    Postcode: {detail.postcode}
                                </Typography>
                            </Grid>
                            <Grid item xs={11} sx={{ml:2}}>
                                <Typography >
                                    state: {detail.state}
                                </Typography>
                            </Grid>
                        </Grid>
                        <h2 style={{marginLeft:"16px"}}>Gift list</h2>
                        <Grid container justifyContent="flex-start" alignItems="center" spacing={1} direction="row">
                            {detail.products.map((gift,i)=>(
                                <Grid key={i} item xs={6}>
                                    <ProductForNoOwner {...gift} detail={detail}/>
                                </Grid>
                            ))}
                        </Grid>
                        <Alert sx={{mt:2}} severity="info">If the wishlist is completed, the pay button will be disabled — check it out!</Alert>
                        <Button  endIcon={<AddShoppingCartIcon />} sx={{my:2}} variant="contained" size="large" onClick={()=>{
                            if(detail.state==="completed"){
                                alert("this wish list is already completed, you can not pay for this")
                            }else{
                               nav()
                            }}}>Pay</Button>

                    </Box>
                </Container>
                </Box>
            </React.Fragment>
        );
    }
    if (detail)
        return(
            <React.Fragment >
                <CssBaseline/>
                <Box style={{width:"100%",height:1500,backgroundImage: "url(" + Background + ")",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                    <Container maxWidth="lg" style={{backgroundColor:"white"}}  sx={{ boxShadow: 1,borderRadius: 2}}>
                    <Box>
                        <h1 style={{textAlign:"center"}}>WishList Detail</h1>
                        <Grid spacing={1} direction="row" container justifyContent="flex-start" alignItems="center">
                            <Grid item xs={6} sx={{ml:2}}>
                                <Typography variant="h4">
                                    Wishlist Name: {detail.wishlist_name}
                                </Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <Typography variant="h5">
                                    Invitation code: {detail.wishlist_id}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{my:3,ml:2}}>
                                <Typography variant="body1">
                                    Description: {detail.wishlist_description}
                                </Typography>
                            </Grid>
                            <Grid item xs={11} sx={{ml:2}}>
                                <Typography >
                                    Owner information
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ml:2}}>
                                <Typography >
                                    Owner Name: {detail.first_name} {detail.last_name}
                                </Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <Typography >
                                    Phone: {detail.phone}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ml:2}}>
                                <Typography >
                                    address: {detail.address}
                                </Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <Typography >
                                    Postcode: {detail.postcode}
                                </Typography>
                            </Grid>
                            <Grid item xs={11} sx={{ml:2}}>
                                <Typography >
                                    state: {detail.state}
                                </Typography>
                            </Grid>
                        </Grid>
                        <h2 style={{marginLeft:"16px"}}>Gift list</h2>
                        <Grid container justifyContent="flex-start" alignItems="center" spacing={1} direction="row">
                            {detail.products.map((gift,i)=>(
                                <Grid key={i} item xs={6}>
                                    <ProductDetail {...gift} detail={detail}/>
                                </Grid>
                            ))}
                        </Grid>
                        <Alert sx={{mt:2}} severity="info">If the wishlist is completed, the pay button will be disabled — check it out!</Alert>
                        <Button onClick={()=>deleteWish(detail.owner_id,detail.wishlist_id)}>delete this wish list</Button>
                        <Button endIcon={<AddShoppingCartIcon />} sx={{my:2}} variant="contained" size="large" onClick={()=>{
                            if(detail.state==="completed"){
                                alert("this wish list is already completed, you can not pay for this")
                            }else{
                               nav()
                            }}}>Pay</Button>
                         <TextField
                                {...targetEmailProps}
                              label="Email"
                              InputLabelProps={{
                                shrink: true,
                              }}
                          sx={{my:2,mx:2,maxWidth:300,maxHeight:25}}
                        />
                        <Button onClick={()=>handleSendEmail()}> sendEmail</Button>
                    </Box>
                </Container>
                </Box>
            </React.Fragment>
        );
    if(loading){
        return <Loading />
    }
    return null
}