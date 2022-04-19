import {Box, Container} from '@mui/material';
import {CustomerListResults} from './admin/customer/customer-list-results';
import {CustomerListToolbar} from './admin/customer/customer-list-toolbar';
import {useAdmin} from "../tools/useAdmin";
import React, {useEffect} from "react";
import Loading from "./normal/Loading";


export function Customers() {
    const {shownUser} = useAdmin();
    const {getUsers} = useAdmin()
    const {loading} = useAdmin()
    useEffect(() => {
        if (!shownUser) {
            getUsers()
        }

    }, [])
    if (loading || !shownUser) {
        return <Loading/>
    }
    // console.log(shownUser)
    if (shownUser) {
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
    return console.log("can not get the user information!")
}

export default Customers;
