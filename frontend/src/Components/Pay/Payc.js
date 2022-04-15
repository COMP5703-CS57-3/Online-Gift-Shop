import React, { useState, useEffect } from "react";
import {useOrder} from "../../tools/useOrder";
import {Button} from "@material-ui/core";
import {TextField} from "@mui/material";
import Loading from "../normal/Loading";



const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Payc() {
	const [detail,setDetail] = useState();
  const [message, setMessage] = useState("");
  const {currentOrder} = useOrder();
  const {loading,setLoading} =useOrder();
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
	useEffect(()=>{
		setLoading(true);
		fetch("http://127.0.0.1:5000/order/search_an_order/"+currentOrder, {
            method: 'POST',
        }).then(res=>res.json()).then(res=>{setDetail(res)
        setLoading(false)});
	},[]);
	console.log(detail)
	// currentOrder!==undefined&&detail&&
	if(!loading){
		return message ? (
    <Message message={message} />
  ) : (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      {/*<h3>order Number: {detail.order_number} {detail.products[0].item_cover_url}</h3>*/}
      </div>
    </div>
	   <form action="http://localhost:5000/order/create_checkout_session" method="post">
      <div>
		  {/*{detail.id}*/}
			<label>
				Order ID:
				<input name="orderId" />
			</label>
		</div>
		<div>
			<label>
				{/*Order Price:*/}
				{/*<input name="orderPrice" type="number" value="12000" />*/}
			</label>
		</div>
		<div>
			<label>
				{/*Currency:*/}
				{/*<input name="currency" value="AUD" />*/}
			</label>
		</div>
		<div>
			<label>
				{/*Product Name:*/}
				{/*<input name="productName" value="Gold Special" />*/}
			</label>
		</div>
		<div>
			<label>
				{/*Product Description:*/}
				{/*<input name="productDesc" value="Cool pic " />*/}
			</label>
		</div>
		<div>
			<label>
				{/*Product Image:*/}
				{/*<input name="productImage" value="https://bpic.588ku.com/element_pic/21/10/27/5809626baa43e153b15cc3bcfb4bb0eb.jpg!/fw/329/quality/90/unsharp/true/compress/true" />*/}
			</label>
		</div>
      {/*<Button onClick={click}>*/}
      {/*  Checkout*/}
      {/*</Button>*/}
		   <button type="submit">check out</button>
	   </form>
  </section>
  );
	}
	return <Loading/>

}