import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import {useGift} from "../../tools/useGift";

export default function SideBar() {
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const {topBar,SideCategory} = useGift();

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
    console.log(nodeIds)
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ['1', '5', '8'] : [],
    );
  };

  const handleSelectClick = () => {
    setSelected((oldSelected) =>
      oldSelected.length === 0 ? ['2', '3', '4', '6', '7', '9','10','11'] : [],
    );
  };

    const c1 = ()=> {
        SideCategory(topBar,"Male, Juvenile","price-low-to-high");
    }
    const c2= ()=> {
        SideCategory(topBar,"Male, Youth","price-low-to-high");
    }
    const c3= ()=> {
        SideCategory(topBar,"Male, Elderly","price-low-to-high");
    }
    const c5 = ()=> {
        SideCategory(topBar,"Female, Juvenile","price-low-to-high");
    }
        const c6 = ()=> {
        SideCategory(topBar,"Female, Youth","price-low-to-high");
    }
        const c7 = ()=> {
        SideCategory(topBar,"Female, Elderly","price-low-to-high");
    }
        const c8 = ()=> {
        SideCategory(topBar,"Other, Juvenile","price-low-to-high");
    }
        const c4 = ()=> {
        SideCategory(topBar,"Other, Youth","price-low-to-high");
    }
    const c9 = ()=> {
        SideCategory(topBar,"Other, Elderly","price-low-to-high");
    }


  return (
    <Box sx={{   maxWidth: 300, overflow: 'hidden' }}>
      <Box sx={{ mb: 1 }}>
        <Button size="small" onClick={handleExpandClick}>
          {expanded.length === 0 ? 'Expand' : 'Collapse'}
        </Button>
        {/*<Button size="small" onClick={handleSelectClick}>*/}
        {/*  {selected.length === 0 ? 'Select all' : 'UnSelect'}*/}
        {/*</Button>*/}
      </Box>
      <TreeView
        aria-label="controlled"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        multiSelect
      >
        <TreeItem nodeId="1" label="Male" >
          <TreeItem nodeId="2" label="Juvenile" onClick={c1} />
          <TreeItem nodeId="3" label="Youth" onClick={c2} />
          <TreeItem nodeId="4" label="Elderly" onClick={c3} />
        </TreeItem>
        <TreeItem nodeId="5" label="Female">
          <TreeItem nodeId="7" label="Juvenile" onClick={c5}/>
            <TreeItem nodeId="9" label="Youth" onClick={c6} />
          <TreeItem nodeId="10" label="Elderly" onClick={c7} />
        </TreeItem>
        <TreeItem nodeId="8" label="Other">
            <TreeItem nodeId="11" label="Juvenile" onClick={c8}/>
            <TreeItem nodeId="12" label="Youth" onClick={c4} />
          <TreeItem nodeId="13" label="Elderly" onClick={c9} />
        </TreeItem>
      </TreeView>
    </Box>
  );
}