import giftdata from "../../data/giftlist.json";
import React, {useEffect, useState} from "react";
import GiftProvider from "../../tools/useGift";
import Button from "@mui/material/Button";
import BoxItem from "../Category/BoxItem";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import {useWish} from "../../tools/useWish";
import {useInput} from "../../tools/useInput";
import {alpha} from "@mui/material/styles";
import {useNavigate} from "react-router-dom";
import Stack from "@mui/material/Stack";
import {useOrder} from "../../tools/useOrder";
import {Grid} from "@material-ui/core";



export default function ProductForShow({products_id,product_name,product_cover,size,price,count,detail}){
    const {currentProduct,setCurrentProduct} =useOrder();
    const [c,setC] = useState()
    const [countProps,resetCount] = useInput(1);
    const remove = ()=>{
        setCurrentProduct(currentProduct.filter(pro=>{
            const pr= (pro.products_id+pro.size)!==(products_id+size);
            return pr;
        }))
        console.log(currentProduct);
    }////
    let navigate = useNavigate();
    const nav =()=> navigate("/cart/"+products_id);
    const change =()=>{
        const deleteOld = currentProduct.filter(pro=>(pro.products_id+pro.size)!==(products_id+size))
        const newProduct = {
            products_id: products_id,
            product_name:product_name,
            product_cover:product_cover,
            size:size,
            count: parseInt(countProps.value),
            price:price

        }
        deleteOld.push(newProduct)
        setCurrentProduct(deleteOld)
    }
    console.log(currentProduct)
    // if(count<=0){
    //     return null;
    // }
    return(
        <Grid item xs={6}>
            <Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column',sm:'column', md: 'row' },
                    alignItems: 'center',
                    bgcolor: 'background.paper',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    boxShadow: 3,
                    fontWeight: 'bold',
                    maxWidth:  {xs:800,sm:750,md:700},
                    minWidth:{xs:350,sm:490},
                    mx: 2,
                    mt: 3
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 233,
                      width: 350,
                      maxHeight: { xs: 233, md: 200 },
                      maxWidth: { xs: 350, sm:300,md: 250 },
                    }}
                    alt="pic"
                    src={product_cover}
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
                      <Stack direction="column"
                          justifyContent="space-around"
                          alignItems="flex-start">

                      <Stack direction="row"
                             justifyContent="space-between"
                             alignItems="center"
                             spacing={2}
                      sx={{md:2}}>
                          <Box component="span" sx={{ fontSize: 16, mt: 0.5 }}>
                            {product_name}
                        </Box>
                        <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
                            ${price}
                        </Box>
                      </Stack>
                          <Stack direction="row"
                             justifyContent="flex-start"
                             alignItems="center"
                             spacing={6}
                      sx={{mt:1}}>
                          <Box
                      sx={{
                        mt: 0.5,
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
                        Size:{size}
                    </Box>
                               <Box
                      sx={{
                        mt: 0.5,
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
                        Count:{count}
                    </Box>
                          <Button size="small" onClick={nav}>Learn More</Button>
                      </Stack>
                      <TextField
                                {...countProps}
                              id="outlined-number"
                              label="Number"
                              type="number"
                              InputLabelProps={{
                                shrink: true,
                              }}
                          sx={{mt:2,maxWidth:150,maxHeight:25}}
                      />
                       <Stack direction="row"
                             justifyContent="flex-start"
                             alignItems="center"
                             spacing={2}
                       sx={{mt:4}}>
                          <Button onClick={remove}> remove the gift</Button>
                          <Button onClick={change}> change count</Button>
                      </Stack>
                      </Stack>
                  </Box>
                </Box>
            </Box>
        </Grid>
    );
}//