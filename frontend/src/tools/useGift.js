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
    const [currentGift,setCurrentGift] = useState()
    const [fakeGifts,setFakeGifts] = useState(giftdata);
    const [topBar,setTopBar] = useState("male");
    const [loading,setLoading] = useState(true);
    const [currentSize,setCurrentSize] = useState();
    const [error,setError] = useState()
    const[sideBar,setSideBar] = useState("");
    const getGifts = ()=>{
        setError("normal")
        setLoading(true)
        fetch("http://127.0.0.1:5000/main_home_page").then(res=>res.json()).then(
            res=>{
            setGifts(res.gifts);
        }).then(console.log).then(()=>setLoading(false));
    }
    const homeCategory = ()=>{
        setError("normal")
        setLoading(true)
        fetch("http://127.0.0.1:5000/main_home_page").then(res=>res.json()).then(
            res=>{
            setGifts(res.gifts);
            setLoading(false);
        }).then(console.log);
    }
    const maleCategory = (top,sort)=> {
        setError("normal")
        setLoading(true)
        fetch("http://127.0.0.1:5000/main_home_page/"+top+", "+sort).then(res => res.json()).then(
            res => {
                setGifts(res.gifts);
                setLoading(false)
            }).then(console.log);
    }
    const femaleCategory = (top,sort)=> {
        setError("normal")
        setLoading(true)
        fetch("http://127.0.0.1:5000/main_home_page/" + top + ", " + sort).then(res => res.json()).then(
            res => {
                setGifts(res.gifts);
                setLoading(false)
            }).then(console.log);
    }
    const  teenagerCategory = (top,sort)=> {
        setError("normal")
        setLoading(true)
        fetch("http://127.0.0.1:5000/main_home_page/" + top + ", "+ sort).then(res => res.json()).then(
            res => {
                setGifts(res.gifts);
                setLoading(false)
            }).then(console.log);
    }
    const agedCategory = (top,sort)=>{
        setError("normal")
        setLoading(true)
        fetch("http://127.0.0.1:5000/main_home_page/"+top + ", " + sort).then(res=>res.json()).then(
            res=>{
            setGifts(res.gifts);
            setLoading(false);
        }).then(console.log);
    }
    const SideCategory = (top,side,sort)=>{
        setError("normal")
        setLoading(true)
        fetch("http://127.0.0.1:5000/main_home_page/"+top + ", " +side+", "+ sort).then(res=>res.json()).then(
            res=>{
            setGifts(res.gifts);
            setLoading(false)
        }).then(console.log);
    }
    const getSize = (id)=>{
        setError("normal")
        setLoading(true)
         fetch("http://127.0.0.1:5000/search/search_gift_id_return_size/"+id).then(res=>{
             let tt = res
             if(tt.status===404){
                 setError(tt.status)
             }
             return res.json()
         }).then(res=>{
             setCurrentSize(res)
             setLoading(false)
         }).catch(setError)
    }
    const getGiftDetail = (id)=>{
        setError("normal")
        setLoading(true)
         fetch("http://127.0.0.1:5000/search/search_gift_id/"+id).then(res=>res.json()
         ).then((res)=>{
             setCurrentGift(res);
             getSize(id)
         }).catch(setError)
    }
    return(
        <GiftContext.Provider value={{gifts,currentGift,getGifts,topBar,setTopBar,maleCategory,homeCategory, femaleCategory, teenagerCategory,agedCategory,SideCategory,getSize,currentSize,loading,error,setLoading,getGiftDetail}}>
            {children}
        </GiftContext.Provider>
    )
}