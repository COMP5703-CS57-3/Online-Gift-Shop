import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import InviteCode from "./InviteCode";
import {WebAssetOffOutlined} from "@mui/icons-material";
import {useState} from "react";




// const withLink = (to, children) => <Link to={to}>{children}</Link>;
const actions = [
    {icon: <WebAssetOffOutlined/>, name: 'Invite Code'}];

export default function FastDial() {
    const [showComponent, setShowComponent] = useState(true);
    const autoSize=()=>{
        let winWidth=0
        let winHeight=0
        if (window.innerWidth){
            winWidth=window.innerWidth
        }
        if (window.innerHeight){
            winHeight=window.innerHeight
        }
        return [winHeight,winWidth]
    }
    const [winWidth,winHeight]=autoSize()
    return (
        <div  >
            <Box hidden={showComponent} style={{bottom:winHeight/2,left:winWidth/2,zIndex:999}}>
                <InviteCode sx={{boxShadow:2}}/>
            </Box>
            <Box sx={{height: 20, transform: 'translateZ(0px)', flexGrow: 1}}>
                <SpeedDial
                    ariaLabel="Invite Code"
                    sx={{position: 'absolute', bottom: 16, right: 16}}
                    icon={<SpeedDialIcon/>}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipOpen
                            onClick={()=>setShowComponent(!showComponent)}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </div>
    );
}