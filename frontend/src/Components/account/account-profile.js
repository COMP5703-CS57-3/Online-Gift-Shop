import {Avatar, Box, Button, Card, CardActions, CardContent, Divider, Typography} from '@mui/material';
import axios from "axios";
import * as React from 'react';
import {Skeleton} from "@mui/lab";
import ChangePassword from "./changepwd";


const sample = {
    "id": 2,
    "user_name": "22",
    "user_email": "li519231856@outlook.com",
    "user_date_of_birth": null,
    "user_mobile": "123",
    "user_address": null
}


export default class AccountProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: sample, id: props.id, isLoad: false, isOpen: false}
    }

    UNSAFE_componentWillMount() {


        const that = this
        axios.get(`http://localhost:5000/api/user_information/user_profile/${this.state.id}`)
            .then(r => {
                // console.log(r.data)
                that.setState({"user": r.data, "isLoad": true})
            })
            .catch(r => console.log(r))
    }

    render() {
        return (
            <>
                <Card>
                    <CardContent>
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <Avatar
                                src={this.state.user.avatar}
                                sx={{
                                    height: 64,
                                    mb: 2,
                                    width: 64
                                }}
                            />
                            <Typography
                                color="textPrimary"
                                gutterBottom
                                variant="h5"
                            >
                                {this.state.isLoad ? this.state.user.user_name :
                                    <Skeleton variant="rectangular" width={170} height={40}/>}
                            </Typography>
                            <Typography
                                color="textSecondary"
                                variant="body2"
                            >
                                {this.state.isLoad ? `${this.state.user.user_email}` :
                                    <Skeleton variant="rectangular" width={200} height={25}/>}
                            </Typography>
                            <Typography
                                color="textSecondary"
                                variant="body2"
                            >
                                {this.state.isLoad ? Intl.DateTimeFormat().resolvedOptions().timeZone :
                                    <Skeleton variant="rectangular" width={120} height={25}/>}
                            </Typography>
                        </Box>
                    </CardContent>
                    <Divider/>
                    <CardActions>
                        <Button
                            color="primary"
                            fullWidth
                            variant="text"
                        >
                            Upload picture
                        </Button>
                    </CardActions>
                    <CardActions>
                        <Button
                            color="primary"
                            fullWidth
                            variant="text"
                            onClick={() => this.setState({isOpen: true})}
                        >
                            Change Password
                        </Button>
                    </CardActions>
                </Card>
                {this.state.isOpen ? <ChangePassword setIsOpen={()=>this.setState({isOpen:false})}/> : <div/>}
            </>
        )
    }

}


