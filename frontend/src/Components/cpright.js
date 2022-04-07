import Typography from "@mui/material/Typography";

import * as React from "react";

export default function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
                University of Sydney

            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}