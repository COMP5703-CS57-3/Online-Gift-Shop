import React, {createContext, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import cookie from "react-cookies";


const WishContext = createContext();
export const useWish = () => useContext(WishContext);
// const loadJSON = key=>
//     key && JSON.parse(localStorage.getItem(key));
// const saveJSON = (key,data)=>
//     localStorage.setItem(key,JSON.stringify(data));

export default function WishProvider({children}) {
    const login = cookie.load("login");
    const [wish, setWish] = useState();
    const [error2, setError2] = useState("normal");
    const [loading2, setLoading2] = useState(true);
    const [loading, setLoading] = useState(true)
    const [currId, setCurrId] = useState()
    const [detail, setDetail] = useState()
    const [showLoading, setShowLoading] = useState()
    const [emailError, setEmailError] = useState(false)
    const [emailText, setEmailText] = useState("")
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
    const getWish = (id) => {

        // console.log(123)
        setLoading2(true)
        if (!login) {
            setError2("User not logged in");
            setLoading2(false)
            return;
        }
        if (wish && wish.owner_id === login) return;
        fetch("http://127.0.0.1:5000/api/wishlist/show", {
            method: 'POST',
            body: JSON.stringify({owner_id: id})
        }).then(res => res.json()).then(res => {

            setWish(res.wishlists_inf);
            setLoading2(false);
        });
    }
    const sendEmail = (wishlist, email) => {
        setError2("normal")
        setShowLoading(true)
        setLoading2(true)
        fetch("http://127.0.0.1:5000/api/wishlist/send_email", {
            method: 'POST',
            body: JSON.stringify({
                wishlist_id: wishlist,
                receiver_email: email
            })
        }).then(res => res.json()).then(res => {
            setShowLoading(false)
            if (res.message === "the email sent successfully") {
                setEmailText(`* your wish is sent to ${email} successfully`)
                // console.log(123)
            } else {
                setEmailError(true)
                setEmailText("* The email is not sent. Check the email format. If the email address is correct, an unknown network problem occurs")
            }
            setLoading2(false)
        });
    }
    const deleteWish = (ownerId, wishId) => {
        const nav = () => navi("/wish");
        fetch("http://127.0.0.1:5000/api/wishlist/delete", {
            method: 'POST',
            body: JSON.stringify(
                {
                    owner_id: ownerId,
                    wishlist_id: wishId
                })
        })
            .then(() => nav())
        //     .then(() => {
        //     const data = wish.filter(item => item.wishlist_id !== wishId)
        //     if (!data) {
        //         setWish(data);
        //     }
        //
        // });
    }
    const createWish = (id, firstname, lastname, wishlistnameP, descriptionP, addressP, phoneP, postcodeP, timeP) => {
        const nav = () => navi("/wish");
        fetch("http://127.0.0.1:5000/api/wishlist/create", {
            method: 'POST',
            body: JSON.stringify(
                {
                    owner_id: id,
                    owner_first_name: firstname,
                    owner_last_name: lastname,
                    wishlist_name: wishlistnameP,
                    description: descriptionP,
                    address: addressP,
                    phone: phoneP,
                    postcode: postcodeP,
                    user_expected_delivery_time: timeP
                })
        }).then(console.log).then(() => {
            nav()
        });
    }

    const addProduct = (ownerId, wishlistId, productId, sizeA, count) => {
        const nav = () => navi("/wish/wishlist/" + wishlistId);
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
        }).then(res => {
            // console.log(res)
            nav()
        });
    }

    const changeCount = (wishlistId, proId, sizeA, countA) => {
        setShowLoading(true)
        fetch("http://127.0.0.1:5000/api/wishlist/changeCount", {
            method: 'put',
            body: JSON.stringify(
                {
                    wishlist_id: wishlistId,
                    products_id: proId,
                    size: sizeA,
                    count: countA
                })
        }).then(() => {
            setShowLoading(false)
            getDetail(currId)
        });
    }
    const getDetail = (id) => {
        setCurrId(id)
        const nave = () => navi("/")
        fetch("http://127.0.0.1:5000/api/wishlist/search", {
            method: 'POST',
            body: JSON.stringify({
                wishlist_id: id
            })
        }).then(res => res.json()).then(res => {
            setLoading(false)
            let tt = res
            if (tt.message === "This wishlist does not exist.") {
                nave();
            } else {
                setDetail(res)
            }
        });
    }
    const removeProduct = (ownerId, wishlistId, proId) => {
        setShowLoading(true)
        fetch("http://127.0.0.1:5000/api/wishlist/remove", {
            method: 'POST',
            body: JSON.stringify(
                {
                    owner_id: ownerId,
                    wishlist_id: wishlistId,
                    product_id: proId
                })
        }).then(() => {
                setShowLoading(false)
                getDetail(currId)
            }
        );
    }

    return (
        <WishContext.Provider value={{
            wish,
            createWish,
            deleteWish,
            addProduct,
            changeCount,
            removeProduct,
            loading2,
            getWish,
            error2,
            setLoading2,
            sendEmail,
            getDetail,
            loading, setLoading,
            detail, setDetail,
            emailError, setEmailError,
            emailText, setEmailText
        }}>
            {children}
        </WishContext.Provider>
    )
    // return(
    //         <WishContext.Provider value={{wish,product,createWish,deleteWish,addProduct,changeCount,removeProduct}}>
    //             {children}
    //         </WishContext.Provider>
    //     )
}