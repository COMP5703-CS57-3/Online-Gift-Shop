import {Box, Button, Card, CardContent, InputAdornment, SvgIcon, TextField, Typography} from '@mui/material';
import {useAdmin} from "../../../tools/useAdmin";
import BasicModal from "./Order-list-change";
import EditItemForm from "../EditItemForm";
import AddItemForm from "../AddItemForm";
// import { Search as SearchIcon } from '../../icons/search';
// import { Upload as UploadIcon } from '../../icons/upload';
// import { Download as DownloadIcon } from '../../icons/download';

export default function OrderListToolbar(props) {
    const {selectedOrderIds, orderList, setShownOrder} = useAdmin();
    const {removeItems} = useAdmin();
    // const {submit} = BasicModal();


    function addGift() {
        console.log("add")

    }

    function changeDes() {
        console.log("change")
        // const id = selectedCustomerIds;


    }

    function delGift() {
        const id = selectedOrderIds[0]
        removeItems(id)
    }

    function search(e) {
        const shownOrder = []
        let j = 0
        for (let i in orderList) {
            if (orderList[i].gift_name.split(e.target.value).length >1 || orderList[i].id.toString() === e.target.value) {
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
                    Gifts
                </Typography>
                <Box sx={{m: 1}}>

                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => addGift()}
                    >
                        Add Gift
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => delGift()}
                        disabled={selectedOrderIds.length < 1}
                    >
                        Delete
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => changeDes()}
                        disabled={selectedOrderIds.length !== 1}
                    >
                        Change Description
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

