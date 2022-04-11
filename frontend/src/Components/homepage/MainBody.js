import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import {Outlet} from "react-router-dom";
import SideBar from "./SideBar"

import Grid from "@mui/material/Grid";
import {useGift} from "../../tools/useGift";
import CategoryG from "../Category/CategoryG";



export default function MainBody({props}) {
    /*通过属性的方式设置导航，跳转到不同的类别*/
 const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {

    setValue(newValue);
  };
   const {setTopBar} = useGift();
   const {maleCategory} = useGift();
   const {homeCategory} = useGift();
   const {femaleCategory} = useGift();
   const {teenagerCategory} = useGift();
   const {agedCategory} = useGift();
    const clickmale = ()=> {
        setTopBar("male");
        maleCategory("male","price-low-to-high");

    }//
        const click = ()=> {
        homeCategory();
    }
            const clickfemale = ()=> {
        setTopBar("female");
        femaleCategory("female", "price-low-to-high");

    }
            const clickyoung = ()=> {
        setTopBar("teenager");
        teenagerCategory("teenager","price-low-to-high");

    }
    const clickelderly = ()=> {
        setTopBar("aged");
        agedCategory("aged", "price-low-to-high");
    }


  return (
      <Box sx = {{display: 'flex',width:'100%',justifyContent: 'center'}}>
        <Box sx={{ width: '70%', typography: 'body1'}}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' ,paddingTop:3}}>
              <TabList onChange={handleChange} aria-label="menu lab" centered>
                  <Tab label="Hot Products" value="1" onClick={click} />
                <Tab label="Male" value="2" onClick={clickmale} />
                <Tab label="Female" value="3" onClick={clickfemale} />
                <Tab label="Young" value="4" onClick={clickyoung} />
                  <Tab label="Elderly" value="5" onClick={clickelderly} />
              </TabList>
            </Box>
            <Grid container spacing={0} value="1" style={{flexWrap:"nowrap",flexDirection:"row"}}>
                <Grid item xs={6} style={{float:"left",flexBasis:"auto",width:300}}><SideBar/></Grid>
                <Grid item xs={6} style={{float:"right",flexBasis:"auto",maxWidth:"80%"}}><CategoryG/></Grid>
                    {/*</div>*/}
            </Grid>
            {/*<TabPanel value="2">Product Two</TabPanel>*/}
            {/*<TabPanel value="3">Product Three</TabPanel>*/}
            {/*  <TabPanel value="4">Product Four</TabPanel>*/}
          </TabContext>
        </Box>
      </Box>
  );
}