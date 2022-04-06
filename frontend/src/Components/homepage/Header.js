import * as React from 'react';
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
import Grid from "@mui/material/Grid";



export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const {multiCategory} = useGift();
    const click = ()=>{
        multiCategory("male","Life","Clothes","price-low-to-high");
    }
    return (
        <React.Fragment>
            <Box  sx = {{display: 'flex',width:'100%',justifyContent: 'center'}} >
                {/*<Grid item xs={4} sx={{display: 'flex', alignItems: 'center', textAlign: 'center',minWidth:200}}>*/}
                {/*    <Typography >Online Gift Shop</Typography>*/}
                {/*</Grid>*/}
                <Box  sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                    <Typography sx={{minWidth: 200,paddingRight:75}}>Online Gift Shop</Typography>
                    <Typography sx={{minWidth: 100}}>Home</Typography>
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
                        <Avatar sx={{width: 32, height: 32}}>M</Avatar>
                    </IconButton>
                </Tooltip>
                </Box>
            </Box>
            <Button onClick={click}>test only</Button>
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
                    <Avatar/> <Link style={{ textDecoration:'none'}} to={{pathname: "/account"}}>Profile</Link>
                </MenuItem>
                <MenuItem>
                    <Avatar/> My WhishList
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
                        <Link style={{ textDecoration:'none'}} to={{pathname: "/login"}}>
                            Sign In
                        </Link>
                    </ListItemIcon>

                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
