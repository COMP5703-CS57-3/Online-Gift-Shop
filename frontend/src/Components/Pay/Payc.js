import React, {useEffect, useState} from "react";
import {useOrder} from "../../tools/useOrder";
import {Grid} from "@material-ui/core";
import Loading from "../normal/Loading";
import ProductCard from "../Detail/ProductCard";
import {CssBaseline} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {ip} from "../../../node_modules/ip"

const Message = ({message}) => (
    <section>
        <p>{message}</p>
    </section>
);

export default function Payc() {
    const [detail, setDetail] = useState();
    const [message, setMessage] = useState("");
    const [second, setSecond] = useState(false)
    const {currentOrder} = useOrder();
    const {loading, setLoading} = useOrder();
    //console.log(currentOrder)
    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation.");
        }

        if (query.get("canceled")) {
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, []);
    useEffect(() => {
        setLoading(true);
        fetch("http://" + ip +"/api/order/search_an_order/" + currentOrder, {
            method: 'POST',
        }).then(res => res.json()).then(res => {
            setDetail(res)
            setLoading(false)
            setSecond(true)
        });
    }, []);
    //console.log(detail)
    if (loading || !detail) {
        return <Loading/>
    }
    // currentOrder!==undefined&&detail&&
    if (second && detail) {
        return message ? (
            <Message message={message}/>
        ) : (
            <React.Fragment>
            <CssBaseline />
            <Box style={{width:"100%",height:1500}}>
                <Container  maxWidth="lg"  style={{backgroundColor:"white",height:1000}} sx={{ boxShadow: 1,borderRadius: 2}}>
                <h2 style={{marginLeft:0,marginRight:0,textAlign:"center"}}>My order</h2>
                <Box>
                    <Box className="product" sx={{mb:4}}>
                        <Box className="description">
                            <h3>order Number: {detail.order_number} </h3>
                        </Box>
                        <Grid container justifyContent="flex-start" alignItems="center" spacing={1} direction="row"  sx={{ border: 1}}>
                            {detail.products.map((gift, i) => (
                                <Grid key={i} item xs={5} sx={{mb:3}}>
                                    <ProductCard {...gift} detail={detail}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Grid container justifyContent="center" alignItems="center" spacing={1} direction="row" sx={{ border: 1}}>
                         <Grid item xs={12}>
                             <h2 style={{marginLeft:0,marginRight:0,textAlign:"center"}}>Order Information</h2>
                             </Grid>
                        <Grid item xs={3}>
                            <form action={"http://" + ip + "/api/order/create_checkout_session"} method="post">
                                <div>
                                    <label>
                                        Order ID:
                                        <input name="orderId" value={detail.id}/>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Currency:
                                        <input name="currency" value="AUD"/>
                                    </label>
                                </div>
                                <button type="submit">check out</button>
                            </form>
                        </Grid>
                        <Grid item xs={12}>
                            <h3 style={{marginLeft:0,marginRight:0,textAlign:"center"}}>If there is a payment problem, please Contact us : +01 1111111111</h3>
                        </Grid>
                    </Grid>

                </Box>

                    </Container>
            </Box>

            </React.Fragment>
        );
    }
    return <Loading/>

}