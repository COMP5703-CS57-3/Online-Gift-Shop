import * as React from 'react';
import Box from '@mui/material/Box';
import {useAdmin} from "../../tools/useAdmin";
import OrderCard from "../admin/OrderCard";
import {LinearProgress} from "@material-ui/core";

export default function NetworkError(errorType="network error"){
    if (errorType === "no data"){
         return(
        <Box style={{margin: "auto", textAlign: "center"}}>
            <h2>There is no relevant data in the database</h2>
        </Box>
        );
    }
    return(
        <Box style={{margin: "auto", textAlign: "center"}}>
            <h2>due to {errorType}, The page is gone, Please try refreshing!</h2>
            <h3>In case of technical problems, please contact us, +8888888888</h3>
        </Box>
        );
}