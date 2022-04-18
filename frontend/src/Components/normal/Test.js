
import * as React from 'react';
import Box from '@mui/material/Box';
import {useAdmin} from "../../tools/useAdmin";
import OrderCard from "../admin/OrderCard";
import {LinearProgress} from "@material-ui/core";
import cookie from "react-cookies";

export default function Test(){
    let login = cookie.load("123");
    login = cookie.load("123");
    console.log(login)
    if (login){
        console.log(123)
    }
    return(
        <Box style={{margin: "auto", textAlign: "center"}}>
            <h2>loading</h2>
            <LinearProgress />
            <h3>If the loading time is too long, there is an unknown error, please refresh the page</h3>
        </Box>
        );
}