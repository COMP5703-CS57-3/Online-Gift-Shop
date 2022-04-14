import React, {createContext, useState, useContext, useEffect} from "react";
import giftdata from "../data/giftlist.json";
import {v4} from "uuid";
import Background from "../picture/background.png";
import AccountMenu from "../Components/homepage/Header";
import MainBody from "../Components/homepage/MainBody";
import FastDial from "../Components/FastDial";
import Loading from "../Components/normal/Loading";

const GiftContext = createContext();
export const useGift = ()=> useContext(GiftContext);

export default function GiftProvider({children}){
    const [gifts,setGifts] = useState();
    const [fakeGifts,setFakeGifts] = useState(giftdata);
    const [topBar,setTopBar] = useState("male");
    const [loading,setLoading] = useState(true);
    const [currentSize,setCurrentSize] = useState([]);
    useEffect(()=>{
        // if(wish&&wish.owner_id === login) return;
        setLoading(true)
        fetch("http://127.0.0.1:5000/main_home_page").then(res=>res.json()).then(
            res=>{
            setGifts(res.gifts);
        }).then(console.log).then(()=>setLoading(false));
        //json store in attribute wishlists_inf, please use wish.wishlists_inf represent array
    },[])
    const[sideBar,setSideBar] = useState("");
        const homeCategory = ()=>{
        console.log("http://127.0.0.1:5000/main_home_page")
        fetch("http://127.0.0.1:5000/main_home_page").then(res=>res.json()).then(
            res=>{
            setGifts(res.gifts);
        }).then(console.log);
    }
    const maleCategory = (top,sort)=> {
        console.log("http://127.0.0.1:5000/main_home_page/"+top+", "+sort)
        fetch("http://127.0.0.1:5000/main_home_page/"+top+", "+sort).then(res => res.json()).then(
            res => {
                setGifts(res.gifts);
            }).then(console.log);
    }
            const femaleCategory = (top,sort)=> {
                console.log("http://127.0.0.1:5000/main_home_page/" + top + ", " + sort)
                fetch("http://127.0.0.1:5000/main_home_page/" + top + ", " + sort).then(res => res.json()).then(
                    res => {
                        setGifts(res.gifts);
                    }).then(console.log);
            }
            const  teenagerCategory = (top,sort)=> {
                console.log("http://127.0.0.1:5000/main_home_page/" + top + ", "+ sort)
                fetch("http://127.0.0.1:5000/main_home_page/" + top + ", "+ sort).then(res => res.json()).then(
                    res => {
                        setGifts(res.gifts);
                    }).then(console.log);
            }
            const agedCategory = (top,sort)=>{
        console.log("http://127.0.0.1:5000/main_home_page/"+top + ", " + sort)
        fetch("http://127.0.0.1:5000/main_home_page/"+top + ", " + sort).then(res=>res.json()).then(
            res=>{
            setGifts(res.gifts);
        }).then(console.log);
    }
    const SideCategory = (top,side,sort)=>{
        fetch("http://127.0.0.1:5000/main_home_page/"+top + ", " +side+", "+ sort).then(res=>res.json()).then(
            res=>{
            setGifts(res.gifts);
        }).then(console.log);
    }
    const getSize = (id)=>{
         fetch("http://127.0.0.1:5000/search/search_gift_id_return_size/"+id).then(res=>res.json()).then(
            res=>{
            setCurrentSize(res);
        }).then(console.log);
    }
    if(gifts!==undefined){
        return(
        <GiftContext.Provider value={{gifts,topBar,setTopBar,maleCategory,homeCategory, femaleCategory, teenagerCategory,agedCategory,SideCategory,getSize,currentSize,loading}}>
            {children}
        </GiftContext.Provider>
    )}
    if(loading) {
        return (
            <Loading/>
        )
    }
    return(
        <GiftContext.Provider value={{gifts,topBar,setTopBar,maleCategory,homeCategory, femaleCategory, teenagerCategory,agedCategory,SideCategory,getSize,currentSize,loading}}>
            {children}
        </GiftContext.Provider>
    )
}