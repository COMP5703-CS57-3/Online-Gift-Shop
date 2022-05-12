import {TextField} from "@material-ui/core";
import Grid from "@mui/material/Grid";
import * as React from "react";
import {useState} from "react";

export default function SizeBlock(props) {
    const [SizeProps, setSize] = useState();
    const [SizeStock, setStock] = useState();

    return (
        <>
            <Grid item xs={2}><span>&nbsp;</span></Grid>
            <Grid item xs={4}><TextField {...SizeProps} onChange={(e) => {
                setSize(e.target.value);
                props.sendSize(props.Sid, e.target.value, SizeStock)
            }}
                                         label="Size"/></Grid>
            <Grid item xs={4}><TextField {...SizeStock} onChange={(e) => {
                setStock(e.target.value);
                props.sendSize(props.Sid, SizeProps, e.target.value)
            }}
                                         label="Stock"/></Grid>
            <Grid item xs={2}><span>&nbsp;</span></Grid>
        </>

    )
}
