import React, {createContext, useContext, useState} from "react";

const AdminContext = createContext();
export const useAdmin = ()=> useContext(AdminContext);

export default function AdminProvider({children}){
    const [orderList,setOrderList] = useState();
    const [users,setUsers] = useState();
    const [loading,setLoading] = useState(true);
    const getOrderList = ()=>{
        setLoading(true);
        fetch("http://127.0.0.1:5000/admin/admin_return_all_orders").then(res=>res.json()).then(
            res=> setOrderList(res.orders_inf)
        ).then(()=>{
            setLoading(false)
        });
    }
    const getUsers = ()=>{
        setLoading(true);
        fetch("http://127.0.0.1:5000/admin/admin_return_all_users").then(res=>res.json()).then(
            res=> setUsers(res)
        ).then(()=>{
            setLoading(false)
        });
    }
    return(
        <AdminContext.Provider value={{orderList,getOrderList,loading,getUsers,users}}>
            {children}
        </AdminContext.Provider>
    )//
}