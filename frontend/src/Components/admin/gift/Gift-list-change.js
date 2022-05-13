import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {TextField} from "@mui/material";
import {useInput} from "../../../tools/useInput";
import {useAdmin} from "../../../tools/useAdmin";
import Grid from "@mui/material/Grid";
import SizeCard from "./SizeCard";
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

export default function ChangeGift() {
    // const {setOpen} = useAdmin();
    const [giftPriceProps, setGiftPrice] = useState("");
    const [giftDiscountStateProps, setGiftDiscountState] = useState(100);
    const [descriptionProps, resetDescription3] = useInput();
    const [categoryProps, setCategory] = useState();
    const [sideCategory1Props, setSide1] = useState();
    const [sideCategory2Props, setSide2] = useState();
    // const [coverProps, resetCover] = useInput();
    const [show1Props, resetShow1] = useInput("");
    const [show2Props, resetShow2] = useInput("");
    const [show3Props, resetShow3] = useInput("");
    const [show4Props, resetShow4] = useInput("");
    const {changeItemCount} = useAdmin();
    const [open, setOpen] = React.useState(false);
    const {selectedGiftIds} = useAdmin()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let giftNameProps, coverProps, des
    let size = []
    const [sizes, setSizes] = useState([]);
    let {gifts} = useAdmin();
    let loop = 0;
    const TopSelections = [{'label': 'Clothing', 'id': 0},
        {'label': 'Birthday', 'id': 1},
        {'label': 'Christmas', 'id': 2},
        {'label': 'New Year', 'id': 3},
        {'label': 'Shoe', 'id': 4},
        {'label': 'Wedding Celebration', 'id': 5},
        {'label': 'Easter Day', 'id': 6},
        {'label': 'Graduate', 'id': 7},
        {'label': 'Electronics', 'id': 8}]
    const SideSelections1 = [{'label': 'Male', 'id': 0}, {'label': 'Female', 'id': 1}, {'label': 'Other', 'id': 2}]
    const SideSelections2 = [{'label': 'Juvenile', 'id': 0}, {'label': 'Young', 'id': 1}, {'label': 'Elderly', 'id': 2}]
    //console.log(selectedGiftIds[0])
    // let foundGift = gifts.find(
    //     item => {return item.id === selectedGiftIds[0]}
    //
    // );
    if (selectedGiftIds.length > 0) {
        let foundGift = gifts.find(
            item => {
                return item.id === selectedGiftIds[0]
            }
        );
        if (foundGift) {

            const GiftItem = foundGift;
            size = foundGift.sizes
            console.log(size)
            loop = foundGift.sizes.length
            giftNameProps = GiftItem.gift_name;
            coverProps = GiftItem.gift_cover_url;
            des = GiftItem.gift_description;
        }

    }
    // }
    // useEffect(()=>{
    //
    // },[])


    // const [giftNameProps, resetgiftName] = useInput();


    const submit = e => {
        e.preventDefault();
        console.log(size)
        console.log(sizes.length === 0)
        changeItemCount(selectedGiftIds[0],
            giftNameProps,
            giftPriceProps,
            (giftDiscountStateProps * parseFloat(giftPriceProps) / 100).toString(),
            giftDiscountStateProps.toString() + "%",
            descriptionProps.value ? descriptionProps.value : des,
            categoryProps,
            sideCategory1Props,
            sideCategory2Props,
            coverProps,
            show1Props.value,
            show2Props.value,
            show3Props.value,
            show4Props.value,
            sizes.length === 0 ? size : sizes);
        setOpen(false)
    }
//------------------------------------table style---------------------------------
//     console.log(size)

    return (
        <div>
            <a onClick={handleOpen}>Change Description</a>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container spacing={2}>
                        <h4>Gift Edit From</h4>
                        <Grid item xs={12}><TextField disabled defaultValue={giftNameProps} label="giftName" fullWidth
                                                      sx={{m: 0.5}}/></Grid>
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
                                               0 : Math.round(giftDiscountStateProps * giftPriceProps) / 100}
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
                        <Grid item xs={12}><TextField defaultValue={des} {...descriptionProps} label="Description"
                                                      fullWidth
                                                      sx={{m: 0.5}}/></Grid>
                        <Grid item xs={3.5}>
                            <Autocomplete
                                freeSolo
                                disableClearable
                                options={TopSelections.map((option) => option.label)}
                                value={categoryProps}
                                onChange={e => {
                                    setCategory(e.target.innerText)
                                }}
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
                                options={SideSelections1.map((option) => option.label)}
                                value={sideCategory1Props}
                                onChange={e => {
                                    setSide1(e.target.innerText)
                                }}
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
                                options={SideSelections2.map((option) => option.label)}
                                value={sideCategory2Props}
                                onChange={e => {
                                    setSide2(e.target.innerText)
                                }}
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

                        <Grid item xs={12}><TextField disabled defaultValue={coverProps} label="coverUrl" fullWidth
                                                      sx={{m: 0.5}}/></Grid>
                        {size.map((gift, i) => (
                            <Grid key={i} item xs={4}>
                                <SizeCard {...gift} changeP={count => {
                                    let newSizes = []
                                    for (let j = 0; j < loop; j++) {
                                        if (j === i) {
                                            const sizeTemplate = {
                                                size: size[j].size,
                                                stock: count
                                            }
                                            newSizes.push(sizeTemplate)
                                        } else {
                                            const sizeTemplate = {
                                                size: size[j].size,
                                                stock: size[j].stock
                                            }
                                            newSizes.push(sizeTemplate)
                                        }
                                    }
                                    setSizes(newSizes)
                                }}/>
                            </Grid>
                        ))}
                        {/*sx={{display:"none"}}*/}
                        <Grid item xs={12} sx={{m: 3}}> <Button variant="contained"
                                                                onClick={submit}>change</Button></Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
