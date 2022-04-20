import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

export default function BoxItem({id,gift_name,gift_price,gift_category,gift_cover_url}) {
    console.log(gift_cover_url,gift_cover_url.indexOf("https://"),gift_cover_url.indexOf("http://") )
    let navigate = useNavigate();
    const nav =()=> navigate("/cart/"+id);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column',sm:'column', md: 'row' },
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        fontWeight: 'bold',
        maxWidth:  {xs:800,sm:750,md:700},
        mx: 2,
        mt: 3
      }}
    >
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, sm:300,md: 250 },
        }}
        alt="pic"
        src= {gift_cover_url}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start'},
          m: 2,
          minWidth: { md: 350 },
          maxWidth:{md:400}
        }}
      >
        <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
            {gift_name}
        </Box>
        <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
          ${gift_price}
        </Box>
        <Box
          sx={{
            mt: 1.5,
            p: 0.5,
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
            borderRadius: '5px',
            color: 'primary.main',
            fontWeight: 'medium',
            display: 'flex',
            fontSize: 12,
            alignItems: 'center',
            '& svg': {
              fontSize: 21,
              mr: 0.5,
            },
          }}
        >
            {gift_category}
        </Box>
          <Button size="small" onClick={nav}>Learn More</Button>
      </Box>
    </Box>
  );
}
