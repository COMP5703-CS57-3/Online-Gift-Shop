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
import {checkNickName, checkPhone} from "../../logic/ValCheck";
import {load} from "react-cookies";
import {ip} from "../../../node_modules/ip"

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
    "user_name": "local",
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
            isReadonly: true,
            errName: "",
            errPhone: ""
        }
    }

    UNSAFE_componentWillMount() {
        const that = this
        axios.get(`http://`+ ip + `/api/user_information/user_profile/${this.state.id}`)
            .then(r => {
                // console.log(r.data)
                const address = r.data.user_address ? r.data.user_address.split(",") : ['', '', '']
                const user = Object.assign(r.data, {
                    "user_country": address[0] === "" ? "Australia" : address[0],
                    "user_state": address[1] === "" ? "New South Wales" : address[1],
                    "user_detail_street": address[2]
                })


                that.setState({
                    "user": user
                })
                that.setState({
                    "new_user": user
                })
                that.setState({"isLoad": true})

            })
            .catch(r => {
                const user = sample
                const address = user.user_address ? user.user_address.split(",") : ['', '', '']
                that.setState({
                    "user": Object.assign(user, {
                        "user_country": address[0] === "" ? "Australia" : address[0],
                        "user_state": address[1] === "" ? "New South Wales" : address[1],
                        "user_detail_street": address[2]
                    })
                })
                that.setState({
                    "new_user": this.state.user
                })
                that.setState({"isLoad": true})

            })
    }

    componentWillUnmount() {
        this.setState = () => false;
    }


    handleChange = (event) => {
        // console.log(this.state)
        const data = this.state.new_user
        if (event && event.target) {
            data[[event.target.name]] = event.target.value

            this.setState({
                new_user: data
            });
        } else {
            data["user_date_of_birth"] = event?event.toString().slice(0, -27):""
            this.setState({new_user: data})

        }
        // console.log(this.state.user.user_date_of_birth)
        this.setState({errName: "", errPhone: ""})

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
                                    onChange={(e) => this.handleChange(e)}
                                    required
                                    error={this.state.errName !== ""}
                                    helperText={this.state.errName}
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
                                    onChange={(e) => this.handleChange(e)}
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
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        fullWidth
                                        disabled={this.state.isReadonly}
                                        label="Birthday"
                                        value={this.state.isReadonly ? this.state.user.user_date_of_birth : this.state.new_user.user_date_of_birth}
                                        onChange={(newVal) =>
                                            this.handleChange(newVal)
                                        }
                                        renderInput={(params) => <TextField {...params}
                                                                            helperText={params ? "" : "Please input your Birthday"}/>}
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
                                    error={this.state.errPhone !== ""}
                                    helperText={this.state.errPhone}
                                    onChange={(e) => this.handleChange(e)}
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
                                    onChange={(e) => this.handleChange(e)}
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
                                    onChange={(e) => this.handleChange(e)}
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
                                            onClick={(e) => this.handleChange(e)}
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
                                    onChange={(e) => this.handleChange(e)}
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
                                    onClick={() => this.Submit()}
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


    Submit() {
        if (!this.state.isReadonly) { //submit
            // console.log(this.state.new_user)

            const data = this.state.new_user
            data["user_address"] = [data["user_country"], data["user_state"], data["user_detail_street"]].join(", ")
            // this.setState({new_user: this.state.user})
            const that = this
            // console.log(sessionStorage.getItem("id"))
            const res_name = checkNickName(data.user_name)
            const res_phone = checkPhone(data.user_mobile)
            console.log(res_name === true, res_phone === true)
            if (res_name === true && res_phone === true) {
                axios.put("http://" + ip +"/api/user_information/user_profile/update_user_information", {

                        "id": load("login"),
                        "user_name": data.user_name,
                        "user_mobile": data.user_mobile,
                        "user_date_of_birth": data.user_date_of_birth,
                        "user_address": data.user_address
                    }
                ).then(
                    that.setState({user: data, isReadonly: true}) //after axios
                    // console.log("success")
                ).catch(
                    r => console.log(r)
                )
            } else {
                if (res_name !== true) {
                    this.setState({errName: res_name})
                }
                if (res_phone !== true) {
                    this.setState({errPhone: res_phone})
                }
            }


        } else {
            this.setState({isReadonly: false})
        }

    }


    ListState(user_country) {
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

