import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {TextField} from "@mui/material";
import {useInput} from "../../../tools/useInput";
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
    const [giftPriceProps, setGiftPrice] = useState();
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
    const [stockError, setStockError] = useState('')
    const [error, setError] = useState(false)
    const {addItems} = useAdmin();
    const TopSelections = ["Clothing", "Birthday", "Christmas", "New Year", "Shoe", "Wedding Celebration", "Easter Day", "Graduate", "Electronics"]
    const SideSelections1 = ['Male', "Female", "Other"]
    const SideSelections2 = ['Juvenile', "Young", "Elderly"]
    const submit = e => {
        e.preventDefault();

        const errorStock = sizeList.find(item => parseInt(item.size_stock).toString() === "NaN")
        console.log(errorStock)
        if (errorStock) {
            setStockError("Please check the stock number")
            setError(true)
        } else {
            console.log("2")
            setError(false)
        }

        if (!error) {
            console.log("3")
            addItems(
                giftNameProps.value,
                giftPriceProps,
                (giftDiscountStateProps * parseFloat(giftPriceProps) / 100).toString(),
                giftDiscountStateProps.toString() + "%",
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
    }
//------------------------------------table style---------------------------------


    const [tmp, setTmp] = useState([0])
    const [sizeList, setSizeList] = useState([])

    // const [sizeId, setSizeId] = useState(0)

    function getSize(id, name, stock) {
        const copy = [...sizeList]
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
                       <Grid item xs={4}><TextField
                            value={giftPriceProps}
                            onChange={e => {
                                const filter = /^([1-9]\d*|0)(\.)?(\d{1,2})?$/;
                                if (e.target.value.length > 1 && isNaN(e.target.value)) {
                                    // console.log(2)
                                    setGiftPrice("")
                                } else if (!filter.test(e.target.value) || parseFloat(e.target.value).toString() === 'NaN' || parseFloat(e.target.value) <= 0) {
                                    // console.log(1)
                                    setGiftPrice(e.target.value.slice(0, e.target.value.length - 1))


                                } else if (e.target.value.length > 8) {
                                    // console.log(3)
                                    setGiftPrice(e.target.value.slice(0, 9))
                                } else if (e.target.value.indexOf('.') !== e.target.value.length - 1) {
                                    // console.log(4)
                                    // console.log((Math.round(parseFloat(e.target.value) * 100) / 100))
                                    setGiftPrice((Math.round(parseFloat(e.target.value) * 100) / 100).toString())
                                } else {
                                    // console.log(5)
                                    setGiftPrice(e.target.value)
                                }
                            }}
                            label="giftPrice"
                            InputProps={{
                                startAdornment: <InputAdornment
                                    position="start">$</InputAdornment>,
                            }}
                        /></Grid>
                        <Grid item xs={4}>
                            <TextField disabled
                                       error={parseFloat(giftPriceProps).toString() === 'NaN' && giftPriceProps !== ""}
                                       value={
                                           parseFloat(giftPriceProps).toString() === 'NaN' ?
                                               0 : Math.round(giftDiscountStateProps * giftPriceProps) / 100 }
                                       helperText={parseFloat(giftPriceProps).toString() === 'NaN' && giftPriceProps !== ""
                                           ? "* Check your gift price" : "price after discount"}
                            />
                        </Grid>
                        <Grid item xs={4}><TextField value={giftDiscountStateProps}
                                                     type={"number"}
                                                     InputProps={{
                                                         endAdornment: <InputAdornment
                                                             position="end">%</InputAdornment>,
                                                     }}
                                                     onChange={e => {
                                                         if (e.target.value && parseInt(e.target.value).toString() === "NaN" ||
                                                             parseInt(e.target.value) > 100 ||
                                                             parseInt(e.target.value) < 0) {
                                                             setGiftDiscountState(100)

                                                         } else if (e.target.value) {
                                                             setGiftDiscountState(parseInt(e.target.value))
                                                         } else {
                                                             setGiftDiscountState(1)
                                                         }
                                                     }}
                                                     label="Discount"/>
                        </Grid>
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
                        <Grid item xs={1}>
                            <IconButton size="large" onClick={() => setTmp([...tmp, tmp[tmp.length - 1] + 1])}
                                        aria-label="add">
                                <AddCircleOutlineIcon fontSize="inherit"/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton disabled={tmp.length === 1} size="large" onClick={() => {

                                const t = [...tmp];
                                t.pop();
                                const s = [...sizeList];
                                s.pop();
                                setTmp(t)
                                setSizeList(s)

                            }}
                                        aria-label="remove">
                                <RemoveCircleOutlineIcon fontSize="inherit"/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={5}><span>{error ? "Please Check the Stock Number!" : ""}</span></Grid>
                        <Grid container rowSpacing={1.5} columnSpacing={1} alignItems="center">

                            {tmp.map(t => {
                                return <SizeBlock Sid={t} sendSize={getSize}/>
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
