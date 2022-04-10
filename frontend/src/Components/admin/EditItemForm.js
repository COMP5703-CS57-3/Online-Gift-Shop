import React, {useRef, useState} from "react";
import {useInput} from "../../tools/useInput";
import Box from "@mui/material/Box";
import {CssBaseline, FormControl, TextField} from "@mui/material";
import Container from "@mui/material/Container";
import Background from "../../picture/background.png";
import {useAdmin} from "../../tools/useAdmin";
import {useNavigate, useParams} from "react-router-dom";
import {useGift} from "../../tools/useGift";

export default function EditItemForm({}) {
    let {id} = useParams();
    let {gifts} = useAdmin();
    let foundGift = gifts.find(
       item => item.id == id
    );
    const [giftNameProps,resetGiftName] = useInput(foundGift.gift_name);
    const [giftPriceProps,resetGiftPrice] = useInput(foundGift.gift_price);
    const [giftDiscountPriceProps,resetGiftDiscountPrice] = useInput(foundGift.gift_discount_price);
    const [giftDiscountStateProps,resetGiftDiscountState] = useInput(foundGift.gift_discount_state);
    const [descriptionProps,resetDescription3] = useInput(foundGift.gift_description);
    const [categoryProps,resetCategory] =useInput(foundGift.gift_category);
    const [sideCategory1Props,resetSide1] = useInput(foundGift.gift_side_category1);
    const [sideCategory2Props,resetSide2] = useInput(foundGift.gift_side_category2);
    const [coverProps,resetCover] = useInput(foundGift.gift_cover_url);
    const [show1Props,resetShow1] = useInput(foundGift.gift_show_url1);
    const [show2Props,resetShow2] = useInput(foundGift.gift_show_url2);
    const [show3Props,resetShow3] = useInput(foundGift.gift_show_url3);
    const [show4Props,resetShow4] = useInput(foundGift.gift_show_url4);
    const {changeItemCount} = useAdmin();
    // console.log(wishTitle.current.valueOf());

    const size = [
        {
            size: "L",
            size_stock: 2
        }
    ]
    const submit = e=>{
        e.preventDefault();
        changeItemCount(id,giftNameProps.value,1,1,giftDiscountStateProps.value,descriptionProps.value,categoryProps.value,sideCategory1Props.value,sideCategory2Props.value,coverProps.value,show1Props.value,show2Props.value,show3Props.value,show4Props.value,size);
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
                        <button>change</button>
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