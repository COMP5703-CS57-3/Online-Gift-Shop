import Typography from "@mui/material/Typography";
import {Link} from "react-router";
import * as React from "react";

export default function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://https://www.sydney.edu.au/">
                University of Sydney
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}