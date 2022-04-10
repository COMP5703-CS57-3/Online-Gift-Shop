import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Button from "@mui/material/Button";
import {useAdmin} from "../../tools/useAdmin";
import {Stack} from "@material-ui/core";
import {useNavigate} from "react-router-dom";


export default function GiftCardA({style,item}) {
  const {changeItemCount} = useAdmin();
  const {removeItems} = useAdmin();
  const buttonAction = ()=> {
      removeItems(item.id);
  }
  let navigate = useNavigate();
  const nav =()=> navigate("/admin/EditItemAdmin/"+item.id);
  const buttonAction2 = ()=> {
    nav();
  }
  if(item.sizes===undefined){
      return (
    <div style={style}>
        <h2>{item.id}</h2>
        <h2>{item.gift_name}</h2>

        {/*{item.sizes.map((size,index)=>(*/}
        {/*        <p key={index}>{size.stock}</p>*/}
        {/*))}*/}
        <Button onClick={buttonAction}>
            remove
        </Button>
    </div>
  );
  }
  return (
    <Box style={style} sx={{display:"block"}}>
        <h2>{item.id}</h2>
        <h2>{item.gift_name}</h2>
        <Stack direction="row" spacing={2}
  alignItems="center">
            {item.sizes.map((size,index)=>(
            <p key={index}>{size.stock}</p>
            ))}
        </Stack>
        <Button onClick={buttonAction}>
            remove
        </Button>
        <Button onClick={buttonAction2}>
            edit
        </Button>
    </Box>
  );
}
