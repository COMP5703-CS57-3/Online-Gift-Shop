import {TextField} from "@material-ui/core";
import Grid from "@mui/material/Grid";
import {useInput} from "../../../tools/useInput";
import {useNumberInput} from "../../../tools/useNumberInput";
import * as React from "react";

export default function SizeBlock(props) {
    const [SizeProps, resetSize1] = useInput();
    const [SizeStock, resetStock] = useNumberInput();

    return (
        <>
            <Grid item xs={3}><TextField {...SizeProps} onChange={() => props.sendSize(props.id, SizeProps, SizeStock)}
                                         label="Size"/></Grid>
            <Grid item xs={3}><TextField {...SizeStock} onChange={() => props.sendSize(props.id, SizeProps, SizeStock)}
                                         label="Stock"/></Grid>
        </>

    )
}
