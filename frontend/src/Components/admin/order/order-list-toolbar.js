import {Box, Card, CardContent, InputAdornment, SvgIcon, TextField, Typography} from '@mui/material';
import {useAdmin} from "../../../tools/useAdmin";
import {CircularProgress} from "@material-ui/core";
import React from "react";
// import { Search as SearchIcon } from '../../icons/search';
// import { Upload as UploadIcon } from '../../icons/upload';
// import { Download as DownloadIcon } from '../../icons/download';

export default function OrderListToolbar(props) {
    const {orderList, setShownOrder} = useAdmin();
    const {showLoading} = useAdmin()

    // const {submit} = BasicModal();


    function search(e) {
        const shownOrder = []
        let j = 0
        for (let i in orderList) {
            if (
                orderList[i].first_name.split(e.target.value).length > 1 ||
                orderList[i].last_name.split(e.target.value).length > 1 ||
                orderList[i].payer_name.split(e.target.value).length > 1 ||
                orderList[i].order_number.toString() === e.target.value ||
                orderList[i].wishlist_code.toString() === e.target.value ||
                orderList[i].payer_id.toString() === e.target.value ||
                orderList[i].phone.toString() === e.target.value ||
                orderList[i].last_name.split(e.target.value).length > 1 ||
                orderList[i].user_id.toString() === e.target.value

            ) {
                shownOrder[j++] = orderList[i]
            }
        }
        setShownOrder(shownOrder)
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
                    Orders
                </Typography>
                {showLoading ? <Box sx={{position: 'flex', top: 16, right: 16}}>
                    <CircularProgress/>
                </Box> : <div/>}
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
                                placeholder="Search Order id or user name or sth."
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

