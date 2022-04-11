import * as React from 'react';
import Box from '@mui/material/Box';
import {useAdmin} from "../../tools/useAdmin";
import OrderCard from "../admin/OrderCard";
import {LinearProgress} from "@material-ui/core";

export default function Loading(){

    return(
        <Box style={{margin: "auto", textAlign: "center"}}>
            <h2>loading</h2>
            <LinearProgress />
        </Box>
        );
}