import React, {createContext, useState, useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";


const OrderContext = createContext();
export const useOrder = ()=> useContext(OrderContext);

export default function OrderProvider({children}){
    const [order,setOrder] = useState();
    const [loading,setLoading] = useState(true);
    const [currentProduct,setCurrentProduct] = useState();
    const getOrderByPayer = (payerId)=>{
        setLoading(true)
         fetch("http://127.0.0.1:5000/admin/admin_input_payer_id_orders", {
            method: 'POST',
            body: JSON.stringify(
                {
                    payer_id:payerId
                })
        }).then(res=>res.json()).then(res=>setOrder(res.orders_inf)).then(()=>{
            setLoading(false);
         });
    }
    let navi = useNavigate();

    const createOrder = (wishlistId,time,fName,lName,phone,address,postCode,totalPrice,productList)=>{
        const nav =()=> navi("/order");
        fetch("http://127.0.0.1:5000/order/create", {
            method: 'POST',
            body: JSON.stringify(
                {
                    wishlist_id:wishlistId,
                    order_time: time,
                    first_name: fName,
                    last_name: lName,
                    phone: phone,
                    address:address,
                    postcode:postCode,
                    total_price:totalPrice,
                    product_list:productList
                })
        }).then(console.log).then(()=>{
            nav();
        });
    }
    return(
        <OrderContext.Provider value={{order,getOrderByPayer,loading,currentProduct,setCurrentProduct}}>
            {children}
        </OrderContext.Provider>
    )
}