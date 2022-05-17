import React, {createContext, useState, useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {ip} from "../../node_modules/ip"


const OrderContext = createContext();
export const useOrder = ()=> useContext(OrderContext);

export default function OrderProvider({children}){
    const [order,setOrder] = useState();
    const [user,setUser] = useState(0);
    const [loading,setLoading] = useState(true);
    const [currentProduct,setCurrentProduct] = useState();
    const [totalPrice,setTotal] = useState(0);
    const [currentOrder,setCurrentOrder] = useState();
    const getOrderByPayer = (payerId)=>{
        setLoading(true)
         fetch("http://" + ip + ":5000/api/admin/admin_input_payer_id_orders", {
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
    console.log(currentOrder)
    const createOrder = (ownerId,wishlistId,fName,lName,phone,address,postCode,payerFName,payId,totalPrice,productList)=>{
        const nav =()=> navi("/order/pay");
        setLoading(true)
        fetch("http://" + ip + ":5000/api/wishlist/pay", {
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
        }).then(res=>res.json()).then(res=>{
            setCurrentOrder(res.order_number)
            nav()
            setLoading(false)
        }
        );
    }

    return(
        <OrderContext.Provider value={{order,getOrderByPayer,loading,setLoading,currentProduct,setCurrentProduct,totalPrice,setTotal,createOrder,user,setUser,currentOrder}}>
            {children}
        </OrderContext.Provider>
    )
}