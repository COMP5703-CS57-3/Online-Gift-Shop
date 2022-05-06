import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {CardActions, TextField} from "@material-ui/core";
import {useAccount} from "../../tools/useAccount";
import Stack from "@mui/material/Stack";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ChangePassword(props) {
    // const [open, setOpen] = useState(true);
    const {changePwd} = useAccount();
    const {setOldPwd, setNewPwd, setConPwd} = useAccount()
    const {errInfo, setErrInfo} = useAccount()

    const handleOpen = () => props.setIsOpen({isOpen: true});
    const handleClose = () => props.setIsOpen({isOpen: false});

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={props.open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <Box sx={style}>
                        <Card sx={{minWidth: 275}}>
                            <CardContent>
                                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                    CHANGE PASSWORD
                                </Typography>
                                <Stack spacing={2}>


                                    <TextField label="Old Password" type="password" variant="filled"
                                               error={errInfo.errOld !== true}
                                               helperText={errInfo.errOld}
                                               onChange={(e) => {
                                                   setErrInfo({errOld: true, errNew: true, errCon: true});
                                                   setOldPwd(e.target.value)
                                               }}/>
                                    <TextField label="New Password" type="password" variant="filled"
                                               error={errInfo.errNew !== true}
                                               helperText={errInfo.errNew}
                                               onChange={(e) => {
                                                   setErrInfo({errOld: true, errNew: true, errCon: true});
                                                   setNewPwd(e.target.value)
                                               }}/>
                                    <TextField label="Confirmed New Password" type="password" variant="filled"
                                               error={errInfo.errCon !== true} helperText={errInfo.errCon}
                                               onChange={(e) => {
                                                   setErrInfo({errOld: true, errNew: true, errCon: true});
                                                   setConPwd(e.target.value)
                                               }}/>
                                </Stack>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => {
                                    props.setIsOpen(false);

                                }}>Cancel</Button>
                                <Button size="small" onClick={() => {
                                    changePwd();
                                }}>Confirm</Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}