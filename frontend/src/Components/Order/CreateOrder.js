import WishProvider, {useWish} from "../../tools/useWish";
import React, {useEffect, useRef, useState} from "react";
import {useInput} from "../../tools/useInput";
import Box from "@mui/material/Box";
import {Button, CssBaseline, FormControl, Select, TextField} from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import countries from "../../data/CountrySelect";
import states from "../../data/ProvinceSelect";
import Background from "../../picture/background.png";
import {useOrder} from "../../tools/useOrder";
import {useParams} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import {Grid} from "@material-ui/core";
import ProductDetail from "../Detail/ProductDetail";
import ProductForShow from "../Detail/ProductForShow";
import Loading from "../normal/Loading";

export default function CreateOrder() {
    const {id} = useParams();

    const [address2,setAddress2] = useState(states[0].label);
    const [address1,setAddress1] = useState(countries[12].label.toString());
    const [timeProps,resetTitle] = useInput("123");
    const [firstnameProps,resetfirst] = useInput("123");
    const [lastnameProps,resetLast] = useInput("123");
    const [address3Props,resetAddress3] = useInput("123");
    const [phoneProps,resetPhone] =useInput("123");
    const [postcodeProps,resetPostcode] = useInput("123");
    const {createOrder} = useOrder();
    const [targetProduct,setTargetProduct] = useState();
    const {currentProduct,setCurrentProduct} =useOrder();
    const {totalPrice,setTotal} = useOrder()
    const summ =()=>{
        let sum =0;
        currentProduct.map((gift,i)=>{
            sum = gift.price*gift.count + sum;
        })
        return sum
    }
    if(currentProduct){
        setTotal(summ());
    }
    const [detail,setDetail] = useState();
    const {loading,setLoading} = useOrder();
    useEffect(()=>{
        setLoading(true);
        fetch("http://127.0.0.1:5000/wishlist/search", {
            method: 'POST',
            body: JSON.stringify({
                    wishlist_id : id
                })
        }).then(res=>res.json()).then(res=>{
            setDetail(res)
            setCurrentProduct(res.products)
            setLoading(false)});
    },[id]);
    const submit = e=>{
        e.preventDefault();
        const address = address1.toString()+" "+address2+" "+address3Props.value;
        currentProduct.
        createOrder(id,timeProps.value,firstnameProps.value,lastnameProps.value,phoneProps.value,address,postcodeProps.value,totalPrice,currentProduct);
        // resetTitle();
        // resetAddress();
        // resetDescription();
        // resetfirst();
        // resetLast();
        // resetPhone();
        // resetPostcode();
    }
    if(loading){
        return <Loading/>
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Box style={{width:"100%",height:1500,backgroundImage: "url(" + Background + ")",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                <Container  maxWidth="lg" style={{backgroundColor:"white"}} sx={{ boxShadow: 1,borderRadius: 2}}>
                <Box sx={{height:'100vh'}}>
                    <Box component="form" onSubmit={submit}>
                        <h2 style={{marginLeft:0,marginRight:0,textAlign:"center"}}> Wish list creation form</h2>
                        <Stack spacing={4} direction="row" alignItems="center" justifyContent="space-between" variant="outlined">
                            <TextField {...timeProps} label="title"/>
                            <TextField {...firstnameProps}  label="firstname"/>
                            <TextField {...lastnameProps} label="lastname"/>
                        </Stack>
                        <Stack spacing={2} sx={{my:4}} direction="row" alignItems="center" justifyContent="space-between" variant="outlined">
                                <Autocomplete
                                    inputValue={address1}
                                    onInputChange={(event, newInputValue) => {
                                      setAddress1(newInputValue);
                                    }}
                                    sx={{ width: 300 }}
                                    options={countries}
                                    autoHighlight
                                    getOptionLabel={(option) => option.label}
                                    getOptionDisabled={(option)=>option.code!=='AU'}
                                    renderOption={(props, option) => (
                                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                            <img
                                                loading="lazy"
                                                width="20"
                                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                                alt=""
                                              />
                                              {option.label} ({option.code}) +{option.phone}
                                        </Box>
                                    )}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            required
                                            label="Choose a country"
                                            inputProps={{
                                                ...params.inputProps,
                                                autoComplete: 'new-password', // disable autocomplete and autofill
                                            }}
                                        />
                                        )}
                                />
                                <Autocomplete
                                  inputValue={address2}
                                    onInputChange={(event, newInputValue) => {
                                      setAddress2(newInputValue);
                                    }}
                                  disablePortal
                                  id="combo-box-demo"
                                  options={states}
                                  sx={{ width: 300 }}
                                  renderInput={(params) => <TextField {...params} label="State" required/>}
                                />
                                <TextField {...address3Props} label="street(detailed adress)"/>
                        </Stack>
                        <Stack sx={{my:4}} spacing={2} direction="row" alignItems="center" justifyContent="space-between" variant="outlined">
                            <TextField {...phoneProps} label="phone"/>
                            <TextField {...postcodeProps}label="postcode"/>
                        </Stack>
                        <Grid container justifyContent="flex-start" alignItems="center" spacing={1} direction="row">
                            {currentProduct.map((gift,i)=>(
                                <Grid key={i} item xs={6}>
                                    <ProductForShow {...gift} detail={detail}/>
                                </Grid>
                            ))}
                        </Grid>
                         <Stack sx={{my:4}} spacing={4} direction="row" alignItems="center" justifyContent="flex-end" variant="outlined">
                             <h2>{totalPrice}</h2>
                            <button>Create</button>
                        </Stack>
                    </Box>
                    {/*<form onSubmit={submit2}>*/}
                    {/*    <button>ADD product</button>*/}
                    {/*</form>*/}
                </Box>
            </Container>
            </Box>
        </React.Fragment>


    )
}