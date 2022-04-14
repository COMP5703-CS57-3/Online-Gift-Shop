import React, {useEffect} from "react";
import {useWish} from "../../tools/useWish";
import Box from "@mui/material/Box";
import WishListItem from "../wishlist/WishListItem";
import {useOrder} from "../../tools/useOrder";
import Loading from "../normal/Loading";
import {CssBaseline} from "@mui/material";
import Background from "../../picture/background.png";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

export default function MyOrder(){
    const {order,getOrderByPayer} = useOrder();
    let navi = useNavigate();
    const nav = (number)=>{ navi("/order/orderDetail/"+number);}
    const {loading} = useOrder()
    useEffect(()=>{
        getOrderByPayer(0);
    },[])
    if(loading){
        return <Loading/>
    }
    if(order){
        return(
        <React.Fragment>
            <CssBaseline />
            <Box style={{width:"100%",height:1500,backgroundImage: "url(" + Background + ")",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                <Container  maxWidth="lg" style={{backgroundColor:"white"}} sx={{ boxShadow: 1,borderRadius: 2}}>
                <h2 style={{marginLeft:0,marginRight:0,textAlign:"center"}}>My order</h2>
                <Box sx={{
                    display:"grid",
                    gap:1,
                    gridTemplateColumns:"repeat(2,1fr)"
                }}>
                    {order.map((order,i)=>(
                        <Box key={i} sx={{mx:3,my:2,px:2,py:1,boxShadow: 1,borderRadius: 2}}>
                            <Typography>
                                order Number: {order.order_number}
                            </Typography>
                            <Typography>
                                order Id: {order.id}
                            </Typography>
                            <Typography>
                                payer name: {order.payer_name}
                            </Typography>
                            <Button size="small" onClick={()=>nav(order.order_number)}>Learn More</Button>
                        </Box>
                    ))}
                </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
    }
    return <h2>find nothing</h2>

}