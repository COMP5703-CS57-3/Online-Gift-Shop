import * as React from 'react';
import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link, useNavigate} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import axios from "axios";
import Copyright from "./cpright";
import FastDial from "./FastDial";
import {checkEmail} from "../logic/ValCheck";
import Background from "../picture/background.png";

const theme = createTheme();

export default function LogIn(props) {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const HandleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        // console.log(name,value)
        // console.log(this)
        this.setState({[name]: value},)
    }
    const navigate=useNavigate()
    const HandleClick = () => {
        if (Password === "") {
            alert("please input password")
        } else if (checkEmail(Email) !== true) {
            alert("please input valid Email")
        } else {
            // console.log(this.state.Username,this.state.Password)
            axios.post('http://localhost:5000/login_signup/login', {
                user_email: Email,
                user_password: Password
            }).then((response) => {
                let status = response;
                console.log(status, 1)
                if (status.data.message === 'User login successfully') {
                    console.log("Success!")
                    sessionStorage.setItem("id",response.data.id)
                    navigate("/")
                } else {
                    console.log("Error!")
                }
            })
                .catch((response) => {
                    if (response.toString().indexOf("403") !== -1) {
                        alert("User did not exit, please sign up first")
                    } else if (response.toString().indexOf("404") !== -1) {
                        alert("Unknown Error")
                    } else if (response.toString().indexOf("400") !== -1) {
                        alert("Please input correct password")
                    }
                });
        }
    }


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
                        Sign In
                    </Typography>

                    <Box component="form" noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="Email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="Password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            // type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                            onClick={() => HandleClick()}
                        >
                            Sign In
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link to={{pathname: "/findpwd"}}>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to={{pathname: "/signup"}}>
                                    Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container><FastDial/>
        </ThemeProvider>
    );

}