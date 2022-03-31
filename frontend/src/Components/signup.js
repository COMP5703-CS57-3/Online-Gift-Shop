import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Copyright from "./cpright";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import {checkEmail, checkNickName, checkPassword, checkPhone} from "../logic/ValCheck";
import {Link} from "react-router-dom";
import {Alert, Collapse} from "@mui/material";
import axios from "axios";

const theme = createTheme();

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            Password: "",
            Username: "",
            Phone: "",
            ConfirmedPwd: "",
            isShow: false,
            errNick: true,
            errEmail: true,
            errPhone: true,
            errPwd: true,
            errCPwd: true,
        }
    }

    HandleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        // console.log(name,value)
        // console.log(this)
        this.setState({[name]: value},)


    }
    HandleClick = () => {
        const res_name = checkNickName(this.state.Username)
        const res_email = checkEmail(this.state.Email)
        const res_phone = checkPhone(this.state.Phone)
        const res_password = checkPassword(this.state.Password, this.state.ConfirmedPwd)

        if (res_name === true && res_email === true && res_phone === true && res_password["Pwd"] === true && res_password["CPwd"] === true) {
            axios.post('http://localhost:5000/login_signup/sign_up', {
                user_name:this.state.Username,
                user_email: this.state.Email,
                user_mobile:this.state.Phone,
                user_password: this.state.Password
            }).then((response) => {
                console.log(response, 1)
                if (response.data.message === '"User successfully sign up"') {
                    console.log("Success!")
                } else {
                    console.log("Error!")
                }
            })
                .catch((response) => {
                    // if (response.toString().indexOf("403") !== -1) {
                    //     alert("User did not exit, please sign up first")
                    // } else if (response.toString().indexOf("404") !== -1) {
                    //     alert("Unknown Error")
                    // } else if (response.toString().indexOf("400") !== -1) {
                    //     alert("Please input correct password")
                    // }
                    console.log(response,2)
                });
        } else {
            console.log(res_phone)
            this.setState({
                // isShow: true,
                errNick: res_name,
                errEmail: res_email,
                errPhone: res_phone,
                errPwd: res_password["Pwd"],
                errCPwd: res_password["CPwd"],
            }, () => {
            })

        }
    }

    render() {

        return (
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <Box component="form" noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth

                                label="Nick Name"
                                name="Username"
                                // autoComplete="email"
                                autoFocus
                                onChange={(e) => this.HandleChange(e)}
                            />
                            <Collapse in={this.state.errNick !== true}>
                                <Alert
                                    severity="info"
                                >
                                    {this.state.errNick}
                                </Alert>
                            </Collapse>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="Email"
                                label="Email Address"
                                // id="password"
                                // autoComplete="current-password"
                                onChange={(e) => this.HandleChange(e)}
                            />
                            <Collapse in={this.state.errEmail !== true}>
                                <Alert
                                    severity="info"
                                >
                                    {this.state.errEmail}
                                </Alert>
                            </Collapse>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="Phone"
                                label="Phone Number"
                                // id="password"
                                // autoComplete="current-password"
                                onChange={(e) => this.HandleChange(e)}
                            />
                            <Collapse in={this.state.errPhone !== true}>
                                <Alert
                                    severity="info"
                                >
                                    {this.state.errPhone}
                                </Alert>
                            </Collapse>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="Password"
                                label="Password"
                                type="password"
                                // id="password"
                                // autoComplete="current-password"
                                onChange={(e) => this.HandleChange(e)}
                            />
                            <Collapse in={this.state.errPwd !== true}>
                                <Alert
                                    severity="info"
                                >
                                    {this.state.errPwd}
                                </Alert>
                            </Collapse>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="ConfirmedPwd"
                                label="Please Confirm Password"
                                type="password"
                                // id="Cpassword"
                                // autoComplete="current-password"
                                onChange={(e) => this.HandleChange(e)}
                            />
                            <Collapse in={this.state.errCPwd !== true}>
                                <Alert
                                    severity="info"
                                >
                                    {this.state.errCPwd}
                                </Alert>
                            </Collapse>

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                            <Box component="span" fullWidth sx={{p: 8,}}/>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                                onClick={() => this.HandleClick()}
                            >
                                Sign up
                            </Button>
                            <Grid container>
                                <Grid item>

                                    <Link to={{pathname: "/login"}}>
                                        Sign In
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{mt: 8, mb: 4}}/>
                </Container>
            </ThemeProvider>
        );
    }
}