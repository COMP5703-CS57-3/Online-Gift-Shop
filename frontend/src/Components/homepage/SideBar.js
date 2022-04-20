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
  const {topBar,SideCategory,OnlySideCategory} = useGift();
  let getnode = undefined;

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
    // console.log(typeof(selected))
    //   getnode = nodeIds;
    // if(selected[0]=== "2") {
    //     SideCategory(topBar,"Male, Juvenile","price-low-to-high");
    //     console.log("在这呢")
    // }
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ['1', '5', '8'] : [],
    );
  };

  const handleSelectClick = () => {
    setSelected((oldSelected) =>
      oldSelected.length === 0 ? ['2', '3', '4', '6', '7', '9','10','11','12'] : [],
    );
  };

    const HandleClick = () => {
        if(selected[0]==="2" && topBar === ""){
            console.log(selected)
            OnlySideCategory("Male, Juvenile","price-low-to-high");
        }
        if(selected[0]==="2" && topBar !== ""){
            console.log(topBar)
            SideCategory(topBar,"Male, Juvenile","price-low-to-high");
        }
        if(selected[0]==="3" && topBar.length < 1){
            console.log(selected)
            OnlySideCategory("Male, Youth","price-low-to-high");
        }else if(selected[0]==="3"){
            console.log(topBar)
            SideCategory(topBar,"Male, Youth","price-low-to-high");
        }
        if(selected[0]==="4" && topBar.length < 1){
            console.log(selected)
            OnlySideCategory("Male, Elderly","price-low-to-high");
        }else if(selected[0]==="4"){
            console.log(topBar)
            SideCategory(topBar,"Male, Elderly","price-low-to-high");
        }
        if(selected[0]==="6" && topBar.length < 1){
            console.log(selected)
            OnlySideCategory("Female, Juvenile","price-low-to-high");
        }
        if(selected[0]==="6"){
            console.log(topBar)
            SideCategory(topBar,"Female, Juvenile","price-low-to-high");
        }
        if(selected[0]==="7" && topBar.length < 1){
            console.log(selected)
            OnlySideCategory("Female, Youth","price-low-to-high");
        }
        if(selected[0]==="7"){
            console.log(topBar)
            SideCategory(topBar,"Female, Youth","price-low-to-high");
        }
        if(selected[0]==="9" && topBar.length < 1){
            console.log(selected)
            OnlySideCategory("Female, Elderly","price-low-to-high");
        }else if(selected[0]==="9"){
            console.log(topBar)
            SideCategory(topBar,"Female, Elderly","price-low-to-high");
        }
        if(selected[0]==="10" && topBar.length < 1){
            console.log(selected)
            OnlySideCategory("Other, Juvenile","price-low-to-high");
        }else if(selected[0]==="10"){
            console.log(topBar)
            SideCategory(topBar,"Other, Juvenile","price-low-to-high");
        }
        if(selected[0]==="11" && topBar.length < 1){
            console.log(selected)
            OnlySideCategory("Other, Youth","price-low-to-high");
        }else if(selected[0]==="11"){
            console.log(topBar)
            SideCategory(topBar,"Other, Youth","price-low-to-high");
        }
        if(selected[0]==="12" && topBar.length < 1){
            console.log(selected)
            OnlySideCategory("Other, Elderly","price-low-to-high");
        }else if(selected[0]==="12"){
            console.log(topBar)
            SideCategory(topBar,"Other, Elderly","price-low-to-high");
        }
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
          <TreeItem nodeId="2" label="Juvenile" onClick={HandleClick} />
          <TreeItem nodeId="3" label="Youth" onClick={HandleClick} />
          <TreeItem nodeId="4" label="Elderly" onClick={HandleClick} />
        </TreeItem>
        <TreeItem nodeId="5" label="Female">
          <TreeItem nodeId="6" label="Juvenile" onClick={HandleClick}/>
            <TreeItem nodeId="7" label="Youth" onClick={HandleClick} />
          <TreeItem nodeId="9" label="Elderly" onClick={HandleClick} />
        </TreeItem>
        <TreeItem nodeId="8" label="Other">
            <TreeItem nodeId="10" label="Juvenile" onClick={HandleClick} />
            <TreeItem nodeId="11" label="Youth" onClick={HandleClick} />
          <TreeItem nodeId="12" label="Elderly" onClick={HandleClick} />
        </TreeItem>
      </TreeView>
    </Box>
  );
}