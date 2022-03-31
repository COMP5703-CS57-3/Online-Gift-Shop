import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Outlet} from "react-router-dom";



export default function MainBody({props}) {
    /*通过属性的方式设置导航，跳转到不同的类别*/
 const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Box sx = {{display: 'flex',width:'100%',justifyContent: 'center'}}>
        <Box sx={{ width: '60%', typography: 'body1'}}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="menu lab" centered>
                <Tab label="Kind One" value="1" />
                <Tab label="Kind Two" value="2" />
                <Tab label="Kind Three" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
                <Outlet />
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      </Box>
  );
}