import React, {createContext, useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import cookie from "react-cookies";


const WishContext = createContext();
export const useWish = ()=> useContext(WishContext);
// const loadJSON = key=>
//     key && JSON.parse(localStorage.getItem(key));
// const saveJSON = (key,data)=>
//     localStorage.setItem(key,JSON.stringify(data));

export default function WishProvider({children}){
    const login = cookie.load("login");
    const [wish,setWish] = useState();
    const [error2,setError2] = useState("normal");
    const [loading2,setLoading2] = useState(true);
    // useEffect(()=>{
    //     setLoading(true)
    //     if(!login) return;
    //     // if(wish&&wish.owner_id === login) return;
    //     fetch("http://127.0.0.1:5000/api/wishlist/show", {
    //         method: 'POST',
    //         body: JSON.stringify({owner_id:login})
    //     }).then(res=>res.json()).then(res=>{
    //         setWish(res.wishlists_inf);
    //         setLoading(false);
    //     });
    //     //json store in attribute wishlists_inf, please use wish.wishlists_inf represent array
    // },[login])
    let navi = useNavigate();
    const getWish = (id)=>{
        console.log(123)
        setLoading2(true)
        if(!login) {
            setError2("User not logged in");
            setLoading2(false)
            return;
        }
        // if(wish&&wish.owner_id === login) return;
        fetch("http://127.0.0.1:5000/api/wishlist/show", {
            method: 'POST',
            body: JSON.stringify({owner_id:id})
        }).then(res=>res.json()).then(res=>{
            setWish(res.wishlists_inf);
            setLoading2(false);
        });
    }
    const sendEmail = (wishlist,email)=>{
        setError2("normal")
        setLoading2(true)
        fetch("http://127.0.0.1:5000/api/wishlist/send_email", {
            method: 'POST',
            body: JSON.stringify({
                wishlist_id:wishlist,
                receiver_email:email
            })
        }).then(res=>res.json()).then(res=>{
            if(res.message==="the email sent successfully"){
                console.log(123)
            }else{
                setError2("The email is not sent. Check the email format. If the email address is correct, an unknown network problem occurs")
            }
            setLoading2(false)
        });
    }
    const deleteWish = (ownerId,wishId)=>{
        const nav =()=> navi("/wish");
        fetch("http://127.0.0.1:5000/api/wishlist/delete", {
            method: 'POST',
            body: JSON.stringify(
                {
                    owner_id:ownerId,
                    wishlist_id:wishId
                })
        }).then(console.log).then(()=>{
            const data = wish.filter(item=>item.wishlist_id!==wishId)
            if(!data){
                setWish(data);
            }
            nav();
        });
    }
    const createWish = (id,firstname,lastname,wishlistnameP,descriptionP,addressP,phoneP,postcodeP,timeP)=>{
        const nav =()=> navi("/wish");
        fetch("http://127.0.0.1:5000/api/wishlist/create", {
            method: 'POST',
            body: JSON.stringify(
                {
                    owner_id:id,
                    owner_first_name:firstname,
                    owner_last_name:lastname,
                    wishlist_name:wishlistnameP,
                    description:descriptionP,
                    address:addressP,
                    phone:phoneP,
                    postcode:postcodeP,
                    user_expected_delivery_time:timeP
                })
        }).then(console.log).then(()=>{
            nav()
        });
    }

    const addProduct = (ownerId,wishlistId,productId,sizeA,count)=>{
        const nav =()=> navi("/wish/wishlist/"+wishlistId);
        fetch("http://127.0.0.1:5000/api/wishlist/add", {
            method: 'POST',
            body: JSON.stringify(
                {
                    owner_id: ownerId,
                    wishlist_id: wishlistId,
                    product_id: productId,
                    size: sizeA,
                    count: count
                })
        }).then(res=>{
            console.log(res)
            nav()
        });
    }

    const changeCount = (wishlistId,proId,sizeA,countA)=>{
        fetch("http://127.0.0.1:5000/api/wishlist/changeCount", {
            method: 'put',
            body: JSON.stringify(
                {
                    wishlist_id: wishlistId,
                    products_id: proId,
                    size: sizeA,
                    count: countA
                })
        }).then(console.log);
    }

    const removeProduct = (ownerId,wishlistId,proId)=>{
        fetch("http://127.0.0.1:5000/api/wishlist/remove", {
            method: 'POST',
            body: JSON.stringify(
                {
                    owner_id: ownerId,
                    wishlist_id: wishlistId,
                    product_id: proId
                })
        }).then(console.log);
    }
    // const newWish = (title)=>{
    //     const newWishlist = [
    //         ...wish,
    //         {
    //             "id": 1,
    //               "wishlist_id": "122323124",
    //               "owner_id": 1234,
    //               "wishlist_name": title,
    //               "wishlist_description": "wishlist description 2",
    //               "first_name": "first_name2",
    //               "last_name": "last_name2",
    //               "address": "address2",
    //               "phone": "phone2",
    //               "postcode": "1234",
    //               "state": "processing",
    //               "payer_fname": "none"
    //         }
    //     ]
    //     setWish(newWishlist);
    // }
    // const createWish =(owner_id,owner_first_name,owner_last_name,wishlist_name,description,address,phone,postcode)=>{
    //
    // }、、
    return(
            <WishContext.Provider value={{wish,createWish,deleteWish,addProduct,changeCount,removeProduct,loading2,getWish,error2,setLoading2,sendEmail}}>
                {children}
            </WishContext.Provider>
    )
    // return(
    //         <WishContext.Provider value={{wish,product,createWish,deleteWish,addProduct,changeCount,removeProduct}}>
    //             {children}
    //         </WishContext.Provider>
    //     )
}