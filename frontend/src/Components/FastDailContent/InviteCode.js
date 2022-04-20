import * as React from 'react';
import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import {useNavigate} from "react-router-dom";

const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: 400,
    transform: 'translate(-50%, -70%)',
    background: '#AFAFAF',
    zIndex: 999
}
export default function InviteCode() {
    const [InviteCode, setInviteCode] = useState("")
    const navigate = useNavigate()
    // HandleClickAway() {
    //     this.setState({visible:true})
    function HandleClick() {
        navigate(`/wish/wishlist/${InviteCode}`)
    }

    // }


    const HandleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        // console.log(name,value)
        // console.log(this)
        setInviteCode(value)


    }

    return (
        <Card sx={{...style, maxWidth: 345, background: '#fff'}} variant="outlined">
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Invite Code
                </Typography>
                <TextField
                    // margin="normal"
                    required
                    fullWidth
                    name="InviteCode"
                    onChange={(e) => HandleChange(e)}
                />
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => HandleClick()}>Go!</Button>
            </CardActions>
        </Card>
    );


}
