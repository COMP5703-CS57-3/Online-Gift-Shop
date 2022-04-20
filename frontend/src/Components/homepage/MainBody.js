import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import SideBar from "./SideBar"

import Grid from "@mui/material/Grid";
import {useGift} from "../../tools/useGift";
import CategoryG from "../Category/CategoryG";
import MenuItem from "@mui/material/MenuItem";
import {Menu} from "@mui/material";
import {TabPanel} from "@mui/lab";
import Button from "@mui/material/Button";



export default function MainBody({props}) {
    /*通过属性的方式设置导航，跳转到不同的类别*/
    const [value, setValue] = React.useState('1');
    const [id,setid]=React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleClick = (event,newid) => {
        setid(newid)
        console.log(id)
        console.log(value)
    };
    const {setTopBar,TopCategory} = useGift();
    const {homeCategory} = useGift();
    const click = () => {
        homeCategory();
    }
    const ClickCloth = () => {
        setTopBar("Clothing");
        TopCategory("Clothing", "price-low-to-high");

    }//
    const ClickShoe = () => {
        setTopBar("Shoe");
        TopCategory("Shoe", "price-low-to-high");

    }
    const ClickElec = () => {
        setTopBar("Electronics");
        TopCategory("Electronics", "price-low-to-high");

    }
    const ClickBrth = () => {
        setTopBar("Birthday");
        TopCategory("Birthday", "price-low-to-high");
    }
    const ClickWed = () => {
        setTopBar("Wedding Celebration");
        TopCategory("Wedding Celebration", "price-low-to-high");
    }
    const ClickChri = () => {
        setTopBar("Christmas");
        TopCategory("Christmas", "price-low-to-high");
    }
    const ClickEast = () => {
        setTopBar("Easter Day");
        TopCategory("Easter Day", "price-low-to-high");
    }
    const ClickNY = () => {
        setTopBar("New Year");
        TopCategory("New Year", "price-low-to-high");
    }
    const ClickGrad = () => {
        setTopBar("Graduate");
        TopCategory("Graduate", "price-low-to-high");
    }
    const ClickOther = () => {
        setTopBar("Other");
        TopCategory("Other", "price-low-to-high");
    }


    return (
        <Box sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>
            <Box sx={{width: '70%', typography: 'body1'}}>
                <TabContext value={value} id={id}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider', paddingTop: 3}}>
                        <TabList onChange={handleChange} aria-label="menu lab" centered>
                            <Tab label="Hot Products" value="1" onClick={click}/>
                            <Tab label="Usual Gift" value="2"/>
                            <Tab label="Regular Celebration" value="3"/>
                            <Tab label="Statutory Holidays" value="4"/>
                            <Tab label="Special Anniversary" value="5"/>
                            <Tab label="Other" value="6" onClick={ClickOther}/>
                        </TabList>
                    </Box>
                    {/*<TabPanel value="1" sx={{borderBottom: 1, borderColor: 'divider',}} >Item One</TabPanel>*/}
                    <TabPanel value="2" sx={{borderBottom: 1, borderColor: 'divider',height:20,mx:"auto"}}>
                        <Button variant="text" sx={{ml:40}} id ="11" onClick={ClickCloth}>Clothing</Button>
                        <Button variant="text" sx={{ml:10}} onClick={ClickShoe}>Shoe</Button>
                        <Button variant="text" sx={{ml:10}} onClick={ClickElec}>Electronics</Button>
                    </TabPanel>
                    <TabPanel value="3" sx={{borderBottom: 1, borderColor: 'divider',height:20,mx:"auto"}}>
                        <Button variant="text" sx={{ml:40}} onClick={ClickBrth}>Birthday </Button>
                        <Button variant="text" sx={{ml:10}} onClick={ClickWed}>Wedding Celebration</Button>
                    </TabPanel>
                    <TabPanel value="4" sx={{borderBottom: 1, borderColor: 'divider',height:20,mx:"auto"}}>
                        <Button variant="text" sx={{ml:40}} onClick={ClickChri}>Christmas</Button>
                        <Button variant="text" sx={{ml:10}} onClick={ClickEast}>Easter Day</Button>
                    </TabPanel>
                    <TabPanel value="5" sx={{borderBottom: 1, borderColor: 'divider',height:20,mx:"auto"}}>
                        <Button variant="text" sx={{ml:40}} onClick={ClickNY}>New Year</Button>
                        <Button variant="text" sx={{ml:10}} onClick={ClickGrad}>Graduate</Button>
                    </TabPanel>
                    <TabPanel value="6" sx={{borderBottom: 1, borderColor: 'divider',height:20,mx:"auto"}}>
                    </TabPanel>
                </TabContext>
                    <Grid container spacing={0} value="1" style={{flexWrap: "nowrap", flexDirection: "row"}}>
                        <Grid item xs={6} style={{float: "left", flexBasis: "auto", width: 300}}><SideBar/></Grid>
                        <Grid item xs={6}
                              style={{float: "right", flexBasis: "auto", maxWidth: "80%"}}><CategoryG/></Grid>
                    </Grid>
            </Box>

        </Box>

    );
}