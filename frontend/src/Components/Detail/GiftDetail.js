import React, {createContext, useState} from "react";
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {useParams} from "react-router-dom";
import {useCart} from "../../tools/useCart";
import {alpha} from "@mui/material/styles";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import {Button, Input, Select} from "@mui/material";
import Background from "../../picture/background.png";
import MenuItem from "@mui/material/MenuItem";
import {useWish} from "../../tools/useWish";
import {useGift} from "../../tools/useGift";

export default function GiftDetail() {
    const [quantity,setQuantity] = useState(1);
    const {wish} = useWish();
    const {addProduct} = useWish();
    const [targetWishList,setTargetWishlist] = useState(wish[0].wishlist_id);
    let {id} = useParams();
    const handleChange =(event)=>{
        setTargetWishlist(event.target.value);
    }

    let {gifts} = useGift();
    let foundGift = gifts.find(
       item => item.id == id
    );
    const [sizeA,setSizeA] = useState("S");
    const handleSizeChange =(event)=>{
        setSizeA(event.target.value);
    }
    const addToWishList = ()=>{
        addProduct(1,targetWishList,foundGift.id,"1");
    }
    return(
        <Box width="100%" height="100%">
            <Box width="80%" sx={{
            mx:"auto",
            }}>
             <Box width='45%'
                 sx={{
                float:"left",
                padding: 1
            }}>
                <Box
                    component="img"
                    sx={{
                      mx:"auto",
                      height: '100%',
                      width: "100%",
                      // maxHeight: { xs: 233, md: 167 },
                      // maxWidth: { xs: 350, sm:300,md: 250 },
                    }}
                    alt="pic"
                    src={foundGift.gift_cover_url}
                />
            </Box>
            <Box width='45%'
                 height='100%'
                 sx={{
                float:"right",
                padding:1
            }}>
                <Box>
                    <p>{foundGift.gift_category}</p>
                </Box>
                <Box>
                    <h1 style={{textAlign:"left",letterSpacing:"2px",textTransform:"uppercase",fontSize:"32px"}}>{foundGift.gift_name}</h1>
                </Box>
                <Box>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                          <Box sx={{ my: 3, mx: 2 }}>
                            <Grid container alignItems="center">
                              <Grid item xs>
                                <Typography gutterBottom variant="h4" component="div">
                                  DISCOUNT:${foundGift.gift_discount_price}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography gutterBottom variant="h6" component="div">
                                 PRICE:${foundGift.gift_price}
                                </Typography>
                              </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                              test text .................................
                                .......................
                            </Typography>
                          </Box>
                          <Divider variant="middle" />
                          <Box sx={{ m: 2 }}>
                            <Typography gutterBottom variant="body1">
                              Select size
                            </Typography>
                            <Stack direction="row" spacing={1}>
                              <Chip onChange={handleSizeChange} label="Small" />
                              <Chip onChange={handleSizeChange} color="primary" label="Medium" />
                              <Chip onChange={handleSizeChange} label="Large" />
                            </Stack>
                          </Box>
                        </Box>
                </Box>
                <Box component="form" sx={{ mt: 3, ml: 1, mb: 1 }}>
                    <Box  sx={{ mt: 3, ml: 1, mb: 1 }}>
                        <Input type="number" value={0}>
                        </Input>
                    </Box>
                    <Box>
                        <Button variant="outlined" startIcon={<AddShoppingCartOutlinedIcon />}>
                            Add to Cart
                        </Button>
                    </Box>
                    <Box>
                            <Select
                                value={targetWishList}
                                label="targetWishlist"
                                onChange={handleChange}
                            >{wish.map((wishlist,i)=>(
                                <MenuItem key={i} value={wishlist.wishlist_id}>
                                    ID: {wishlist.wishlist_id}     list name: {wishlist.wishlist_name}
                                </MenuItem>
                            ))}
                            </Select>
                            <Button onClick={addToWishList}>
                            Add to my wish list
                            </Button>
                    </Box>

                </Box>
            </Box>
        </Box>
        </Box>

    );
}