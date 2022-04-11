import React, { useState, useEffect } from "react";


const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
    <form action="http://localhost:5000/order/create_checkout_session" method="post">
      <div>
			<label>
				Order ID:
				<input name="orderId" value="1" />
			</label>
		</div>
		<div>
			<label>
				Order Price:
				<input name="orderPrice" type="number" value="12000" />
			</label>
		</div>
		<div>
			<label>
				Currency:
				<input name="currency" value="AUD" />
			</label>
		</div>
		<div>
			<label>
				Product Name:
				<input name="productName" value="Gold Special" />
			</label>
		</div>
		<div>
			<label>
				Product Description:
				<input name="productDesc" value="Cool pic " />
			</label>
		</div>
		<div>
			<label>
				Product Image:
				<input name="productImage" value="https://bpic.588ku.com/element_pic/21/10/27/5809626baa43e153b15cc3bcfb4bb0eb.jpg!/fw/329/quality/90/unsharp/true/compress/true" />
			</label>
		</div>
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Payc() {
  const [message, setMessage] = useState("");

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

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}