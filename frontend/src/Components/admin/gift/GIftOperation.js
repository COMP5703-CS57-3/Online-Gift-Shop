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

export default function AddGift() {
    const [open, setOpen] = React.useState(false);
    const {selectedGiftIds} = useAdmin()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const giftNameProps = useInput();
    const giftPriceProps= useInput();
    const giftDiscountPriceProps = useInput();
    const giftDiscountStateProps = useInput();
    const descriptionProps  = useInput();
    const categoryProps = useInput();
    const sideCategory1Props = useInput();
    const sideCategory2Props = useInput();
    const coverProps = useInput();
    const show1Props = useInput();
    const show2Props = useInput();
    const show3Props = useInput();
    const show4Props = useInput();
    const SizeProps1 = useInput();
    const SizeStock1 = useInput();
    const SizeProps2 = useInput();
    const SizeStock2  = useInput();
    const SizeProps3 = useInput();
    const SizeStock3  = useInput();
    const SizeProps4 = useInput();
    const SizeStock4  = useInput();

    const {addItems} = useAdmin();
    // console.log(wishTitle.current.valueOf());

    const size = [
        {
            SizeProps1,
            SizeStock1
            // size : [SizeProps, resetSize] = useInput();
            // size_stock : []
        },
        {
            SizeProps2,
            SizeStock2
            // size : [SizeProps, resetSize] = useInput();
            // size_stock : []
        },
        {
            SizeProps3,
            SizeStock3
            // size : [SizeProps, resetSize] = useInput();
            // size_stock : []
        },
        {
            SizeProps4,
            SizeStock4
            // size : [SizeProps, resetSize] = useInput();
            // size_stock : []
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
                        <Grid item xs={3}><TextField {...SizeProps1} label="category"/></Grid>
                        <Grid item xs={3}><TextField {...SizeProps2} label="category"/></Grid>
                        <Grid item xs={3}><TextField {...SizeProps3} label="category"/></Grid>
                        <Grid item xs={3}><TextField {...SizeProps4} label="category"/></Grid>
                        <Grid item xs={3}><TextField {...SizeStock1} label="category"/></Grid>
                        <Grid item xs={3}><TextField {...SizeStock2} label="category"/></Grid>
                        <Grid item xs={3}><TextField {...SizeStock3} label="category"/></Grid>
                        <Grid item xs={3}><TextField {...SizeStock4} label="category"/></Grid>
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
