import * as React from 'react';
import {Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField} from '@mui/material';
import axios from "axios";

const states = [
    {
        value: 'alabama',
        label: 'Alabama'
    },
    {
        value: 'new-york',
        label: 'New York'
    },
    {
        value: 'san-francisco',
        label: 'San Francisco'
    }
];
const sample = {
    "id": 4,
    "user_name": "sdfasdfdsaf",
    "user_email": "2910842215@qq.com",
    "user_date_of_birth": null,
    "user_mobile": "15636128575",
    "user_address": null
}

export default class AccountProfileDetails extends React.Component {
    const

    constructor(props) {
        super(props);
        this.state = {user: {}, id: props.id, isLoad: false, new_user: {}}
    }

    UNSAFE_componentWillMount() {
        const that = this
        const id = this.state.id === null ? sessionStorage.getItem("id") : id
        axios.get(`http://localhost:5000/user_information/user_profile/${id}`)
            .then(r => {
                // console.log(r.data)
                that.setState({"user": r.data, "isLoad": true})
            })
            .catch(r => console.log(r))
    }

    handleChange = (event) => {
        this.setState({
            user: {
                [event.target.name]: event.target.value
            }
        });

    };

    render() {
        return (

            <form
                autoComplete="off"
            >
                <Card>
                    <CardHeader
                        subheader="We provide gift for YOU!"
                        title="Profile"
                    />
                    <Divider/>
                    <CardContent>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Read Only"

                                    name="user_name"
                                    onChange={this.handleChange}
                                    required
                                    value={this.state.user.user_name}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Read Only"
                                    name="lastName"
                                    onChange={this.handleChange}
                                    required
                                    value={this.state.user.user_name}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Read Only"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    name="user_email"
                                    onChange={this.handleChange}
                                    required
                                    value={this.state.user.user_email}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    name="phone"
                                    onChange={this.handleChange}
                                    value={this.state.user.user_email}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    helperText="Please input your address!"
                                    fullWidth
                                    label="Country"
                                    name="country"
                                    onChange={this.handleChange}
                                    required
                                    value={this.state.user.user_email}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Select State"
                                    name="state"
                                    onChange={this.handleChange}
                                    required
                                    select
                                    SelectProps={{native: true}}
                                    value={this.state.user.user_email}
                                    variant="outlined"
                                >
                                    {states.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider/>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            p: 2
                        }}
                    >
                        <Button
                            color="primary"
                            variant="contained"
                        >
                            Save details
                        </Button>
                    </Box>
                </Card>
            </form>
        )
    }


}

