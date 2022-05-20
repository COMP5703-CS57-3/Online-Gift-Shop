import * as React from 'react';
import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Copyright from "../cpright";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import {checkNickName, checkPassword, checkPhone} from "../../logic/ValCheck";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {InputAdornment} from "@material-ui/core";
import {ip} from "../../ip";


const theme = createTheme();

export default function AdminSignUp() {
    const [User, setUser] = useState({
        Email: "",
        Password: "",
        Username: "",
        Phone: "",
        ConfirmedPwd: "",
    })
    const [isShow, setIsShow] = useState(false)
    const [errInfo, setErrInfo] = useState(
        {
            errNick: true,
            errEmail: true,
            errPhone: true,
            errPwd: true,
            errCPwd: true,
        }
    )
    const navigate = useNavigate()

    const HandleUserChange = (e) => {
        const data = {...User}
        data[[e.target.name]] = e.target.value
        // console.log(data)
        setUser(data)
        setErrInfo({
            errNick: true,
            errEmail: true,
            errPhone: true,
            errPwd: true,
            errCPwd: true,
        })
    }
    const HandleErrChange = (e) => {
        setErrInfo(e)
    }

    const HandleClick = () => {
        const res_name = checkNickName(User.Username)
        const res_email = true
        const res_phone = checkPhone(User.Phone)
        const res_password = checkPassword(User.Password, User.ConfirmedPwd)

        if (res_name === true && res_email === true && res_phone === true && res_password["Pwd"] === true && res_password["CPwd"] === true) {
            axios.post('http://'+ ip +'/api/admin/admin_sign_up', {
                admin_name: User.Username.trim(),
                admin_email: User.Username + "@giftshop.com",
                admin_mobile: User.Phone,
                admin_password: User.Password
            }).then((response) => {
                    // console.log(response, 1)
                    if (response.data.message === 'the admin successfully sign up') {
                        console.log("Success!")
                        navigate("/adlogin")
                    } else {
                        alert("Error!")
                    }
                }
            )
                .catch((response) => {

                    // console.log(response, 2)
                });
        } else {
            HandleErrChange({
                errNick: res_name,
                errEmail: res_email,
                errPhone: res_phone,
                errPwd: res_password["Pwd"],
                errCPwd: res_password["CPwd"],
            })


        }
    }


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm" sx={{width: "100%"}}>
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: "100%",

                    }}

                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Admin Sign Up
                    </Typography>
                    <Box component="form" noValidate sx={{
                        mt: 1, width: "100%",
                        maxWidth: 400
                    }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            error={errInfo.errNick !== true}
                            helperText={errInfo.errNick !== true ? errInfo.errNick : ""}
                            label="Nick Name"
                            name="Username"
                            value={User.Username}
                            // autoComplete="email"
                            autoFocus
                            onChange={(e) => HandleUserChange(e)}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            disabled
                            error={errInfo.errEmail !== true}
                            helperText={errInfo.errEmail !== true ? errInfo.errEmail : ""}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">{"@giftshop.com"}</InputAdornment>,
                            }}
                            name="Email"
                            label="Email Address"
                            value={User.Username}
                            // id="password"
                            // autoComplete="current-password"
                            onChange={(e) => HandleUserChange(e)}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="Phone"
                            label="Phone Number"
                            error={errInfo.errPhone !== true}
                            helperText={errInfo.errPhone !== true ? errInfo.errPhone : ""}
                            value={User.Phone}
                            // id="password"
                            // autoComplete="current-password"
                            onChange={(e) => HandleUserChange(e)}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="Password"
                            label="Password"
                            type="password"
                            error={errInfo.errPwd !== true}
                            helperText={errInfo.errPwd !== true ? errInfo.errPwd : ""}
                            value={User.Password}
                            // id="password"
                            // autoComplete="current-password"
                            onChange={(e) => HandleUserChange(e)}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="ConfirmedPwd"
                            label="Confirmed Password"
                            error={errInfo.errCPwd !== true}
                            helperText={errInfo.errCPwd !== true ? errInfo.errCPwd : ""}
                            value={User.ConfirmedPwd}
                            type="password"
                            onChange={(e) => HandleUserChange(e)}
                        />


                        {/*<Box component="span" fullWidth sx={{p: 8,}}/>*/}
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                            onClick={() => HandleClick()}
                        >
                            Sign up
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to={{pathname: "/adlogin"}}>
                                    Sign In
                                </Link>

                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    )
}
