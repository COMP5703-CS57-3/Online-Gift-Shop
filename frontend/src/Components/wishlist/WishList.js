import React, {useEffect, useState} from "react";
import GiftProvider from "../../tools/useGift";



export default function WishList(){
    return(
            <GiftProvider>
                <CategoryG/>
            </GiftProvider>
    );
}