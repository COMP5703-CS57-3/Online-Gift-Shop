import React, {createContext} from "react";
import Box from "@mui/material/Box";
import {useParams} from "react-router-dom";
import {alpha} from "@mui/material/styles";


export default function Detail({id,name,price,category}) {
    let params = useParams();
    console.log(params);
    return(
        <h1>1234</h1>
    );
}