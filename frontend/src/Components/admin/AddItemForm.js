import WishProvider, {useWish} from "../../tools/useWish";
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
import {useAdmin} from "../../tools/useAdmin";

export default function AddItemForm({owner_id}) {
    const [giftNameProps,resetGiftName] = useInput("123");
    const [giftPriceProps,resetGiftPrice] = useInput("123");
    const [giftDiscountPriceProps,resetGiftDiscountPrice] = useInput("123");
    const [giftDiscountStateProps,resetGiftDiscountState] = useInput("123");
    const [descriptionProps,resetDescription3] = useInput("123");
    const [categoryProps,resetCategory] =useInput("123");
    const [sideCategory1Props,resetSide1] = useInput("123");
    const [sideCategory2Props,resetSide2] = useInput("123");
    const [coverProps,resetCover] = useInput("123");
    const [show1Props,resetShow1] = useInput("123");
    const [show2Props,resetShow2] = useInput("123");
    const [show3Props,resetShow3] = useInput("123");
    const [show4Props,resetShow4] = useInput("123");
    const {addItems} = useAdmin();

    // console.log(wishTitle.current.valueOf());

    const size = [
        {
            size: "S",
            sizeStock: 1
        }
    ]
    const submit = e=>{
        e.preventDefault();
        addItems(giftNameProps.value,1,1,giftDiscountStateProps.value,descriptionProps.value,categoryProps.value,sideCategory1Props.value,sideCategory2Props.value,coverProps.value,show1Props.value,show2Props.value,show3Props.value,show4Props.value,size);
        // resetTitle();
        // resetAddress();
        // resetDescription();
        // resetfirst();
        // resetLast();
        // resetPhone();
        // resetPostcode();
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Box style={{width:"100%",height:1500,backgroundImage: "url(" + Background + ")",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                <Container  maxWidth="lg" style={{backgroundColor:"white"}} sx={{ boxShadow: 1,borderRadius: 2}}>
                <Box sx={{height:'100vh'}}>
                    <Box component="form" onSubmit={submit}>
                        <TextField {...giftNameProps} label="title"/>
                        <TextField {...giftPriceProps}  label="firstname"/>
                        <TextField {...giftDiscountPriceProps} label="lastname"/>
                        <TextField {...giftDiscountStateProps} label="lastname"/>
                        <TextField {...descriptionProps} label="lastname"/>
                        <TextField {...categoryProps} label="lastname"/>
                        <TextField {...sideCategory1Props} label="lastname"/>
                        <TextField {...sideCategory2Props} label="lastname"/>
                        <TextField {...coverProps} label="lastname"/>
                        <TextField {...show1Props} label="lastname"/>
                        <TextField {...show2Props} label="lastname"/>
                        <TextField {...show3Props} label="lastname"/>
                        <TextField {...show4Props} label="lastname"/>
                        <button>add</button>
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