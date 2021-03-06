import React, {createContext, useContext, useState} from "react";
import axios from "axios";
import {ip} from "../ip";

const AdminContext = createContext();
export const useAdmin = () => useContext(AdminContext);

export default function AdminProvider({children}) {
    const [state, setState] = useState();
    const [orderList, setOrderList] = useState();
    const [users, setUsers] = useState();
    const [gifts, setGifts] = useState();
    const [loading, setLoading] = useState(true);
    const [selectedGiftIds, setSelectedGiftIds] = useState([]);
    const [selectedOrderIds, setSelectedOrderIds] = useState([]);
    const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
    const [shownGift, setShownGift] = useState();
    const [shownUser, setShownUser] = useState();
    const [shownOrder, setShownOrder] = useState();
    const [totalOrderNumber, setTotalOrderNumber] = useState();
    const [completeOrderNumber, setCompleteOrderNumber] = useState();
    const [totalSalesNumber, setTotalSalesNumber] = useState('102');
    const [totalAccountNumber, setTotalAccountNumber] = useState();
    const [totalWishlistNumber, setTotalWishlistNumber] = useState();
    const [handleOpen, handleClose] = useState();
    const [showLoading, setShowLoading] = useState(false);
    const [lastOrderList, setLastOrderList] = useState()
    const getOrderList = () => {
        // console.log(orderList,loading)
        if (orderList === undefined) {
            setLoading(true);
            // console.log("run")
        } else {
            setShowLoading(true)
            // setShownOrder(orderList)
        }

        fetch("http://"+ ip +":5000/api/admin/admin_return_all_orders", {
            method: "POST"
        }).then(res => res.json()).then(
            res => {
                console.log(res)
                setOrderList(res.orders_inf)
                setShownOrder(res.orders_inf)
            }
        ).then(() => {
            setLoading(false)
            setShowLoading(false)
        });
    }

    const getTotalWishlist = () => {
        axios.post("http://"+ ip +":5000/api/dashboard/show_wishlist_number")
            .then(r => setTotalWishlistNumber(r.data.message.split(" ")[2]))
            .catch(() => setTotalWishlistNumber("4"))

    }
    const getTotalAccount = () => {
        axios.post("http://"+ ip +":5000/api/dashboard/show_users_number")
            .then(r => setTotalAccountNumber(r.data.message.split(" ")[2]))
            .catch(() => setTotalAccountNumber("12"))

    }
    const getTotalOrders = () => {
        axios.post("http://"+ ip +":5000/api/dashboard/show_all_order_number")
            .then(r => setTotalOrderNumber(r.data.message.split(" ")[2]))
            .catch(() => setTotalOrderNumber("22"))

    }
    const getCompleteOrders = () => {
        axios.post("http://"+ ip +":5000/api/dashboard/show_completed_order_number")
            .then(r => setCompleteOrderNumber(r.data.message.split(" ")[2]))
            .catch(() => setCompleteOrderNumber("11"))


    }


    const getUsers = () => {
        if (users === undefined) {
            setLoading(true);
            // console.log("run")
        } else {
            setShowLoading(true)
            // setShownOrder(orderList)
        }
        fetch("http://"+ ip +":5000/api/admin/admin_return_all_users", {
            method: "POST"
        }).then(res => res.json()).then(
            res => {
                setUsers(res);
                setShownUser(res)
            }
        ).then(() => {
            setLoading(false)
            setShowLoading(false)
        });
    }
    const setGiftIds = (newVal) => {
        setSelectedCustomerIds(newVal)
    }

    // const setModal = (newstate) => {
    //
    //     setOpen(newstate)
    // }

    const changeItemCount = (id, giftName, giftPrice, giftDiscountPrice, giftDiscountState, giftDescription, giftCategory, sideCategory1, sideCategory2, coverUrl, showUrl1, showUrl2, showUrl3, showUrl4, sizeC) => {
        let newSize = []
        console.log(sizeC)
        for (const s in sizeC) {
            newSize.push({size: sizeC[s].size, size_stock: sizeC[s].stock})
        }

        console.log({
            id: id,
            gift_name: giftName,
            gift_price: giftPrice,
            gift_discount_price: giftDiscountPrice,
            gift_discount_state: giftDiscountState,
            gift_description: giftDescription,
            sizes: newSize,
            gift_category: giftCategory,
            gift_side_category1: sideCategory1,
            gift_side_category2: sideCategory2,
            gift_cover_url: coverUrl,
            gift_show_url1: showUrl1,
            gift_show_url2: showUrl2,
            gift_show_url3: showUrl3,
            gift_show_url4: showUrl4

        })
        fetch("http://"+ ip +":5000/api/admin/admin_edit_items", {
            method: 'put',
            body: JSON.stringify(
                {
                    id: id,
                    gift_name: giftName,
                    gift_price: giftPrice,
                    gift_discount_price: giftDiscountPrice,
                    gift_discount_state: giftDiscountState,
                    gift_description: giftDescription,
                    sizes: newSize,
                    gift_category: giftCategory,
                    gift_side_category1: sideCategory1,
                    gift_side_category2: sideCategory2,
                    gift_cover_url: coverUrl,
                    gift_show_url1: showUrl1,
                    gift_show_url2: showUrl2,
                    gift_show_url3: showUrl3,
                    gift_show_url4: showUrl4

                })
        }).then(r => getAllGifts()).catch(r => console.log(r));
    }
    const addItems = (giftName, giftPrice, giftDiscountPrice, giftDiscountState, giftDescription, giftCategory, sideCategory1, sideCategory2, coverUrl, showUrl1, showUrl2, showUrl3, showUrl4, sizeC) => {
        console.log({
            gift_name: giftName,
            gift_price: giftPrice,
            gift_discount_price: giftDiscountPrice,
            gift_discount_state: giftDiscountState,
            gift_description: giftDescription,
            sizes: sizeC,
            gift_category: giftCategory,
            gift_side_category1: sideCategory1,
            gift_side_category2: sideCategory2,
            gift_cover_url: coverUrl,
            gift_show_url1: showUrl1,
            gift_show_url2: showUrl2,
            gift_show_url3: showUrl3,
            gift_show_url4: showUrl4
        })
        fetch("http://"+ ip +":5000/api/admin/admin_add_items", {
            method: 'POST',
            body: JSON.stringify(
                {
                    gift_name: giftName,
                    gift_price: giftPrice,
                    gift_discount_price: giftDiscountPrice,
                    gift_discount_state: giftDiscountState,
                    gift_description: giftDescription,
                    sizes: sizeC,
                    gift_category: giftCategory,
                    gift_side_category1: sideCategory1,
                    gift_side_category2: sideCategory2,
                    gift_cover_url: coverUrl,
                    gift_show_url1: showUrl1,
                    gift_show_url2: showUrl2,
                    gift_show_url3: showUrl3,
                    gift_show_url4: showUrl4
                })
        }).then(() => getAllGifts());
    }

    const removeItems = (id) => {
        const ids = id.join()
        fetch(`http://"+ ${ip} +":5000/api/admin/admin_manage_items/delete/${ids}`, {
            method: 'DELETE'
        }).then(r => getAllGifts());
    }
    const getAllGifts = () => {
        if (gifts === undefined) {
            setLoading(true);
            // console.log("run")
        } else {
            setShowLoading(true)
            // setShownOrder(orderList)
        }
        fetch("http://"+ ip +":5000/api/admin/admin_return_all_gifts",
            {method: 'POST'}
        ).then(res => res.json()).then(
            res => {
                // console.log(res.gifts_inf)
                setGifts(res.gifts_inf)
                setShownGift(res.gifts_inf)
            }
        ).catch(e =>
            console.log(e))
            .then(() => {
                setShowLoading(false)
                setLoading(false)
            });
    }
    const orderCompleted = (id) => {
        setLoading(true);
        fetch("http://"+ ip +":5000/api/order/set_an_order_as_completed/" + id,
            {method: 'POST'}
        ).then(console.log).then(() => {
            setLoading(false)
        });
    }
    const orderDelivery = (id) => {
        setLoading(true);
        fetch("http://"+ ip +":5000/api/order/set_an_order_as_delivery/" + id,
            {method: 'POST'}
        ).then(console.log).then(() => {
            setLoading(false)
        });
    }

    const ChangeStatus = (currOpen) => {
        const states = ["waiting", "delivery", "completed"]
        const currOrder = orderList.find((item) => item.order_number === currOpen)
        const currStatus = currOrder.order_state
        if (states.indexOf(currStatus) === 1) {
            axios.post(`http://`+ ip +`:5000/api/order/set_an_order_as_completed/${currOpen}`).then(r => getOrderList()).catch(r => console.log(r))
        } else if (states.indexOf(currStatus) === 0) {
            axios.post(`http://`+ ip +`:5000/api/order/set_an_order_as_delivery/${currOpen}`).then(r => getOrderList()).catch(r => console.log(r))
        }
    }
    const getLastOrderList = () => {
        setLoading(true);
        axios.post("http://"+ ip +":5000/api/dashboard/return_new_orders").then(r => {
                // console.log(r.data.orders_inf)
                setLastOrderList(r.data.orders_inf)

            }
        ).catch(
            r => console.log(r.response)
        ).then(() =>
            setLoading(false)
        )
    }
    return (
        <AdminContext.Provider value={{
            orderList,
            getOrderList,
            loading,
            getUsers,
            users,
            getAllGifts,
            gifts,
            changeItemCount,
            addItems,
            removeItems,
            state,
            setState,
            orderCompleted,
            orderDelivery,
            setGiftIds,
            selectedCustomerIds,
            shownGift,
            setShownGift,
            selectedGiftIds,
            setSelectedGiftIds,
            setSelectedCustomerIds,
            shownUser,
            setShownUser,
            selectedOrderIds,
            shownOrder,
            setShownOrder,
            setSelectedOrderIds,
            totalOrderNumber,
            completeOrderNumber,
            totalAccountNumber,
            totalWishlistNumber,
            getTotalWishlist,
            getTotalAccount,
            getTotalOrders,
            getCompleteOrders,
            handleOpen,
            handleClose,
            ChangeStatus,
            showLoading,
            setLoading,
            getLastOrderList,
            lastOrderList
        }}>
            {children}
        </AdminContext.Provider>
    )//
}