import React,{createContext,useState,useContext} from "react";
import Wishlist2 from "../data/Wishlist2.json"
import WishListItem from "../data/WIshListItems.json";


const WishContext = createContext();
export const useWish = ()=> useContext(WishContext);

export default function WishProvider({children}){
    const [wish,setWish] = useState(Wishlist2);
    const [product,setProduct] = useState(WishListItem);

    return(
        <WishContext.Provider value={{wish,product}}>
            {children}
        </WishContext.Provider>
    )
}