
import * as React from 'react';
import Box from '@mui/material/Box';
import {useAdmin} from "../../tools/useAdmin";
import OrderCard from "../admin/OrderCard";
import {LinearProgress} from "@material-ui/core";

export default function Test(){
    return(
        <Box style={{margin: "auto", textAlign: "center"}}>
            <h2>loading</h2>
            <LinearProgress />
            <h3>If the loading time is too long, there is an unknown error, please refresh the page</h3>
        </Box>
        );
}