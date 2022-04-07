import addrArea from "../../data/state";
import * as React from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    InputAdornment,
    TextField
} from '@mui/material';
import axios from "axios";
import Stack from "@mui/material/Stack";
import {AccountCircle} from "@mui/icons-material";
import {DatePicker, LocalizationProvider} from "@mui/lab";
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
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
        this.state = {
            user: {},
            id: props.id,
            isLoad: false,
            new_user: {
                "id": "",
                "user_name": "",
                "user_email": "",
                "user_date_of_birth": "",
                "user_mobile": "",
                "user_country": "",
                "user_state": "",
                "user_detail_street": "",
                "user_address": ""
            },
            isReadonly: true
        }
    }

    UNSAFE_componentWillMount() {
        const that = this
        let id = this.state.id === null ? sessionStorage.getItem("id") : id
        console.log(id)
        axios.get(`http://localhost:5000/user_information/user_profile/${id}`)
            .then(r => {
                // console.log(r.data)
                that.setState({"user": r.data, "isLoad": true})
                that.setState({"new_user": {"id": r.data.id, "user_email": r.data.user_email}})
                const address = r.data
            })
            .catch(r => console.log(r))
    }

    handleChange = (event) => {
        this.setState({
            new_user: {
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
                                    label="Nick Name"
                                    name="user_name"
                                    onChange={this.handleChange}
                                    required
                                    value={this.state.isReadonly ? this.state.user.user_name : this.state.new_user.user_name}
                                    variant="outlined"
                                    InputProps={{
                                        readOnly: this.state.isReadonly,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle/>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="user_email"
                                    onChange={this.handleChange}
                                    InputProps={{
                                        readOnly: true,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle/>
                                            </InputAdornment>
                                        ),
                                    }}
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
                                {/*<TextField*/}
                                {/*    fullWidth*/}
                                {/*    label="Birthday"*/}
                                {/*    helperText="Please input your birthday!"*/}
                                {/*    name="user_date_of_birth"*/}
                                {/*    onChange={this.handleChange}*/}
                                {/*    required*/}
                                {/*    InputProps={{*/}
                                {/*        readOnly: this.state.isReadonly,*/}
                                {/*        startAdornment: (*/}
                                {/*            <InputAdornment position="start">*/}
                                {/*                <AccountCircle/>*/}
                                {/*            </InputAdornment>*/}
                                {/*        ),*/}
                                {/*    }}*/}
                                {/*    value={this.state.isReadonly ? this.state.user.user_date_of_birth : this.state.user.user_date_of_birth}*/}
                                {/*    variant="outlined"*/}
                                {/*/>*/}
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Birthday"
                                        value={this.state.user.user_date_of_birth}
                                        onChange={(newValue) => {
                                            this.handleChange()
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    name="user_mobile"
                                    onChange={this.handleChange}
                                    InputProps={{
                                        readOnly: this.state.isReadonly,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle/>
                                            </InputAdornment>
                                        ),
                                    }}
                                    required
                                    value={this.state.isReadonly ? this.state.user.user_mobile : this.state.new_user.user_mobile}
                                    variant="outlined"
                                />
                            </Grid>
                            <Divider/>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField

                                    fullWidth
                                    label="Country"
                                    name="user_country"
                                    onChange={this.handleChange}
                                    select
                                    SelectProps={{native: true}}
                                    required
                                    disabled={this.state.isReadonly}
                                    InputProps={{
                                        readOnly: this.state.isReadonly,
                                    }}
                                    value={this.state.isReadonly ? this.state.user.user_country : this.state.new_user.user_country}
                                    variant="outlined"
                                >
                                    {addrArea.map((option) => (
                                        <option
                                            key={option.country.value}
                                            value={option.country.value}
                                        >
                                            {option.country.label}
                                        </option>
                                    ))}
                                </TextField>
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="State"
                                    name="user_state"
                                    onChange={this.handleChange}
                                    disabled={this.state.isReadonly}
                                    required
                                    select
                                    SelectProps={{native: true}}
                                    value={this.state.isReadonly ? this.state.user.user_state : this.state.new_user.user_state}
                                    variant="outlined"
                                >
                                    {this.ListState(this.state.new_user.user_country).map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid
                                item
                                md={12}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Street"
                                    name="user_detail_street"
                                    onChange={this.handleChange}
                                    InputProps={{
                                        readOnly: this.state.isReadonly,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle/>
                                            </InputAdornment>
                                        ),
                                    }}
                                    required
                                    value={this.state.isReadonly ? this.state.user.user_detail_street : this.state.new_user.user_detail_street}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                p: 2
                            }}
                        >
                            <Stack direction="row" spacing={2}>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={() => this.HandleClick()}
                                >
                                    {this.state.isReadonly ? "Change Profiles" : "Save details"}
                                </Button>
                                {!this.state.isReadonly ? <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={() => this.setState({isReadonly: true})}
                                >
                                    {"Cancel"}
                                </Button> : <div/>}
                            </Stack>

                        </Box>
                    </CardActions>
                </Card>
            </form>
        )
    }


    HandleClick() {
        if (!this.state.isReadonly) {
            console.log(this.state.user)
        } else {
            this.setState({
                new_user: {
                    "id": "",
                    "user_name": "",
                    "user_email": "",
                    "user_date_of_birth": "",
                    "user_mobile": "",
                    "user_country": "",
                    "user_state": "",
                    "user_detail_street": "",
                    "user_address": ""
                }
            })
        }
        this.setState({isReadonly: !this.state.isReadonly})
    }

    ListState(user_country) {
        console.log(user_country)
        if (user_country === "" || user_country === undefined) {
            user_country = "Australia"
        }
        for (let key in addrArea) {
            if (addrArea[key].country.label === user_country) {
                return addrArea[key].states
            }
        }
        return states
    }
}

