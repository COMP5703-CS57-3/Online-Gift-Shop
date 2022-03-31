import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ClickAwayListener} from "@mui/material";
import TextField from "@mui/material/TextField";

const style = {
    position: 'absolute',
        top: '50%',
        left: '50%',
        width: 400,
        transform: 'translate(-50%, -70%)',
        background: '#fff',
        zIndex:999
}
export default class InviteCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            InviteCode: "",

        }
    }

    // HandleClickAway() {
    //     this.setState({visible:true})
    // }

    render() {
        return (
                <Card id="InviteCode"sx={{...style,maxWidth: 345,background:'#fff'}} variant="outlined" >
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Invite Code
                        </Typography>
                        <TextField
                            // margin="normal"
                            required
                            fullWidth
                            name="InviteCode"
                            onChange={(e) => this.HandleChange(e)}
                        />
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => this.HandleClick()}>Go!</Button>
                    </CardActions>
                </Card>
        );
    }

    HandleClick() {
        console.log(this.state.InviteCode)
    }

    HandleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        // console.log(name,value)
        // console.log(this)
        this.setState({[name]: value},)


    }

}
