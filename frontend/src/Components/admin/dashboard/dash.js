import {useAdmin} from "../../../tools/useAdmin";
import {Box, Container, Grid} from "@mui/material";
import {ShowCard} from "./show-card";
import React, {useEffect} from "react";
import {LatestOrders} from "./latest-orders"
import FactCheckIcon from '@mui/icons-material/FactCheck';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Loading from "../../normal/Loading";

export default function DashItem() {
    const {getTotalAccount, totalAccountNumber} = useAdmin()
    const {getTotalOrders, totalOrderNumber} = useAdmin()
    const {getCompleteOrders, completeOrderNumber} = useAdmin()
    const {getTotalWishlist, totalWishlistNumber} = useAdmin()
    const {lastOrderList, getLastOrderList} = useAdmin()
    const {loading} = useAdmin()
    useEffect(() => {
        if(lastOrderList===undefined){getLastOrderList();}

    }, [])
    if (loading) {
        return <Loading/>
    }
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
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid
                            item
                            lg={3}
                            sm={3}
                            xl={3}
                            xs={3}
                        >
                            <ShowCard getNumberFunc={getTotalAccount} Number={totalAccountNumber}
                                      Title={"TOTAL ACCOUNT"} icon={<SupervisedUserCircleIcon/>}/>
                        </Grid>
                        <Grid
                            item
                            lg={3}
                            sm={3}
                            xl={3}
                            xs={3}
                        >
                            <ShowCard getNumberFunc={getTotalWishlist} Number={totalWishlistNumber}
                                      Title={"TOTAL WISHLIST"} icon={<FactCheckIcon/>}/>
                        </Grid>
                        <Grid
                            item
                            lg={3}
                            sm={3}
                            xl={3}
                            xs={3}
                        >
                            <ShowCard getNumberFunc={getTotalOrders} Number={totalOrderNumber} Title={"TOTAL ORDER"}
                                      icon={<LocalShippingIcon/>}/>
                        </Grid>
                        <Grid
                            item
                            lg={3}
                            sm={3}
                            xl={3}
                            xs={3}
                        >
                            <ShowCard getNumberFunc={getCompleteOrders} Number={completeOrderNumber}
                                      Title={"ORDER COMPLETED"} icon={<EventAvailableIcon/>}/>
                        </Grid>
                        {/*<Grid*/}
                        {/*    item*/}
                        {/*    lg={4}*/}
                        {/*    md={6}*/}
                        {/*    xl={3}*/}
                        {/*    xs={12}*/}
                        {/*>*/}
                        {/*    <LatestOrders orders={lastOrderList}/>*/}
                        {/*</Grid>*/}
                        <Grid
                            item
                            lg={8}
                            md={12}
                            xl={9}
                            xs={12}
                        >
                            <LatestOrders orders={lastOrderList}/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>)
}