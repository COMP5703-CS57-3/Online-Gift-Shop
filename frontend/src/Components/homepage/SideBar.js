import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';

export default function ControlledTreeView() {
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

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
        <TreeItem nodeId="1" label="Daily">
          <TreeItem nodeId="2" label="Clothes" />
          <TreeItem nodeId="3" label="Shoes" />
          <TreeItem nodeId="4" label="Electronic Devices " />
        </TreeItem>
        <TreeItem nodeId="5" label="Occasions">
          <TreeItem nodeId="6" label="Birthday"/>
          <TreeItem nodeId="7" label="Wedding Day"/>
        </TreeItem>
        <TreeItem nodeId="8" label="Celebratory">
          <TreeItem nodeId="9" label="Christmas" />
          <TreeItem nodeId="10" label="National Day" />
          <TreeItem nodeId="11" label="Easter" />
        </TreeItem>
      </TreeView>
    </Box>
  );
}