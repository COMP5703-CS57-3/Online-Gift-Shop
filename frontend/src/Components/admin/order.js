import {Box, Container} from '@mui/material';
import {OrderListResults} from './order/order-list-results';
import OrderListToolbar from './order/order-list-toolbar';
import {useAdmin} from "../../tools/useAdmin";
import React, {useEffect} from "react";
import Loading from "../normal/Loading";

const Orders = () => {

    const {shownOrder} = useAdmin();
    const {getOrderList} = useAdmin()
    const {loading} = useAdmin()
    useEffect(() => {
        if (shownOrder === undefined) {
            getOrderList();
        }

    }, [])
    if (loading||shownOrder===undefined) {
        return <Loading/>
    }
    // console.log(shownOrder)
    else {
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
                        <OrderListToolbar/>
                        <Box sx={{mt: 3}}>
                            {/*{console.log(shownGift)}*/}
                            <OrderListResults orders={shownOrder}/>
                        </Box>
                    </Container>
                </Box>
            </>
        )
    }
}


export default Orders;
