import {Box, Card, CardContent, InputAdornment, SvgIcon, TextField, Typography} from '@mui/material';
import {useAdmin} from "../../../tools/useAdmin";
import {CircularProgress} from "@material-ui/core";
import React from "react";
// import { Search as SearchIcon } from '../../icons/search';
// import { Upload as UploadIcon } from '../../icons/upload';
// import { Download as DownloadIcon } from '../../icons/download';

export const CustomerListToolbar = (props) => {
    const {shownUser, setShownUser} = useAdmin();
    const {users} = useAdmin();
    const {showLoading} = useAdmin()

    function search(e) {
        const shownUser = []
        let j = 0
        for (let i in users) {
            if (users[i].user_name.split(e.target.value).length > 1 || users[i].id.toString() === e.target.value) {
                shownUser[j++] = users[i]
            }
        }
        setShownUser(shownUser)
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
                    variant="h4"
                >
                    Customers
                </Typography>
                {showLoading ? <Box sx={{position: 'flex', top: 16, right: 16}}>
                    <CircularProgress/>
                </Box> : <div/>}
                <Box sx={{m: 1}}>

                </Box>
            </Box>
            <Box sx={{mt: 3}}>
                <Card>
                    <CardContent>
                        <Box sx={{maxWidth: 500}}>
                            <TextField
                                fullWidth
                                onChange={(e) => search(e)}
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
                                placeholder="Search customer by id or name"
                                variant="outlined"
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}
