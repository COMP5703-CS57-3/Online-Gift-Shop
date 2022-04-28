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
import {Link, useNavigate} from "react-router-dom";
import {useGift} from "../../tools/useGift";
import Button from "@mui/material/Button";
import cookie from "react-cookies";
import {_local} from "../../logic/local$sess";
import BeforeEach from "../../router/BeforEach";
import {useApp} from "../../tools/useApp";
import Logo from "../../picture/Logo.png";
import {getInitials} from "../../logic/get-initials";


export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    // console.log(cookie.load(_local.get("id")))
    const {login, setLogin,setRole} = useApp()
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const navigate=useNavigate()
    const handleClose = () => {
        setAnchorEl(null);
    };
    const {homeCategory} = useGift();
    const click = () => {
        homeCategory();
    }

    function loginFunc() {
        const curr = !login
        console.log(curr)
        //
        if (!curr) {
            cookie.remove("login")
            setLogin(false)
            setRole("user")
            sessionStorage.setItem("role","user")
            sessionStorage.removeItem("user")
        }
    }

    return (
        <>

            <React.Fragment>
                <Box sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>

                    <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                        {/*<Typography sx={{minWidth: 200, paddingRight: 75,backgroundImage: "url(" + Logo + ")",}}>Online Gift Shop</Typography>*/}
                        <Box
                            component="img"
                            sx={{
                                paddingTop:2,
                                minWidth: 200,
                                paddingRight: 75,
                                width:200,
                                height:50
                            }}
                            alt="pic"
                            src={Logo}
                            />
                        <Button sx={{minWidth: 100}} onClick={()=>navigate("/")}>Home</Button>
                        <Typography sx={{minWidth: 100}}>Shop</Typography>
                        <Typography sx={{minWidth: 100}}>Contact</Typography>
                        <Typography sx={{minWidth: 100}}>Profile</Typography>

                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ml: 2}}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{width: 32, height: 32}}>{getInitials(sessionStorage.getItem("user"))}</Avatar>
                            </IconButton>
                        </Tooltip>
                        <Typography sx={{minWidth: 100}}>{login?"hello, "+sessionStorage.getItem("user")+"!":"Hello, Guest!"}</Typography>
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
                        <Avatar/> <Link style={{textDecoration: 'none'}} to={{pathname: "/account"}}>Profile</Link>
                    </MenuItem>
                    <MenuItem>
                        <Avatar/> <Link style={{textDecoration: 'none'}} to={{pathname: "/wish"}}> My
                        WhishList</Link>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <PersonAdd fontSize="small"/>
                        </ListItemIcon>
                       <Link style={{textDecoration: 'none'}} to={{pathname: "/order/myorder"}}> My Purchase</Link>
                    </MenuItem>
                    <Divider/>
                    <MenuItem>
                        <ListItemIcon>
                            <PersonAdd fontSize="small"/>
                        </ListItemIcon>
                        Guest Wish List
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small"/>
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small"/>
                        </ListItemIcon>
                        <ListItemIcon>
                            <Link style={{textDecoration: 'none'}} to={{pathname: login ? "/" : "/login"}}
                                  onClick={() => loginFunc()}>
                                {login ? "Logout" : "Sign In"}
                            </Link>
                        </ListItemIcon>

                    </MenuItem>
                </Menu>
            </React.Fragment>

        </>
    );
}
