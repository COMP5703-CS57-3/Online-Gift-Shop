import React, {useEffect, useState} from "react";
import {useOrder} from "../../tools/useOrder";
import {Grid} from "@material-ui/core";
import Loading from "../normal/Loading";
import ProductCard from "../Detail/ProductCard";


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
    console.log(currentOrder)
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
        fetch("http://127.0.0.1:5000/api/order/search_an_order/" + currentOrder, {
            method: 'POST',
        }).then(res => res.json()).then(res => {
            setDetail(res)
            setLoading(false)
            setSecond(true)
        });
    }, []);
    console.log(detail)
    if (loading || !detail) {
        return <Loading/>
    }
    // currentOrder!==undefined&&detail&&
    if (second && detail) {
        return message ? (
            <Message message={message}/>
        ) : (
            <section>
                <div className="product" sx={{position: "absolute",margin:"auto"}}>

                    <Grid container justifyContent="flex-start" alignItems="center" spacing={1} direction="row">
                        {detail.products.map((gift, i) => (
                            <Grid key={i} item xs={6}>
                                <ProductCard {...gift} detail={detail}/>
                            </Grid>
                        ))}
                    </Grid>
                    <div className="description">
                        <h3>order Number: {detail.order_number} </h3>
                    </div>
                </div>
                <form action="http://localhost:5000/api/order/create_checkout_session" method="post">
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
            </section>
        );
    }
    return <Loading/>

}