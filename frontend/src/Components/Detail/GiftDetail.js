import React, {createContext, useEffect, useState} from "react";
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
import {Button, CssBaseline, Input, Select} from "@mui/material";
import Background from "../../picture/background.png";
import MenuItem from "@mui/material/MenuItem";
import {useWish} from "../../tools/useWish";
import {useGift} from "../../tools/useGift";
import Loading from "../normal/Loading";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import Container from "@mui/material/Container";

export default function GiftDetail() {
    const [quantity,setQuantity] = useState(1);
    const {wish} = useWish();
    const {addProduct} = useWish();
    const [targetWishList,setTargetWishlist] = useState(wish[0].wishlist_id);
    const {loading,getGiftDetail,currentSize,error} = useGift();
    let {id} = useParams();
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
      };
    const handleChange =(event)=>{
        setTargetWishlist(event.target.value);
    }

    let {currentGift} = useGift();
    const [sizeA,setSizeA] = useState();
    const handleSizeChange =(event)=>{
        setSizeA(event.target.value);
    }
    const addToWishList = ()=>{
        if(sizeA){
            addProduct(1,targetWishList,currentGift.id,sizeA);
        }else{
            setOpen(true);
        }
    }
    console.log(currentSize)
    useEffect(()=>{
        getGiftDetail(id)
    },[])
    if(loading||!currentSize){
        return <Loading/>
    }
    if(error&&error!=="normal"){
        return (
        <React.Fragment>
            <CssBaseline />
            <Box style={{width:"100%",height:1500,backgroundImage: "url(" + Background + ")",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                <Container  maxWidth="lg" style={{backgroundColor:"white"}} sx={{ boxShadow: 1,borderRadius: 2}}>
                    <Box sx={{height:'100vh'}}>
                    <Grid container alignItems="flex-start">
                        <Grid item xs={6} sx={{ px:2, py:2,boxShadow: 1,borderRadius: 2,height:"inherit"}}>
                            <Box
                                component="img"
                                sx={{
                                  mx:"auto",
                                  mt:3  ,
                                  height: '100%',
                                  width: "100%",
                                  // maxHeight: { xs: 233, md: 167 },
                                  // maxWidth: { xs: 350, sm:300,md: 250 },
                                }}
                                alt="gift image"
                                src={currentGift.gift_cover_url}
                            />
                        </Grid>
                        <Grid item xs={6} sx={{  px:2, py:2,boxShadow: 1,borderRadius: 2,height:1}}>
                            <Grid container alignItems="flex-start">
                                <Grid item xs={12}>
                                    <p>{currentGift.gift_category}</p>
                                </Grid>
                                <Grid item xs={12}>
                                     <h1 style={{textAlign:"left",letterSpacing:"2px",textTransform:"uppercase",fontSize:"32px"}}>{currentGift.gift_name}</h1>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                          <Box sx={{ my: 3}}>
                                            <Grid container alignItems="center">
                                              <Grid item xs={6}>
                                                <Typography gutterBottom variant="h4" component="div">
                                                  DISCOUNT:${currentGift.gift_discount_price}
                                                </Typography>
                                              </Grid>
                                              <Grid item xs={6}>
                                                <Typography gutterBottom variant="h6" component="div">
                                                 PRICE:${currentGift.gift_price}
                                                </Typography>
                                              </Grid>
                                            <Grid item xs={12} sx={{mt:3}}>
                                            <Typography color="text.secondary" variant="body2">
                                              test text .................................
                                                .......................
                                            </Typography>
                                                </Grid>
                                            </Grid>
                                          </Box>
                                          <Divider variant="middle" />
                                          <Grid container alignItems="center" spacing={3} sx={{mt:3}}>
                                              <Grid item xs={3}>
                                                  <Typography gutterBottom variant="body1">
                                                      Select size
                                                    </Typography>

                                              </Grid>
                                              <Grid item xs={8}>
                                                  <p>{currentSize.message}</p>
                                                  {/*<Select*/}
                                                  {/*      value={sizeA}*/}
                                                  {/*      label="SIZE"*/}
                                                  {/*      onChange={handleSizeChange}*/}
                                                  {/*  >{currentSize.map((size,i)=>(*/}
                                                  {/*      <MenuItem key={i} value={size.size}>*/}
                                                  {/*          Size: {size.size}     stock: {size.stock}*/}
                                                  {/*      </MenuItem>*/}
                                                  {/*  ))}*/}
                                                  {/*  </Select>*/}
                                              </Grid>
                                          </Grid>
                                        </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" spacing={3} sx={{mt:3}}>
                                              <Grid item xs={3}>
                                                  <Typography gutterBottom variant="body1">
                                                      Count
                                                    </Typography>
                                              </Grid>
                                        <Grid item xs={4}>
                                            <Input type="number" value={0}>
                                            </Input>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button variant="outlined" startIcon={<AddShoppingCartOutlinedIcon />}>
                                            Add to Cart
                                        </Button>
                                        </Grid>
                                        <Grid item xs={9} sx={{mt:5}}>
                                            Target Wishlist :
                                            <Select
                                            value={targetWishList}
                                            label="targetWishlist"
                                            onChange={handleChange}
                                            sx={{ml:3}}
                                        >{wish.map((wishlist,i)=>(
                                            <MenuItem key={i} value={wishlist.wishlist_id}>
                                                ID: {wishlist.wishlist_id}     list name: {wishlist.wishlist_name}
                                            </MenuItem>
                                        ))}
                                        </Select>
                                            </Grid>
                                        <Grid item xs={5}>
                                        <Button onClick={addToWishList}>
                                        Add to my wish list
                                        </Button>
                                            </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>


            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"no size"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Please select the size you want
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Ok!</Button>
            </DialogActions>
          </Dialog>
                        </Box>
           </Container>
            </Box>
        </React.Fragment>
    );
    }//
    return(
        <React.Fragment>
            <CssBaseline />
            <Box style={{width:"100%",height:1500,backgroundImage: "url(" + Background + ")",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                <Container  maxWidth="lg" style={{backgroundColor:"white"}} sx={{ boxShadow: 1,borderRadius: 2}}>
                    <Box sx={{height:'100vh'}}>
                    <Grid container alignItems="flex-start">
                        <Grid item xs={6} sx={{ px:2, py:2,boxShadow: 1,borderRadius: 2,height:"inherit"}}>
                            <Box
                                component="img"
                                sx={{
                                  mx:"auto",
                                  mt:3  ,
                                  height: '100%',
                                  width: "100%",
                                  // maxHeight: { xs: 233, md: 167 },
                                  // maxWidth: { xs: 350, sm:300,md: 250 },
                                }}
                                alt="gift image"
                                src={currentGift.gift_cover_url}
                            />
                        </Grid>
                        <Grid item xs={6} sx={{  px:2, py:2,boxShadow: 1,borderRadius: 2,height:1}}>
                            <Grid container alignItems="flex-start">
                                <Grid item xs={12}>
                                    <p>{currentGift.gift_category}</p>
                                </Grid>
                                <Grid item xs={12}>
                                     <h1 style={{textAlign:"left",letterSpacing:"2px",textTransform:"uppercase",fontSize:"32px"}}>{currentGift.gift_name}</h1>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                          <Box sx={{ my: 3}}>
                                            <Grid container alignItems="center">
                                              <Grid item xs={6}>
                                                <Typography gutterBottom variant="h4" component="div">
                                                  DISCOUNT:${currentGift.gift_discount_price}
                                                </Typography>
                                              </Grid>
                                              <Grid item xs={6}>
                                                <Typography gutterBottom variant="h6" component="div">
                                                 PRICE:${currentGift.gift_price}
                                                </Typography>
                                              </Grid>
                                            <Grid item xs={12} sx={{mt:3}}>
                                            <Typography color="text.secondary" variant="body2">
                                              test text .................................
                                                .......................
                                            </Typography>
                                                </Grid>
                                            </Grid>
                                          </Box>
                                          <Divider variant="middle" />
                                          <Grid container alignItems="center" spacing={3} sx={{mt:3}}>
                                              <Grid item xs={3}>
                                                  <Typography gutterBottom variant="body1">
                                                      Select size
                                                    </Typography>

                                              </Grid>
                                              <Grid item xs={8}>
                                                  <Select
                                                        value={sizeA}
                                                        label="SIZE"
                                                        onChange={handleSizeChange}
                                                    >{currentSize.map((size,i)=>(
                                                        <MenuItem key={i} value={size.size}>
                                                            Size: {size.size}     stock: {size.stock}
                                                        </MenuItem>
                                                    ))}
                                                    </Select>
                                              </Grid>
                                          </Grid>
                                        </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" spacing={3} sx={{mt:3}}>
                                              <Grid item xs={3}>
                                                  <Typography gutterBottom variant="body1">
                                                      Count
                                                    </Typography>
                                              </Grid>
                                        <Grid item xs={4}>
                                            <Input type="number" value={0}>
                                            </Input>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button variant="outlined" startIcon={<AddShoppingCartOutlinedIcon />}>
                                            Add to Cart
                                        </Button>
                                        </Grid>
                                        <Grid item xs={9} sx={{mt:5}}>
                                            Target Wishlist :
                                            <Select
                                            value={targetWishList}
                                            label="targetWishlist"
                                            onChange={handleChange}
                                            sx={{ml:3}}
                                        >{wish.map((wishlist,i)=>(
                                            <MenuItem key={i} value={wishlist.wishlist_id}>
                                                ID: {wishlist.wishlist_id}     list name: {wishlist.wishlist_name}
                                            </MenuItem>
                                        ))}
                                        </Select>
                                            </Grid>
                                        <Grid item xs={5}>
                                        <Button onClick={addToWishList}>
                                        Add to my wish list
                                        </Button>
                                            </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>


            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"no size"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Please select the size you want
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Ok!</Button>
            </DialogActions>
          </Dialog>
                        </Box>
           </Container>
            </Box>
        </React.Fragment>
    );
}