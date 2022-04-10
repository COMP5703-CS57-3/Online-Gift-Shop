import * as React from 'react';
import Box from '@mui/material/Box';


export default function OrderCard({id,order_time,order_total}) {
  return (
    <Box>
        <h2>{id}</h2>
        <h2>{order_time}</h2>
        <h2>{order_total}</h2>
    </Box>
  );
}
