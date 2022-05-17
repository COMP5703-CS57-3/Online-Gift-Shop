import React, {useEffect, useState} from "react";
import {useInput} from "../../tools/useInput";
import Box from "@mui/material/Box";
import {CssBaseline} from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Background from "../../picture/background.png";
import {useOrder} from "../../tools/useOrder";
import {useParams} from "react-router-dom";
import {Grid} from "@material-ui/core";
import Loading from "../normal/Loading";
import cookie from "react-cookies";
import Typography from "@mui/material/Typography";
import ProductOnlyShow from "../Detail/ProductOnlyShow";
import {ip} from "../../ip";

;

export default function OrderDetail() {
    const {number} = useParams();
    const [payerFName, resetTitle] = useInput("123");
    const {createOrder} = useOrder();
    const {currentProduct, setCurrentProduct} = useOrder();
    const {totalPrice, setTotal} = useOrder()
    const summ = () => {
        let sum = 0;
        currentProduct.map((gift, i) => {
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
        fetch("http://"+ ip +"/api/order/search_an_order/"+number, {
            method: 'POST',
        }).then(res=>res.json()).then(res=>{
            setDetail(res)
            setCurrentProduct(res.products)
            setLoading(false)});
    },[]);
    if(loading||!detail){
        return <Loading/>
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Box style={{width:"100%",height:1500,backgroundImage: "url(" + Background + ")",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                <Container  maxWidth="lg" style={{backgroundColor:"white"}} sx={{ boxShadow: 1,borderRadius: 2}}>
                <Box sx={{height:'100vh'}}>
                    <Box >
                        <Box sx={{border:1,borderColor: 'primary.main'}}>
                            <h2 style={{marginLeft:0,marginRight:0,textAlign:"center"}}> Create Order Form</h2>
                            <Stack spacing={4} direction="row" alignItems="center" justifyContent="space-around"  variant="outlined">
                                <Typography >
                                       payer first name: {detail.payer_name}
                                </Typography>
                                <Typography >
                                        Wish list owner's first name: {detail.first_name}
                                </Typography>
                                <Typography >
                                        Wish list owner's lastname: {detail.last_name}
                                </Typography>
                            </Stack>
                            <Stack spacing={2} sx={{my:4}} direction="row" alignItems="center"  justifyContent="space-around"  variant="outlined">
                                <Typography >
                                        address: {detail.address}
                                </Typography>
                                <Typography >
                                        postcode: {detail.postcode}
                                </Typography>
                                <Typography >
                                        time:{detail.user_expected_delivery_time}
                                </Typography>
                            </Stack>
                             <Stack sx={{my:4}} spacing={2} direction="row" alignItems="center" justifyContent="space-around" variant="outlined">
                            <Typography >
                                    phone: {detail.phone}
                            </Typography>
                            </Stack>
                        </Box>

                        <Box sx={{px:11,py:4,border:1,borderColor: 'primary.main'}}>
                              Product list
                            <Grid container justifyContent="flex-start" alignItems="center" spacing={1} direction="row">
                                {currentProduct.map((gift,i)=>(
                                    <ProductOnlyShow key={i} {...gift} detail={detail}/>
                                ))}
                            </Grid>
                        </Box>

                         <Stack sx={{my:4}} spacing={4} direction="row" alignItems="center" justifyContent="flex-end" variant="outlined">
                             <h2>totalPrice: {totalPrice}</h2>
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