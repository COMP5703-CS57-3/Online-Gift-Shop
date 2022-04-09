import React, {createContext, useContext, useState} from "react";

const AdminContext = createContext();
export const useAdmin = ()=> useContext(AdminContext);

export default function AdminProvider({children}){
    const [orderList,setOrderList] = useState();
    const [users,setUsers] = useState();
    const [gifts,setGifts] = useState();
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
    const changeItemCount = (gift,sizeC)=>{
        fetch("http://127.0.0.1:5000/admin/admin_edit_items", {
            method: 'put',
            body: JSON.stringify(
                {
                    id: gift.id,
                    gift_name: gift.gift_name,
                    gift_price: gift.gift_price,
                    gift_discount_price: gift.gift_discount_price,
                    gift_discount_state:gift.gift_discount_state,
                    gift_description:gift.gift_description,
                    sizes:sizeC,
                    gift_category: gift.gift_category,
                    gift_side_category1: gift.gift_side_category1,
                    gift_side_category2: gift.gift_side_category2,
                    gift_cover_url: gift.gift_cover_url,
                    gift_show_url1: gift.gift_show_url1,
                    gift_show_url2: gift.gift_show_url2,
                    gift_show_url3: gift.gift_show_url3,
                    gift_show_url4: gift.gift_show_url4

                })
        }).then(console.log);
    }
    const getAllGifts =()=>{
        setLoading(true);
        fetch("http://127.0.0.1:5000/main_home_page").then(res=>res.json()).then(
            res=> setGifts(res.gifts)
        ).then(()=>{
            setLoading(false)
        });
    }
    return(
        <AdminContext.Provider value={{orderList,getOrderList,loading,getUsers,users,getAllGifts,gifts,changeItemCount}}>
            {children}
        </AdminContext.Provider>
    )//
}