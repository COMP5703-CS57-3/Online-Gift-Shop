import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Button from "@mui/material/Button";
import {useAdmin} from "../../tools/useAdmin";


export default function GiftCardA({item}) {
  const {changeItemCount} = useAdmin();
  const buttonAction = ()=> {
  }
  return (
    <Box>
        <h2>{id}</h2>
        <h2>{item.gift_}</h2>
        <Button onClick={buttonAction}>
            edit
        </Button>
    </Box>
  );
}
