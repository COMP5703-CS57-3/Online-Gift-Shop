import React, {useEffect, useState} from "react";
import {useInput} from "../../tools/useInput";
import Box from "@mui/material/Box";
import {CssBaseline, TextField} from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import countries from "../../data/CountrySelect";
import states from "../../data/ProvinceSelect";
import Background from "../../picture/background.png";
import {useOrder} from "../../tools/useOrder";
import {useParams} from "react-router-dom";
import {Grid} from "@material-ui/core";
import ProductForShow from "../Detail/ProductForShow";
import Loading from "../normal/Loading";
import cookie from "react-cookies";
import Typography from "@mui/material/Typography";
import {ip} from "../../../node_modules/ip"

export default function CreateOrder() {
    const {id} = useParams();

    const [address2,setAddress2] = useState(states[0].label);
    const [address1,setAddress1] = useState(countries[12].label.toString());
    const [payerFName,resetTitle] = useInput();
    const [firstnameProps,resetfirst] = useInput();
    const [lastnameProps,resetLast] = useInput();
    const [address3Props,resetAddress3] = useInput();
    const [phoneProps,resetPhone] =useInput();
    const [postcodeProps,resetPostcode] = useInput();
    const {createOrder} = useOrder();
    const [targetProduct,setTargetProduct] = useState();
    const {currentProduct,setCurrentProduct} =useOrder();
    const {totalPrice,setTotal} = useOrder()
    const summ =()=>{
        let sum =0;
        currentProduct.map((gift,i)=>{
            sum = gift.price*gift.count + sum;
        })
        return sum
    }
    if(currentProduct){
        setTotal(summ());
    }
    const [detail,setDetail] = useState();
    const {loading,setLoading} = useOrder();
    const {user,setUser} = useOrder();
    if(cookie.load("login")){
        setUser(cookie.load("login"))
    }
    useEffect(()=>{
        setLoading(true);
        fetch("http://"+ ip +"/api/wishlist/search", {
            method: 'POST',
            body: JSON.stringify({
                    wishlist_id : id
                })
        }).then(res=>res.json()).then(res=>{
            setDetail(res)
            setCurrentProduct(res.products)
            setLoading(false)});
    },[id]);
    const submit = e=>{
        e.preventDefault();
        createOrder(detail.owner_id,id,detail.first_name,detail.last_name,detail.phone,detail.address,detail.postcode,payerFName.value,user,totalPrice,currentProduct);
        // resetTitle();
        // resetAddress();
        // resetDescription();
        // resetfirst();
        // resetLast();
        // resetPhone();
        // resetPostcode();
    }
    if(loading){
        return <Loading/>
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Box style={{width:"100%",height:1500,backgroundImage: "url(" + Background + ")",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                <Container  maxWidth="lg" style={{backgroundColor:"white"}} sx={{ boxShadow: 1,borderRadius: 2}}>
                <Box sx={{height:'100vh'}}>
                    <Box component="form" onSubmit={submit}>
                        <h2 style={{marginLeft:0,marginRight:0,textAlign:"center"}}> Create Order Form</h2>
                        <Stack spacing={4} direction="row" alignItems="center" justifyContent="space-between" variant="outlined">
                            <TextField {...payerFName} label="payerFName" required/>
                            <Typography >
                                    Wish list owner's first name: {detail.fisrt_name}
                            </Typography>
                            <Typography >
                                    Wish list owner's lastname: {detail.last_name}
                            </Typography>
                        </Stack>
                        <Stack spacing={2} sx={{my:4}} direction="row" alignItems="center" justifyContent="space-between" variant="outlined">
                            <Typography >
                                    address: {detail.address}
                            </Typography>
                            <Typography >
                                    time:{detail.user_expected_delivery_time}
                            </Typography>
                        </Stack>
                        <Stack sx={{my:4}} spacing={2} direction="row" alignItems="center" justifyContent="space-between" variant="outlined">
                            <Typography >
                                    postcode: {detail.postcode}
                            </Typography>

                            <Typography >
                                    phone: {detail.phone}
                            </Typography>
                        </Stack>
                        Product list
                        <Grid container justifyContent="flex-start" alignItems="center" spacing={1} direction="row">
                            {currentProduct.map((gift,i)=>(
                                <ProductForShow key={i} {...gift} detail={detail}/>
                            ))}
                        </Grid>
                         <Stack sx={{my:4}} spacing={4} direction="row" alignItems="center" justifyContent="flex-end" variant="outlined">
                             <h2>totalPrice: ${totalPrice}</h2>
                             <button>Create</button>
                        </Stack>
                    </Box>
                    {/*<form onSubmit={submit2}>*/}
                    {/*    <button>ADD product</button>*/}
                    {/*</form>*/}
                </Box>
            </Container>
            </Box>
        </React.Fragment>


    )
}