import React,{createContext,useState,useContext} from "react";
import giftdata from "../data/giftlist.json";
import {v4} from "uuid";

const GiftContext = createContext();
export const useGift = ()=> useContext(GiftContext);

export default function GiftProvider({children}){
    const [gifts,setGifts] = useState(giftdata);

    return(
        <GiftContext.Provider value={{gifts}}>
            {children}
        </GiftContext.Provider>
    )
}