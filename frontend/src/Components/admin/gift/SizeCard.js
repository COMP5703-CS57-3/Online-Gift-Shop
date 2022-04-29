
import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import {useInput} from "../../../tools/useInput";
import {useNumberInput} from "../../../tools/useNumberInput";




export default function SizeCard({size,stock,changeP=f=>f}){
    const [countProps,resetCount] = useNumberInput(stock);
    return(
            <Box>
                <p>{size}</p>
                <TextField
                                {...countProps}
                              id="outlined-number"
                              label="Number"
                              type="number"
                              InputLabelProps={{
                                shrink: true,
                              }}
                          sx={{mt:2,maxWidth:150,maxHeight:25}}
                      />
                <Button onClick={()=>changeP(countProps.value)}>confirm</Button>
            </Box>//
    );
}//