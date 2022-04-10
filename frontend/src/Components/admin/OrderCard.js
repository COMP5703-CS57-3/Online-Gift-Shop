import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Button from "@mui/material/Button";
import {useAdmin} from "../../tools/useAdmin";
import {useState} from "react";


export default function OrderCard({id,order_time,order_total,order_state,order_number}) {
    const [state,setState]=useState(order_state)
    const {orderCompleted,orderDelivery}=useAdmin()
    const stateAction =()=>{
        console.log(state)
        if (state==="waiting"){
            orderDelivery(order_number)
            setState("delivery")
        }
        if(state==="delivery"){
            orderCompleted(order_number)
            setState("completed")
        }
    }
  return (
    <Box>
        <h2>{id}</h2>
        <h2>{order_time}</h2>
        <h2>{order_total}</h2>
        <h2>{order_number}</h2>
        <Button onClick={stateAction}>
            change
        </Button>
    </Box>
  );
}
