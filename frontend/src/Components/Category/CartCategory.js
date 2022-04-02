import giftdata from "../../data/giftlist.json";
import React, {useEffect, useState} from "react";
import CategoryG from "./CategoryG";
import GiftProvider from "../../tools/useGift";



export default function CartCategory({login="test"}){
    return(
            <GiftProvider>
                <CategoryG/>
            </GiftProvider>
    );
}