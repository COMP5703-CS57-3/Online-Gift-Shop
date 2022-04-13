import React, {createContext, useState, useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";


const OrderContext = createContext();
export const useOrder = ()=> useContext(OrderContext);

export default function OrderProvider({children}){
    const [order,setOrder] = useState();
    const [user,setUser] = useState(0);
    const [loading,setLoading] = useState(true);
    const [currentProduct,setCurrentProduct] = useState();
    const [totalPrice,setTotal] = useState(0);
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

    const createOrder = (ownerId,wishlistId,fName,lName,phone,address,postCode,payerFName,payId,totalPrice,productList)=>{
        const nav =()=> navi("/paytest");
        fetch("http://127.0.0.1:5000/wishlist/pay", {
            method: 'POST',
            body: JSON.stringify(
                {
                    owner_id: ownerId,
                    owner_first_name: fName,
                    owner_last_name: lName,
                    wishlist_id:wishlistId,
                    phone: phone,
                    address:address,
                    postcode:postCode,
                    payer_first_name: payerFName,
                    payer_id:payId,
                    total_price:totalPrice,
                    product_list:productList
                })
        }).then(console.log).then(()=>{
            nav();
        });
    }
    return(
        <OrderContext.Provider value={{order,getOrderByPayer,loading,setLoading,currentProduct,setCurrentProduct,totalPrice,setTotal,createOrder,user,setUser}}>
            {children}
        </OrderContext.Provider>
    )
}