import {Box, Button, Card, CardContent, InputAdornment, SvgIcon, TextField, Typography} from '@mui/material';
// import { Search as SearchIcon } from '../../icons/search';
// import { Upload as UploadIcon } from '../../icons/upload';
// import { Download as DownloadIcon } from '../../icons/download';

export const GiftListToolbar = (props) => (
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
                Gifts
            </Typography>
            <Box sx={{m: 1}}>

                <Button
                    color="primary"
                    variant="contained"
                >
                    Add Gift
                </Button>
                <Button
                    color="primary"
                    variant="contained"
                >
                    Delete
                </Button>
                <Button
                    color="primary"
                    variant="contained"
                    disable
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
                            placeholder="Search customer"
                            variant="outlined"
                        />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    </Box>
);
