import React, {useEffect} from "react";
import {useAdmin} from "../../tools/useAdmin";
import Loading from "../normal/Loading";
import GiftCardA from "./GiftCardA";
import {FixedSizeList} from "react-window";
import {useNavigate} from "react-router-dom";


export default function AdminGiftList() {

    const {gifts} = useAdmin();
    const {getAllGifts} = useAdmin()
    const {loading} = useAdmin()
    useEffect(() => {
        getAllGifts();
    }, [])
    if (loading) {
        return <Loading/>
    }
    const giftlist = gifts.map((gift, index) => (
        {
            gift: gift,
            index: index
        }
    ))
    const render = ({index, style}) => (
        <GiftCardA style={style} item={giftlist[index].gift}/>
    )

    return (

        <FixedSizeList
            width={window.innerHeight}
            height={window.innerWidth}
            itemCount={giftlist.length}
            itemSize={300}
        >
            {render}
        </FixedSizeList>

    )
}