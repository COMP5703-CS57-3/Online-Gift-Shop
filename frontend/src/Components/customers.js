import {Box, Container} from '@mui/material';
import {CustomerListResults} from './admin/customer/customer-list-results';
import {CustomerListToolbar} from './admin/customer/customer-list-toolbar';


import {v4 as uuid} from 'uuid';
import {useAdmin} from "../tools/useAdmin";
import React, {useEffect} from "react";
import Loading from "./normal/Loading";




export function Customers() {
    const {shownUser} = useAdmin();
    const {getUsers} = useAdmin()
    const {loading} = useAdmin()
    useEffect(() => {
        getUsers()
    }, [])
    if (loading) {
        return <Loading/>
    }
    // console.log(shownUser)
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
                    <CustomerListToolbar/>
                    <Box sx={{mt: 3}}>
                        <CustomerListResults users={shownUser}/>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default Customers;
