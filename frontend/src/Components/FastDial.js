import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import InviteCode from "./FastDailContent/InviteCode";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import {ClickAwayListener} from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {useNavigate} from "react-router-dom";


// const withLink = (to, children) => <Link to={to}>{children}</Link>;
const actions = [
    {icon: <CardGiftcardIcon/>, name: 'Use Invite Code'},
    {icon: <AddBusinessIcon/>, name: 'Create New Wishlist'},
    {icon: <ArrowUpwardIcon/>, name: 'Return to Top'}
];

export default function FastDial() {
    const [showComponent, setShowComponent] = useState(true);
    const [component, setComponent] = useState(<div/>);
    const navigate = useNavigate()

    function handleClick(name) {
        if (name === "Use Invite Code") {
            setComponent(<InviteCode sx={{boxShadow: 2}}/>)
            setShowComponent(!showComponent)
        } else if (name === "Create New Wishlist") {
            navigate("/wishForm")
        } else if (name === 'Return to Top') {
            document.body.scrollTop = document.documentElement.scrollTop = 0
        }

    }

    return (
        <ClickAwayListener onClickAway={() => setShowComponent(true)}>
            <div>
                <Box hidden={showComponent}>
                    {component}
                </Box>
                <Box>
                    <SpeedDial
                        ariaLabel="Invite Code"
                        sx={{position: 'fixed', bottom: 16, right: 16}}
                        icon={<SpeedDialIcon/>}
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                tooltipOpen
                                onClick={() => handleClick(action.name)}
                                title={action.name}/>
                        ))}
                    </SpeedDial>
                </Box>
            </div>
        </ClickAwayListener>
    );
}