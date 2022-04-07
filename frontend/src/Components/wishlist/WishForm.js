import WishProvider, {useWish} from "../../tools/useWish";
import CategoryW from "./CategoryW";
import React, {useRef, useState} from "react";
import {useInput} from "../../tools/useInput";
import Box from "@mui/material/Box";
import {CssBaseline, FormControl, TextField} from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import {useOptionInput} from "../../tools/useOptionInput";
import Autocomplete from "@mui/material/Autocomplete";
import countries from "../../data/CountrySelect";
import states from "../../data/ProvinceSelect";
import Button from "@mui/material/Button";
import Background from "../../picture/background.png";

export default function WishForm({owner_id}) {
    const [address1,setAddress1] = useState(countries[12].label.toString());
    const [address2,setAddress2] = useState(states[0].label);
    const [titleProps,resetTitle] = useInput("123");
    const [firstnameProps,resetfirst] = useInput("123");
    const [lastnameProps,resetLast] = useInput("123");
    const [descriptionProps,resetDescription] = useInput("123");
    const [address3Props,resetAddress3] = useInput("123");
    const [phoneProps,resetPhone] =useInput("123");
    const [postcodeProps,resetPostcode] = useInput("123");
    const {createWish} = useWish()

    const [productNameProps,resetProductName] = useInput("123");
    const [coverUrlProps,resetCoverUrl] = useInput("123");
    const [sizeProps,resetSize] = useInput("123");
    const [priceProps,resetPrice] = useInput(123);
    // console.log(wishTitle.current.valueOf());
    const onC = ()=>{
        let address = address1+" "+address2+" "+address3Props.value
        console.log(address)
    }
    const submit = e=>{
        e.preventDefault();
        const address = address1.toString()+" "+address2+" "+address3Props.value
        createWish(owner_id,firstnameProps.value,lastnameProps.value,titleProps.value,descriptionProps.value,address,phoneProps.value,postcodeProps.value);
        // resetTitle();
        // resetAddress();
        // resetDescription();
        // resetfirst();
        // resetLast();
        // resetPhone();
        // resetPostcode();
    }
    // const submit2 = e=>{
    //     e.preventDefault();
    //     createWish(owner_id,firstnameProps.value,lastnameProps.value,titleProps.value,descriptionProps.value,addressProps.value,phoneProps.value,postcodeProps.value);
    //     // resetTitle();
    //     // resetAddress();
    //     // resetDescription();
    //     // resetfirst();
    //     // resetLast();
    //     // resetPhone();
    //     // resetPostcode();
    // }

    return (
        <React.Fragment>
            <CssBaseline />
            <Box style={{width:"100%",height:1500,backgroundImage: "url(" + Background + ")",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                <Container  maxWidth="lg" style={{backgroundColor:"white"}} sx={{ boxShadow: 1,borderRadius: 2}}>
                <Box sx={{height:'100vh'}}>
                    <Box component="form" onSubmit={submit}>
                        <h2 style={{marginLeft:0,marginRight:0,textAlign:"center"}}> Wish list creation form</h2>
                        <Stack spacing={4} direction="row" alignItems="center" justifyContent="space-between" variant="outlined">
                            <TextField {...titleProps} label="title"/>
                            <TextField {...firstnameProps}  label="firstname"/>
                            <TextField {...lastnameProps} label="lastname"/>
                        </Stack>
                        <TextField sx={{mt:4}} {...descriptionProps} fullWidth label="description:"/>
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
                         <Stack sx={{my:4}} spacing={4} direction="row" alignItems="center" justifyContent="flex-end" variant="outlined">
                            <button>ADD</button>
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