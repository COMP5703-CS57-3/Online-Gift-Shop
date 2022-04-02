import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Outlet} from "react-router-dom";
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';



export default function MainBody({props}) {
    /*通过属性的方式设置导航，跳转到不同的类别*/
 const [value, setValue] = React.useState('1');
   const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const handleChange = (event, newValue) => {

    setValue(newValue);
  };

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ['1', '5', '6', '7'] : [],
    );
  };

  const handleSelectClick = () => {
    setSelected((oldSelected) =>
      oldSelected.length === 0 ? ['1', '2', '3', '4', '5', '6', '7', '8', '9'] : [],
    );
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
                  <Tab label="Kind Four" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
                {/*<div style={{}}>*/}
                {/*    <Box sx={{width:'60%'}}>*/}
                {/*        <Outlet/>*/}
                {/*    </Box>*/}

                <Outlet />
                    {/*</div>*/}
            </TabPanel>
            <TabPanel value="2">Product Two</TabPanel>
            <TabPanel value="3">Product Three</TabPanel>
              <TabPanel value="4">Product Four</TabPanel>
          </TabContext>
        </Box>
      </Box>
  );
}