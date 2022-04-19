import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

export default function WishListItem({wishlist_id,wishlist_name,first_name,last_name,state}) {
    let navi = useNavigate();
    const nav =()=> navi("/wish/wishlist/"+wishlist_id);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column',sm:'column', md: 'column' },
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
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F08%2F56%2F5b3f3dc42d6af_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651300940&t=a529fa900fe5c67aee5faf5658e0ea36"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'center'},
          m: 2,
          minWidth: { md: 350 },
          maxWidth:{md:400}
        }}
      >
        <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
            {wishlist_name}
        </Box>
        <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
          {first_name}  {last_name}
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
            {state}
        </Box>
          <Button size="small" onClick={nav}>Learn More</Button>
      </Box>
    </Box>
  );
}
