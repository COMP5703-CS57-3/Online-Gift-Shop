import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {TextField} from "@mui/material";
import {useInput} from "../../../tools/useInput";
import  {useNumberInput} from "../../../tools/useNumberInput"
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

export default function AddGift() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [giftNameProps, resetgiftName] = useInput();
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

    const [SizeProps1, resetSize1] = useInput();
    const [SizeStock1, resetStock1] = useNumberInput();
    const [SizeProps2, resetSize2] = useInput();
    const [SizeStock2, resetStock2]  = useNumberInput();
    const [SizeProps3, resetSize3] = useInput();
    const [SizeStock3, resetStock3]  = useNumberInput();
    const [SizeProps4, resetSize4] = useInput();
    const [SizeStock4, resetStock4]  = useNumberInput();

    const {addItems} = useAdmin();
    // console.log(wishTitle.current.valueOf());

    const size = [
        {
            size: SizeProps1.value,
            size_stock : SizeStock1.value
            // size : "S",
            // size_stock : 2
        },
        {
            size: SizeProps2.value,
            size_stock : SizeStock2.value
            // size : "X",
            // size_stock : 2
        },
        {
            size: SizeProps3.value,
            size_stock : SizeStock3.value
            // size : "SL",
            // size_stock : 2
        },
        {
            size: SizeProps4.value,
            size_stock : SizeStock4.value
            // size : "XS",
            // size_stock : 2
        },
    ]
    const submit = e => {
        e.preventDefault();
        addItems(
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
        // console.log(coverProps.value);
    }
//------------------------------------table style---------------------------------




    return (
        <div>
            <a onClick ={handleOpen}>Add Gift</a>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container spacing={2} >
                        <a>Gift ADD From</a>
                        <Grid item xs={12}><TextField {...giftNameProps} label="giftName"  fullWidth sx={{ m: 1 }}/></Grid>
                        <Grid item xs={4}><TextField {...giftPriceProps} label="giftPrice"/></Grid>
                        <Grid item xs={4}><TextField {...giftDiscountPriceProps} label="giftDiscountPrice"/></Grid>
                        <Grid item xs={4}><TextField {...giftDiscountStateProps} label="giftDiscountState"/></Grid>
                        <Grid item xs={12}><TextField {...descriptionProps} label="description" fullWidth sx={{ m: 1 }} /></Grid>
                        <Grid item xs={4}><TextField {...categoryProps} label="category"/></Grid>
                        <Grid item xs={4}><TextField {...sideCategory1Props} label="sideCategory1"/></Grid>
                        <Grid item xs={4}><TextField {...sideCategory2Props} label="sideCategory2"/></Grid>

                        <Grid item xs={3}><TextField {...SizeProps1} label="size1"/></Grid>
                        <Grid item xs={3}><TextField {...SizeProps2} label="size2"/></Grid>
                        <Grid item xs={3}><TextField {...SizeProps3} label="size3"/></Grid>
                        <Grid item xs={3}><TextField {...SizeProps4} label="size4"/></Grid>
                        <Grid item xs={3}><TextField {...SizeStock1} label="Stock1"/></Grid>
                        <Grid item xs={3}><TextField {...SizeStock2} label="Stock2"/></Grid>
                        <Grid item xs={3}><TextField {...SizeStock3} label="Stock3"/></Grid>
                        <Grid item xs={3}><TextField {...SizeStock4} label="Stock4"/></Grid>

                        <Grid item xs={12}><TextField {...coverProps} label="coverUrl" fullWidth sx={{ m: 1 }}/></Grid>
                        <Grid item xs={12}><TextField {...show1Props} label="coverP" fullWidth sx={{ m: 1 }}/></Grid>
                        <Grid item xs={4}><TextField {...show2Props} label="coverP" fullWidth sx={{ m: 0.5 }}/></Grid>
                        <Grid item xs={4}><TextField {...show3Props} label="coverP" fullWidth sx={{ m: 0.5 }}/></Grid>
                        <Grid item xs={4}><TextField {...show4Props} label="coverP" fullWidth sx={{ m: 0.5 }}/></Grid>
                       <Grid item xs={12}> <Button variant="contained" onClick={submit}>ADD</Button></Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
