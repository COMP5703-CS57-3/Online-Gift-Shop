import * as React from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {ImageListItem, ImageListItemBar} from "@mui/material";

export default function GiftItem({
                                     id,
                                     gift_name,
                                     gift_price,
                                     gift_category,
                                     gift_side_category1,
                                     gift_side_category2,
                                     gift_discount_price,
                                     gift_cover_url
                                 }) {
    let navigate = useNavigate();
    const nav = () => navigate("/gift/" + id);
    // console.log(gift_cover_url)
    if (gift_cover_url.indexOf("https://") === -1 && gift_cover_url.indexOf("http://") === -1) {
        gift_cover_url = "https://file02.16sucai.com/d/file/2014/1009/d8e01af8af650c70cef05fc7e2dd11fb.jpg"
    }
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                // overflow: 'hidden',
                borderRadius: '20px',
                boxShadow: 1,
                fontWeight: 'bold',
                width: 280,
                maxHeight: 460
            }}
        >
            <ImageListItem>
                <Box
                    component="img"
                    sx={{
                        mx: 2,
                        mt: 3,
                        maxHeight: {xs: 250, md: 300},
                        maxWidth: {xs: 350, sm: 300, md: 250},
                        alignItems: 'center',
                        boxShadow: 2
                    }}
                    alt={gift_name}
                    src={`${gift_cover_url}?w=350&fit=crop&auto=format`}
                />
                <ImageListItemBar
                    title={<Box style={{textAlign: "center", fontSize: 18}}>{gift_name}</Box>}
                    subtitle={
                        <Box style={{textAlign: "center"}}>
                            <Box sx={{
                                fontSize: 14,
                                lineHeight: 2,
                                color: 'primary.main',
                            }}
                            >
                                {gift_category},{gift_side_category1},{gift_side_category2}
                            </Box>
                            <Box sx={{fontSize: 20, lineHeight: 1}}>Price: ${gift_price}</Box>
                            <Box sx={{fontSize: 20, lineHeight: 1}}>discount : ${gift_discount_price}</Box>
                        </Box>
                    }
                    position="below"
                />
                <Button onClick={nav}>Learn More</Button>
            </ImageListItem>
        </Box>
    );
}
