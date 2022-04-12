import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import {useGift} from "../../tools/useGift";
import Button from "@mui/material/Button";
import cookie from "react-cookies";
import {_local} from "../../logic/local$sess";
import BeforeEach from "../../router/BeforEach";


export default function AdminHeader() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    // console.log(cookie.load(_local.get("id")))
    // const [IsLogin, setIsLogin] = useState(cookie.load("login") !== undefined)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // const {homeCategory} = useGift();
    // const click = () => {
    //     homeCategory();
    // }

    // function login() {
    //     const curr = !IsLogin
    //     console.log(IsLogin ? "Logout" : "Sign In")
    //     setIsLogin(curr)
    //     if (!curr) {
    //         console.log(cookie.load(_local.get("id")))
    //         cookie.remove(_local.get("id"))
    //         console.log(_local.get("id"))
    //
    //         _local.remove("id")
    //     }
    // }

    return (
        <>

            <React.Fragment>
                <Box sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>

                    <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                        <Typography sx={{minWidth: 200, paddingRight: 75}}>Online Gift Shop</Typography>
                        <Button sx={{minWidth: 100}} >Dashboard</Button>
                        <Typography sx={{minWidth: 100}}>User</Typography>
                        <Typography sx={{minWidth: 100}}>Gift Stork</Typography>
                        <Typography sx={{minWidth: 100}}>Order</Typography>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ml: 2}}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{width: 32, height: 32}}>Admin</Avatar>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                >
                    <MenuItem>
                        <Avatar/>Operation
                    </MenuItem>
                    <MenuItem>
                        <Avatar/>help
                    </MenuItem>
                    <Divider/>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small"/>
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                </Menu>
            </React.Fragment>

        </>
    );
}