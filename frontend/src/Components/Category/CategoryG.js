import React,{useState} from "react";
import BoxItem from "./BoxItem";
import Box from '@mui/material/Box';

import {useGift} from "../../tools/useGift";
import {ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import Button from "@mui/material/Button";

export default function CategoryG(){
    const {gifts} = useGift();
    if(gifts===undefined){
        return(<h2 style={{margin: "auto", textAlign: "center"}}> No gifts</h2>)
    }
    return(
        // <Box style={{marginRight:"auto",maxWidth:1000}}>
        //     <Box sx={{
        //         display:"grid",
        //         gap:2,
        //         hight:400,
        //         gridTemplateColumns:"repeat(2,1fr)"
        //     }}>
        //         {gifts.map((gift,i)=>(
        //             <BoxItem key={i} {...gift}/>
        //         ))}
        //     </Box>
        //
        // </Box>
        <ImageList sx={{width:1000,height:800,}} cols={3} gap={50} >
            {gifts.map((gift) =>(
                    <Box
                      sx={{
                        // display: 'flex',
                        // flexDirection: { xs: 'column',sm:'column', md: 'row' },
                        alignItems: 'center',
                        bgcolor: 'background.paper',
                        // overflow: 'hidden',
                        borderRadius: '20px',
                        boxShadow: 1,
                        fontWeight: 'bold',
                        // maxWidth:  {xs:800,sm:750,md:700},
                      }}
                    >
                <ImageListItem key={gifts.gift_name}>
                    <Box
                        component="img"
                        sx={{
                            height: 350,
                            width: 350,
                            maxHeight: { xs: 400, md: 400 },
                            maxWidth: { xs: 350, sm:300,md: 250 },
                            }}
                            alt="pic"
                            src= {gift.gift_cover_url}
                            />
                    <ImageListItemBar
                        title={<a style={{ textAlign: "center"}}>{gift.gift_name}</a>}
                    subtitle={<a style={{ textAlign: "center"}}>{gift.gift_category},{gift.gift_side_category1},{gift.gift_side_category2}</a>}
                    position="below"
                    />
                    <ImageListItemBar
                        title={<a style={{ textAlign: "center"}}>${gift.gift_discount_price}</a>}
                        position="below"
                    />
                    <Button >Learn More</Button>
                </ImageListItem>
                        </Box>
            ))}

        </ImageList>
    )
}