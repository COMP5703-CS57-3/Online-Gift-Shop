import {Box, Button, Card, CardContent, InputAdornment, SvgIcon, TextField, Typography} from '@mui/material';
import {useAdmin} from "../../../tools/useAdmin";
import ChangeGift from "./Gift-list-change";
import AddGift from "./GIft-item-add";
import {CircularProgress} from "@material-ui/core";
import React from "react";

// import { Search as SearchIcon } from '../../icons/search';
// import { Upload as UploadIcon } from '../../icons/upload';
// import { Download as DownloadIcon } from '../../icons/download';

export default function GiftListToolbar(props) {
    const {selectedGiftIds, gifts, setShownGift} = useAdmin();
    const {removeItems} = useAdmin();
    const {showLoading} = useAdmin()

    // const {submit} = BasicModal();


    function addGift() {
        console.log("add")

    }

    function changeDes() {
        console.log("change")
        // const id = selectedCustomerIds;
        // setOpen(true)
    }

    function delGift() {
        const id = selectedGiftIds
        removeItems(id)
    }

    function search(e) {
        const shownGift = []
        let j = 0
        for (let i in gifts) {
            if (gifts[i].gift_name.split(e.target.value).length > 1 || gifts[i].id.toString() === e.target.value) {
                shownGift[j++] = gifts[i]
            }
        }
        setShownGift(shownGift)
    }


    return (
        <Box {...props}>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    m: -1
                }}
            >
                <Typography
                    sx={{m: 1}}
                    variant="h3"
                >
                    Gifts
                </Typography>
                {showLoading ? <Box sx={{position: 'flex', top: 16, right: 16}}>
                    <CircularProgress/>
                </Box> : <div/>}
                <Box sx={{m: 1}}>

                    <Button
                        color="primary"
                        variant="contained"
                        // onClick={() => addGift()}
                    >
                        <AddGift/>
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => delGift()}
                        disabled={selectedGiftIds.length < 1}
                    >
                        Delete
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        // onClick={() => changeDes()}
                        disabled={selectedGiftIds.length !== 1}
                    >
                        <ChangeGift/>
                    </Button>

                </Box>
            </Box>
            <Box sx={{mt: 3}}>
                <Card>
                    <CardContent>
                        <Box sx={{maxWidth: 500}}>
                            <TextField
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SvgIcon
                                                color="action"
                                                fontSize="small"
                                            >
                                            </SvgIcon>
                                        </InputAdornment>
                                    )
                                }}
                                placeholder="Search Gift name"
                                variant="outlined"
                                onChange={(e) => search(e)}
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}

