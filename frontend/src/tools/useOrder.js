import React, {createContext, useState, useContext, useEffect} from "react";


const OrderContext = createContext();
export const useOrder = ()=> useContext(OrderContext);

export default function OrderProvider({children}){
    const [order,setOrder] = useState();
    const [loading,setLoading] = useState(true);
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
    return(
        <OrderContext.Provider value={{order,getOrderByPayer,loading}}>
            {children}
        </OrderContext.Provider>
    )
}