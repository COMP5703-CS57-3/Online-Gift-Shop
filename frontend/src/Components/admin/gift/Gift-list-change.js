import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {TextField} from "@mui/material";
import {useInput} from "../../../tools/useInput";
import {useAdmin} from "../../../tools/useAdmin";
import Grid from "@mui/material/Grid";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    hight: 1500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const {selectedGiftIds} = useAdmin()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let {gifts} = useAdmin();
    //console.log(selectedGiftIds[0])
    let foundGift = gifts.find(
        item => {return item.id === selectedGiftIds[0]}

    );
    const GiftItem = foundGift;
    console.log(GiftItem)

    const [giftNameProps, resetGiftName] = useInput();
    const [giftPriceProps, resetGiftPrice] = useInput();
    const [giftDiscountPriceProps, resetGiftDiscountPrice] = useInput();
    const [giftDiscountStateProps, resetGiftDiscountState] = useInput();
    const [descriptionProps, resetDescription3] = useInput();
    const [categoryProps, resetCategory] = useInput();
    const [sideCategory1Props, resetSide1] = useInput();
    const [sideCategory2Props, resetSide2] = useInput();
    const [coverProps, resetCover] = useInput();
    const [show1Props, resetShow1] = useInput();
    const [show2Props, resetShow2] = useInput();
    const [show3Props, resetShow3] = useInput();
    const [show4Props, resetShow4] = useInput();
    const {changeItemCount} = useAdmin();
    // console.log(wishTitle.current.valueOf());

    const size = [
        {
            size: "S",
            size_stock: 2
            // size : [SizeProps, resetSize] = useInput();
            // size_stock : []
        },
        {
            size: "M",
            size_stock: 2
            // size : [SizeProps, resetSize] = useInput();
            // size_stock : []
        },
        {
            size: "L",
            size_stock: 2
            // size : [SizeProps, resetSize] = useInput();
            // size_stock : []
        },
        {
            size: "XL",
            size_stock: 2
            // size : [SizeProps, resetSize] = useInput();
            // size_stock : []
        },
        {
            size: "XXL",
            size_stock: 2
            // size : [SizeProps, resetSize] = useInput();
            // size_stock : []
        },
    ]
    const submit = e => {
        e.preventDefault();
        changeItemCount(selectedGiftIds[0],
            giftNameProps.value,
            giftPriceProps.value,
            giftDiscountPriceProps.value,
            giftDiscountStateProps.value,
            descriptionProps.value,
            categoryProps.value,
            sideCategory1Props.value,
            sideCategory2Props.value,
            coverProps.value,
            show1Props.value,
            show2Props.value,
            show3Props.value,
            show4Props.value,
            size);
        console.log(show1Props.value);
    }
//------------------------------------table style---------------------------------




    return (
        <div>
            <Button onClick={handleOpen}>Operation</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container spacing={2} >
                        <a>Gift Editt From</a>
                        <Grid item xs={12}><TextField {...giftNameProps} label="giftName" /></Grid>
                        <Grid item xs={4}><TextField {...giftPriceProps} label="giftPrice"/></Grid>
                        <Grid item xs={4}><TextField {...giftDiscountPriceProps} label="giftDiscountPrice"/></Grid>
                        <Grid item xs={4}><TextField {...giftDiscountStateProps} label="giftDiscountState"/></Grid>
                        <Grid item xs={12}><TextField {...descriptionProps} label="description"/></Grid>
                        <Grid item xs={4}><TextField {...categoryProps} label="category"/></Grid>
                        <Grid item xs={4}><TextField {...sideCategory1Props} label="sideCategory1"/></Grid>
                        <Grid item xs={4}><TextField {...sideCategory2Props} label="sideCategory2"/></Grid>
                        <Grid item xs={12}><TextField {...coverProps} label="coverP"/></Grid>
                        <Grid item xs={12}><TextField {...show1Props} label="show1"/></Grid>
                        <Grid item xs={12}><TextField {...show2Props} label="show2"/></Grid>
                        <Grid item xs={12}><TextField {...show3Props} label="show3"/></Grid>
                        <Grid item xs={12}><TextField {...show4Props} label="show4"/></Grid>
                       <Grid item xs={12}> <Button variant="contained" onClick={submit}>change</Button></Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
