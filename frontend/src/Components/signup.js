import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Link} from "react-router";
import {checkEmail, checkNickName, checkPassword, checkPhone} from "../logic/ValCheck";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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
            errNick: "",
            errEmail: "",
            errPhone: "",
            errPwd: "",
            errCPwd: "",
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

        if (res_name === true && res_email === true && res_phone === true && res_password === true) {
            this.setState({isShow: false})
            console.log("send message to backend")
        } else {
            console.log(res_phone)
            this.setState({
                isShow: true,
                errNick: res_name === true ? "" : res_name,
                errEmail: res_email === true ? "" : res_email,
                errPhone: res_phone === true ? "" : res_phone,
                errPwd: res_password["Pwd"] === true ? "" : res_password["Pwd"],
                errCPwd: res_password["CPwd"] === true ? "" : res_password["CPwd"],
            }, () => {
                // console.log(this.state)
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
                                id="email"
                                label="Nick Name"
                                name="Email"
                                // autoComplete="email"
                                autoFocus
                                onChange={(e) => this.HandleChange(e)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="Password"
                                label="Email Address"
                                id="password"
                                // autoComplete="current-password"
                                onChange={(e) => this.HandleChange(e)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="Password"
                                label="Phone Number"
                                id="password"
                                // autoComplete="current-password"
                                onChange={(e) => this.HandleChange(e)}
                            />
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
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="Password"
                                label="Please Confirm Password"
                                type="password"
                                // id="Cpassword"
                                // autoComplete="current-password"
                                onChange={(e) => this.HandleChange(e)}
                            />

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
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
                                    <Link to="signup" variant="body2">
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