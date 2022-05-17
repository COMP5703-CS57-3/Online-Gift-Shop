import React, {createContext, useContext, useState} from "react";
import giftdata from "../data/giftlist.json";
import {ip} from "../ip";

;

const GiftContext = createContext();
export const useGift = () => useContext(GiftContext);

export default function GiftProvider({children}) {
    const [gifts, setGifts] = useState();
    const [currentGift, setCurrentGift] = useState()
    const [sort, setSort] = useState("price-low-to-high");
    const [fakeGifts, setFakeGifts] = useState(giftdata);
    const [topBar, setTopBar] = useState("");
    const [loading,setLoading] = useState(true);
    const [currentSize,setCurrentSize] = useState();
    const [error,setError] = useState()
    const[sideBar,setSideBar] = useState("");

    const getGifts = ()=>{
        setError("normal")
        setLoading(true)
        fetch("http://" + ip + "/api/main_home_page").then(res => res.json()).then(
            res => {
                if (Array.isArray(res.gifts)) {
                    setGifts(res.gifts);

                } else {
                    setGifts([]);

                }
            }).then().then(()=>setLoading(false));
    }
    const homeCategory = ()=>{
        setError("normal")
        setLoading(true)
        fetch("http://" + ip + "/api/main_home_page").then(res => res.json()).then(
            res => {
                if (Array.isArray(res.gifts)) {
                    setGifts(res.gifts);
                } else {
                    setGifts([]);

                }
                setLoading(false);
            }).then();
    }
    const TopCategory = (top,sort)=> {
        setError("normal")
        setLoading(true)
        fetch("http://" + ip + "/api/main_home_page/"+top+", "+sort).then(res => res.json()).then(
            res => {
            if(Array.isArray(res.gifts)){
                setGifts(res.gifts);

            }else{
                setGifts([]);

            }
                setLoading(false)
            }).then();
    }
    const OnlySideCategory = (side,sort)=>{
        setError("normal")
        setLoading(true)

        fetch("http://" + ip + "/api/main_home_page/"+ side + ", " + sort).then(res=>res.json()).then(
            res=>{
            if(Array.isArray(res.gifts)){
                setGifts(res.gifts);
            }else{
                setGifts([]);

            }
            setLoading(false);
        }).then();
    }
    const SideCategory = (top,side,sort)=>{
        setError("normal")
        setLoading(true)
        fetch("http://" + ip + "/api/main_home_page/"+top + ", " +side+", "+ sort).then(res=>res.json()).then(
            res=>{
            if(Array.isArray(res.gifts)){
                setGifts(res.gifts);
            }else{
                setGifts([]);

            }
            setLoading(false)
        }).then();
    }
    const getSize = (id)=>{
        setError("normal")
        setLoading(true)
         fetch("http://" + ip + "/api/search/search_gift_id_return_size/"+id).then(res=>{
             let tt = res
             if(tt.status===404){
                 setError("no size")
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
         fetch("http://" + ip + "/api/search/search_gift_id/"+id).then(res=>res.json()
         ).then((res)=>{
             let tt = res
             if(tt.message==="this gift id does not exist"){
                 setError("no gift")
                 setLoading(false)
             }else{
                 setCurrentGift(res);
                getSize(id)
             }
         }).catch(setError)
    }
    return(
        <GiftContext.Provider value={{gifts,currentGift,getGifts,topBar,setTopBar,TopCategory,homeCategory,OnlySideCategory,SideCategory,getSize,currentSize,loading,error,setLoading,getGiftDetail,setSort,sort}}>
            {children}
        </GiftContext.Provider>
    )
}