import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete'
import {useCart} from "../tools/useCart";

export default function ItemCard({id,name,description}) {
    const{removeItems} = useCart();
  return (
    <Card variant="outlined" sx={{ maxWidth: 400,mt:1,mx:1}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {id}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          price
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>removeItems(id)}>
            Delete
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}