import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import {useGift} from "../../tools/useGift";

export default function ControlledTreeView() {
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const {topBar,SideCategory} = useGift();
  // 笨方法传筛选，可以改成if条件
  const {maleCategory} = useGift();
   const {homeCategory} = useGift();
   const {femaleCategory} = useGift();
   const {teenagerCategory} = useGift();
   const {agedCategory} = useGift();

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
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
        SideCategory(topBar,"Life, Clothes","price-low-to-high");
    }
    const c2= ()=> {
        SideCategory(topBar,"Life, Shoes","price-low-to-high");
    }
    const c3= ()=> {
        SideCategory(topBar,"Life, Electronic","price-low-to-high");
    }
    const c4 = ()=> {
        SideCategory(topBar,"Celebration, Birthday","price-low-to-high");
    }
    const c5 = ()=> {
        SideCategory(topBar,"Celebration, Wedding","price-low-to-high");
    }
        const c6 = ()=> {
        SideCategory(topBar,"Holiday, Christmas","price-low-to-high");
    }
        const c7 = ()=> {
        SideCategory(topBar,"Holiday, National Day","price-low-to-high");
    }
        const c8 = ()=> {
        SideCategory(topBar,"Holiday, Easter","price-low-to-high");
    }



  return (
    <Box sx={{   maxWidth: 300, overflow: 'hidden' }}>
      <Box sx={{ mb: 1 }}>
        <Button size="small" onClick={handleExpandClick}>
          {expanded.length === 0 ? 'Expand' : 'Collapse'}
        </Button>
        <Button size="small" onClick={handleSelectClick}>
          {selected.length === 0 ? 'Select all' : 'UnSelect'}
        </Button>
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
        <TreeItem nodeId="1" label="Life" >
          <TreeItem nodeId="2" label="Clothes" onClick={c1} />
          <TreeItem nodeId="3" label="Shoes" onClick={c2} />
          <TreeItem nodeId="4" label="Electronic " onClick={c3} />
        </TreeItem>
        <TreeItem nodeId="5" label="Celebration">
          <TreeItem nodeId="6" label="Birthday" onClick={c4}/>
          <TreeItem nodeId="7" label="Wedding" onClick={c5}/>
        </TreeItem>
        <TreeItem nodeId="8" label="Holiday">
          <TreeItem nodeId="9" label="Christmas" onClick={c6} />
          <TreeItem nodeId="10" label="National Day" onClick={c7} />
          <TreeItem nodeId="11" label="Easter" onClick={c8} />
        </TreeItem>
      </TreeView>
    </Box>
  );
}