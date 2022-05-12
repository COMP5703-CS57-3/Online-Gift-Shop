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
    const [giftDiscountStateProps, setGiftDiscountState] = useState(100);
    const [descriptionProps, resetDescription3] = useInput();
    const [categoryProps, resetCategory] = useInput();
    const [sideCategory1Props, resetSide1] = useInput();
    const [sideCategory2Props, resetSide2] = useInput();

    const [coverProps, resetCover] = useInput();
    const [show1Props, resetShow1] = useInput("");
    const [show2Props, resetShow2] = useInput("");
    const [show3Props, resetShow3] = useInput("");
    const [show4Props, resetShow4] = useInput("");
    const [errorPrice, setErrorPrice] = useState(true)

    const {addItems} = useAdmin();
    const TopSelections = ["Clothing", "Birthday", "Christmas", "New Year", "Shoe", "Wedding Celebration", "Easter Day", "Graduate", "Electronics"]
    const SideSelections1 = ['Male', "Female", "Other"]
    const SideSelections2 = ['Juvenile', "Young", "Elderly"]
    const submit = e => {
        e.preventDefault();
        addItems(
            giftNameProps.value,
            giftPriceProps.value,
            (giftDiscountStateProps * giftPriceProps.value / 100).toString(),
            giftDiscountStateProps.toString(),
            descriptionProps.value,
            TopSelections[categoryProps.value],
            SideSelections1[sideCategory1Props.value],
            SideSelections2[sideCategory2Props.value],
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
    const [sizeList,setSizeList] = useState([])

    // const [sizeId, setSizeId] = useState(0)

    function getSize(id, name, stock) {
        const copy=[...sizeList]
        copy[id] = {size: name, size_stock: stock}
        setSizeList(copy)
        // console.log(sizeList)
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
                                                     error={parseFloat(giftPriceProps.value).toString() === 'NaN'}
                                                     value={
                                                         parseFloat(giftPriceProps.value).toString() === 'NaN' ?
                                                             0 : giftDiscountStateProps * giftPriceProps.value / 100}
                                                     helperText={parseFloat(giftPriceProps.value).toString() === 'NaN'
                                                         ? "* Check your gift price" : "price after discount"}
                        /></Grid>
                        <Grid item xs={4}><TextField value={giftDiscountStateProps}
                                                     InputProps={{
                                                         endAdornment: <InputAdornment
                                                             position="end">%</InputAdornment>,
                                                     }}
                                                     onChange={e => {
                                                         if (parseInt(e.target.value).toString() === "NaN" ||
                                                             parseInt(e.target.value) > 100 ||
                                                             parseInt(e.target.value) < 0) {
                                                             setGiftDiscountState(100)

                                                         } else {
                                                             setGiftDiscountState(parseInt(e.target.value))
                                                         }
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
                                        label="Category"
                                        InputProps={{
                                            ...params.InputProps,
                                            type: 'search',
                                        }}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={0.5}><span>{"/"}</span></Grid>
                        <Grid item xs={3.5}>
                            <Autocomplete
                                freeSolo
                                disableClearable
                                options={SideSelections1.map((option) => option)}
                                {...sideCategory1Props}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Gender"
                                        InputProps={{
                                            ...params.InputProps,
                                            type: 'search',
                                        }}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={0.5}><span>{"/"}</span></Grid>
                        <Grid item xs={3.5}>
                            <Autocomplete
                                freeSolo
                                disableClearable
                                options={SideSelections2.map((option) => option)}
                                {...sideCategory2Props}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Age"
                                        InputProps={{
                                            ...params.InputProps,
                                            type: 'search',
                                        }}
                                    />
                                )}
                            />
                        </Grid>
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
                                        aria-label="remove">
                                <RemoveCircleOutlineIcon fontSize="inherit"/>
                            </IconButton>
                        </Grid>
                        <Grid container rowSpacing={1.5} columnSpacing={1} alignItems="center">

                            {tmp.map(t => {
                                return <SizeBlock id={t} sendSize={getSize}/>
                            })}
                        </Grid>

                        <Grid item xs={12}><TextField {...coverProps} label="Image Url" fullWidth sx={{m: 1}}/></Grid>
                        <Grid item xs={12}> <Button variant="contained" onClick={submit}>ADD</Button></Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
