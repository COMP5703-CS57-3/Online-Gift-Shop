import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import {useGift} from "../../tools/useGift";
import {number} from "prop-types";

export default function SideBar() {
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const {topBar,SideCategory,OnlySideCategory} = useGift();
  const {sort} = useGift()
  let getnode = undefined;

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
      oldSelected.length === 0 ? ['2', '3', '4', '6', '7', '9','10','11','12'] : [],
    );
  };

    const HandleClick = (number) => {
        if(number ==="2" && topBar === ""){
            //console.log(number)
            OnlySideCategory("Male, Juvenile",sort);
        }
        if(number === "2" && topBar !== ""){
            //console.log(topBar)
            SideCategory(topBar,"Male, Juvenile",sort);
        }
        if(number ==="3" && topBar === ""){
            //console.log(selected)
            OnlySideCategory("Male, Youth",sort);
        }else if(number ==="3"){
            //console.log(topBar)
            SideCategory(topBar,"Male, Youth",sort);
        }
        if(number ==="4" &&  topBar === ""){
            //console.log(selected)
            OnlySideCategory("Male, Elderly",sort);
        }else if(number ==="4"){
            //console.log(topBar)
            SideCategory(topBar,"Male, Elderly",sort);
        }
        if(number ==="6" &&  topBar === ""){
            //console.log(selected)
            OnlySideCategory("Female, Juvenile",sort);
        }
        if(number ==="6"){
            //console.log(topBar)
            SideCategory(topBar,"Female, Juvenile",sort);
        }
        if(number ==="7" &&  topBar === ""){
            //console.log(selected)
            OnlySideCategory("Female, Youth",sort);
        }
        if(number ==="7"){
           // console.log(topBar)
            SideCategory(topBar,"Female, Youth",sort);
        }
        if(number ==="9" &&  topBar === ""){
            //console.log(selected)
            OnlySideCategory("Female, Elderly",sort);
        }else if(number ==="9"){
            //console.log(topBar)
            SideCategory(topBar,"Female, Elderly",sort);
        }
        if(number ==="10" &&  topBar === ""){
            //console.log(selected)
            OnlySideCategory("Other, Juvenile",sort);
        }else if(number ==="10"){
            //console.log(topBar)
            SideCategory(topBar,"Other, Juvenile",sort);
        }
        if(number ==="11" &&  topBar === ""){
            //console.log(selected)
            OnlySideCategory("Other, Youth",sort);
        }
        if(number ==="11"){
            (topBar)
            SideCategory(topBar,"Other, Youth",sort);
        }
        if(number ==="12" &&  topBar === ""){
            (selected)
            OnlySideCategory("Other, Elderly",sort);
        }else if(number ==="12"){
            (topBar)
            SideCategory(topBar,"Other, Elderly",sort);
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
        // selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        multiSelect
      >
        <TreeItem nodeId="1" label="Male" >
          <TreeItem nodeId="2" label="Juvenile" onClick={()=>HandleClick("2")}/>
          <TreeItem nodeId="3" label="Youth"  onClick={()=>HandleClick("3")}/>
          <TreeItem nodeId="4" label="Elderly"  onClick={()=>HandleClick("4")}/>
        </TreeItem>
        <TreeItem nodeId="5" label="Female">
          <TreeItem nodeId="6" label="Juvenile" onClick={()=>HandleClick("6")}/>
            <TreeItem nodeId="7" label="Youth" onClick={()=>HandleClick("7")} />
          <TreeItem nodeId="9" label="Elderly" onClick={()=>HandleClick("9" )}/>
        </TreeItem>
        <TreeItem nodeId="8" label="Other">
            <TreeItem nodeId="10" label="Juvenile" onClick={()=>HandleClick("10")} />
            <TreeItem nodeId="11" label="Youth" onClick={()=>HandleClick("11")} />
          <TreeItem nodeId="12" label="Elderly" onClick={()=>HandleClick("12" )}/>
        </TreeItem>
      </TreeView>
    </Box>
  );
}