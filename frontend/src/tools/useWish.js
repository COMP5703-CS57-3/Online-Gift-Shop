import React,{createContext,useState,useContext} from "react";
import Wishlist2 from "../data/Wishlist2.json"
import WishListItem from "../data/WIshListItems.json";


const WishContext = createContext();
export const useWish = ()=> useContext(WishContext);

export default function WishProvider({children}){
    const [wish,setWish] = useState(Wishlist2);
    const [product,setProduct] = useState(WishListItem);
    const newWish = (title)=>{
        const newWishlist = [
            ...wish,
            {
                "id": 1,
                  "wishlist_id": "122323124",
                  "owner_id": 1234,
                  "wishlist_name": title,
                  "wishlist_description": "wishlist description 2",
                  "first_name": "first_name2",
                  "last_name": "last_name2",
                  "address": "address2",
                  "phone": "phone2",
                  "postcode": "1234",
                  "state": "processing",
                  "payer_fname": "none"
            }
        ]
        setWish(newWishlist);
    }

    return(
        <WishContext.Provider value={{wish,product,newWish}}>
            {children}
        </WishContext.Provider>
    )
}