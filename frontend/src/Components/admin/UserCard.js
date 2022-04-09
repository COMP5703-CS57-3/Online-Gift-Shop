import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Button from "@mui/material/Button";


export default function UserCard({id,user_name,user_email}) {
  return (
    <Box>
        <h2>{id}</h2>
        <h2>{user_email}</h2>
        <h2>{user_name}</h2>
    </Box>
  );
}
