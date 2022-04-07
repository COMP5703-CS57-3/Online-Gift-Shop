import React,{createContext,useState,useContext} from "react";
import giftdata from "../data/giftlist.json";
import {v4} from "uuid";

const GiftContext = createContext();
export const useGift = ()=> useContext(GiftContext);

export default function GiftProvider({children}){
    const [gifts,setGifts] = useState(giftdata);
    const multiCategory = (top,side,side2,sort)=>{
        console.log("http://127.0.0.1:5000/main_home_page/"+top+", "+side+", "+side2+", "+sort)
        fetch("http://127.0.0.1:5000/main_home_page/"+top+", "+side+", "+side2+", "+sort).then(res=>res.json()).then(
            res=>{
            setGifts(res.gifts);
        }).then(console.log);
    }

    return(
        <GiftContext.Provider value={{gifts,multiCategory}}>
            {children}
        </GiftContext.Provider>
    )
}