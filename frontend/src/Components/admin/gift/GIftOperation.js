import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {TextField} from "@mui/material";
import {useInput} from "../../../tools/useInput";
import {useNumberInput} from "../../../tools/useNumberInput"
import {useAdmin} from "../../../tools/useAdmin";
import Grid from "@mui/material/Grid";
import SizeBlock from "./size";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {Autocomplete, InputAdornment} from "@material-ui/core";

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
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [giftNameProps, resetgiftName] = useInput();
    const [giftPriceProps, resetGiftPrice] = useInput();
    const [giftDiscountPriceProps, resetGiftDiscountPrice] = useInput();
    const [giftDiscountStateProps, resetGiftDiscountState] = useInput(100);
    const [descriptionProps, resetDescription3] = useInput();
    const [categoryProps, resetCategory] = useInput();
    const [sideCategory1Props, resetSide1] = useInput();
    const [sideCategory2Props, resetSide2] = useInput();

    const [coverProps, resetCover] = useInput();
    const [show1Props, resetShow1] = useInput("");
    const [show2Props, resetShow2] = useInput("");
    const [show3Props, resetShow3] = useInput("");
    const [show4Props, resetShow4] = useInput("");

    const [SizeProps1, resetSize1] = useInput();
    const [SizeStock1, resetStock1] = useNumberInput();
    const [SizeProps2, resetSize2] = useInput();
    const [SizeStock2, resetStock2] = useNumberInput();
    const [SizeProps3, resetSize3] = useInput();
    const [SizeStock3, resetStock3] = useNumberInput();
    const [SizeProps4, resetSize4] = useInput();
    const [SizeStock4, resetStock4] = useNumberInput();
    const [errorPrice, setErrorPrice] = useState(true)

    const {addItems} = useAdmin();
    const TopSelections = ["Clothing", "Birthday", "Christmas", "New Year", "Shoe", "Wedding Celebration", "Easter Day", "Graduate", "Electronics"]
    const submit = e => {
        e.preventDefault();
        if (parseFloat(giftPriceProps.value).toString() === 'NaN') {

        }
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
            sizeList);
        // console.log(coverProps.value);
    }
//------------------------------------table style---------------------------------


    const [tmp, setTmp] = useState([0])
    let sizeList = []

    // const [sizeId, setSizeId] = useState(0)

    function getSize(id, name, stock) {
        console.log(id, name, stock)
        sizeList[id] = {size: name, size_stock: stock}
    }

    return (
        <div>
            <a onClick={handleOpen}>Add Gift</a>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container spacing={2}>
                        <a>Gift ADD From</a>
                        <Grid item xs={12}><TextField {...giftNameProps} label="giftName" fullWidth sx={{m: 1}}/></Grid>
                        <Grid item xs={4}><TextField error={errorPrice !== true}
                                                     helperText={errorPrice}
                                                     {...giftPriceProps}
                                                     label="giftPrice"
                                                     InputProps={{
                                                         startAdornment: <InputAdornment
                                                             position="start">$</InputAdornment>,
                                                     }}
                        /></Grid>
                        <Grid item xs={4}><TextField disabled
                                                     error={parseFloat(giftPriceProps.value).toString() === 'NaN' ||
                                                     parseFloat(giftDiscountStateProps.value).toString() === 'NaN'}
                                                     value={
                                                         parseFloat(giftPriceProps.value).toString() === 'NaN' ||
                                                         parseFloat(giftDiscountStateProps.value).toString() === 'NaN' ?
                                                             0 : giftDiscountStateProps.value * giftPriceProps.value / 100}
                                                     helperText={parseFloat(giftPriceProps.value).toString() === 'NaN' ||
                                                     parseFloat(giftDiscountStateProps.value).toString() === 'NaN' ? "* Check your price and discount" : "price after discount"}
                        /></Grid>
                        <Grid item xs={4}><TextField {...giftDiscountStateProps}
                                                     InputProps={{
                                                         endAdornment: <InputAdornment
                                                             position="end">%</InputAdornment>,
                                                     }}
                                                     label="giftDiscountState"/></Grid>
                        <Grid item xs={12}><TextField {...descriptionProps} label="description" fullWidth sx={{m: 1}}/></Grid>
                        <Grid item xs={3.5}>
                            <Autocomplete
                                freeSolo
                                disableClearable
                                options={TopSelections.map((option) => option)}
                                {...categoryProps}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Search input"
                                        InputProps={{
                                            ...params.InputProps,
                                            type: 'search',
                                        }}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={0.5}><span>{"/"}</span></Grid>
                        <Grid item xs={3.5}><TextField {...sideCategory1Props} label="sideCategory1"/></Grid>
                        <Grid item xs={0.5}><span>{"/"}</span></Grid>
                        <Grid item xs={3.5}><TextField {...sideCategory2Props} label="sideCategory2"/></Grid>
                        <Grid>
                            <IconButton size="large" onClick={() => setTmp([...tmp, tmp[tmp.length - 1] + 1])}
                                        aria-label="add">
                                <AddCircleOutlineIcon fontSize="inherit"/>
                            </IconButton>
                        </Grid>
                        <Grid>
                            <IconButton disabled={tmp.length === 1} size="large" onClick={() => {

                                const t = [...tmp];
                                t.pop();
                                const s = [sizeList];
                                s.pop();
                                setTmp(t)

                            }}
                                        aria-label="add">
                                <RemoveCircleOutlineIcon fontSize="inherit"/>
                            </IconButton>
                        </Grid>
                        <Grid container rowSpacing={1.5} columnSpacing={1} alignItems="center">

                            {tmp.map(t => {
                                return <SizeBlock id={t} sendSize={getSize}/>
                            })}
                        </Grid>

                        <Grid item xs={12}><TextField {...coverProps} label="coverUrl" fullWidth sx={{m: 1}}/></Grid>
                        {/*<Grid item xs={12}><TextField {...show1Props} label="coverP" fullWidth sx={{m: 1}}/></Grid>*/}
                        {/*<Grid item xs={4}><TextField {...show2Props} label="coverP" fullWidth sx={{m: 0.5}}/></Grid>*/}
                        {/*<Grid item xs={4}><TextField {...show3Props} label="coverP" fullWidth sx={{m: 0.5}}/></Grid>*/}
                        {/*<Grid item xs={4}><TextField {...show4Props} label="coverP" fullWidth sx={{m: 0.5}}/></Grid>*/}
                        <Grid item xs={12}> <Button variant="contained" onClick={submit}>ADD</Button></Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
