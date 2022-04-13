import {Box, Container} from '@mui/material';
import {GiftListResults} from './admin/gift/gift-list-results';
import GiftListToolbar from './admin/gift/gift-list-toolbar';
import {useAdmin} from "../tools/useAdmin";
import React, {useEffect} from "react";
import Loading from "./normal/Loading";

const Gifts = () => {

    const {shownGift} = useAdmin();
    const {getAllGifts} = useAdmin()
    const {loading} = useAdmin()

    useEffect(() => {
        getAllGifts();
    }, [])
    if (loading) {
        return <Loading/>
    }
    // console.log(shownGift)
    // console.log(gifts)
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
                        <GiftListResults gift={shownGift}/>
                    </Box>
                </Container>
            </Box>
        </>
    )
}


export default Gifts;
