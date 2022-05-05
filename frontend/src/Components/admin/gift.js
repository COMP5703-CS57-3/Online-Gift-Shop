import {Box, Container} from '@mui/material';
import {GiftListResults} from './gift/gift-list-results';
import GiftListToolbar from './gift/gift-list-toolbar';
import {useAdmin} from "../../tools/useAdmin";
import React, {useEffect} from "react";
import Loading from "../normal/Loading";

const Gifts = () => {

    const {shownGift} = useAdmin();
    const {getAllGifts} = useAdmin()
    const {loading} = useAdmin()

    useEffect(() => {
        if(!shownGift){
        getAllGifts();}
    }, [])
    if (loading||!shownGift) {
        return <Loading/>
    }
    if(shownGift) {
        return (
            <>

                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        py: 8
                    }}
                >
                    <Container maxWidth={false}>
                        <GiftListToolbar/>
                        <Box sx={{mt: 3}}>
                            {/*{console.log(shownGift)}*/}
                            <GiftListResults gift={shownGift}/>
                        </Box>
                    </Container>
                </Box>
            </>
        )
    }
    return console.log("can not get the gift information!")
}


export default Gifts;
