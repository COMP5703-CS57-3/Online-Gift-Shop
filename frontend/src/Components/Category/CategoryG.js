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
        <ImageList sx={{width:1000,height:850,}} cols={3} gap={50} >
            {gifts.map((gift,i) =>(
                    <Box
                        key={i}
                      sx={{
                        bgcolor: 'background.paper',
                        // overflow: 'hidden',
                        borderRadius: '20px',
                        boxShadow: 1,
                        fontWeight: 'bold',
                          width:280
                      }}
                    >
                <ImageListItem >
                    <Box
                        component="img"
                        sx={{
                            mx: 2,
                            mt: 3,
                            height: 350,
                            width: 350,
                            maxHeight: { xs: 250, md: 300 },
                            maxWidth: { xs: 350, sm:300,md: 250 },
                            alignItems: 'center',
                             boxShadow: 2
                            }}
                            alt="pic"
                            src= {gift.gift_cover_url}
                            />
                    <ImageListItemBar
                        title={<Box style={{ textAlign: "center"}}>{gift.gift_name}</Box>}
                        subtitle={
                                <Box style={{ textAlign: "center"}}>
                                    <p>{gift.gift_category},{gift.gift_side_category1},{gift.gift_side_category2}</p>
                                    <Box sx={{fontSize:25}}>${gift.gift_discount_price}</Box>
                                </Box>
                        }
                        position="below"
                    />
                    {/*<ImageListItemBar*/}
                    {/*    title={<Box style={{ textAlign: "center"}}>${gift.gift_discount_price}</Box>}*/}
                    {/*    position="below"*/}
                    {/*/>*/}
                    <Button >Learn More</Button>
                </ImageListItem>
                        </Box>
            ))}

        </ImageList>
    )
}