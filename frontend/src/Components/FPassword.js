import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import {TextField} from "@material-ui/core";
import Button from "@mui/material/Button";
import axios from "axios";
import {checkEmail, checkPassword} from "../logic/ValCheck";
import {useNavigate} from "react-router-dom";
import {ip} from "../ip";

const steps = ['Please input your email', 'Please input validation code', 'Please input your new password', 'Finish'];

export default function FPassword() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [errEmail, setErrEmail] = React.useState("");
    const [errValidation, setErrValidation] = React.useState("");
    const [errPassword, setErrPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [validation, setValidation] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isErr, setIsErr] = React.useState(false);
    const navigate = useNavigate()
    const handleNext = () => {
        if (activeStep === 0) {

            if (email !== "") {
                if (checkEmail(email) === true) {
                    axios.post('http://' + ip +':5000/api/login_signup/get_validation', {
                        user_email: email,
                    }).then((response) => {

                        setActiveStep((prevActiveStep) => prevActiveStep + 1);
                    }).catch((response) => {
                        // console.log(response)
                        if (response.toString().indexOf("400") !== -1) {
                            setErrEmail("* No such User")
                            setIsErr(true)
                        } else {
                            setErrEmail("* Backend Error")
                        }

                        })
                    } else {
                        setErrEmail("* Please input a valid Email")
                        setIsErr(true)
                    }
                } else {
                    setErrEmail("* Please input your Email")
                    setIsErr(true)
                }
            } else if (activeStep === 1) {
                if (validation !== "") {
                    setActiveStep((prevActiveStep) => prevActiveStep + 1);
                } else {
                    setErrValidation("* Please input validation code")
                    setIsErr(true)
                }
            } else if (activeStep === 2) {
                const valPwd = checkPassword(password)

                if (valPwd["Pwd"] === true) {
                    axios.put('http://' + ip +':5000/api/login_signup/forget_password', {
                        "user_email": email,
                        "validation_code": validation,
                        "user_new_password": password
                    }).then((response) => {

                        setActiveStep((prevActiveStep) => prevActiveStep + 1);
                        setTimeout(() => navigate('/login'), 2500)
                    }).catch((response) => {
                        // console.log(response)
                        if (response.toString().indexOf("400") !== -1) {
                            setErrValidation("* Wrong Validation Code")
                            setActiveStep((prevActiveStep) => prevActiveStep - 1);
                            setIsErr(true)
                        } else {
                            setErrPassword("* Backend Error")
                        }

                    })
                } else {
                    setErrPassword(valPwd["Pwd"])
                    setIsErr(true)
                }
            } else {

                setActiveStep((prevActiveStep) => prevActiveStep + 1);

            }
        }


    ;

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setIsErr(false)
    };


    function HandleChange(e) {
        if (activeStep === 0) {
            setEmail(e.target.value)
        } else if (activeStep === 1) {
            setValidation(e.target.value)
        } else if (activeStep === 2) {
            setPassword(e.target.value)
        }
        setIsErr(false)
    }

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                //     width: "60%",
                //     height:"450"
            }}>
            <Box sx={{width: '100%', height: "450"}}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};

                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length - 1 ? (
                    <React.Fragment>
                        <Typography sx={{mt: 2, mb: 1}}>
                            {"Your password has reset"}
                        </Typography>
                        <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                            <Box sx={{flex: '1 1 auto'}}/>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{mt: 2, mb: 1}}>Step {activeStep + 1}</Typography>
                        {
                            activeStep === 0 ?
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="user_email"
                                    label="Email"
                                    value={email}
                                    error={errEmail !== ""}
                                    helperText={errEmail}
                                    onChange={(e) => HandleChange(e)}
                                /> :
                                activeStep === 1 ?
                                    <>
                                        <Box> {"We have sent you the validation code into your Email.\n Please check it out"}</Box>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="Validation"
                                            label="Validation"
                                            value={validation}
                                            error={errValidation !== ""}
                                            helperText={errValidation}
                                            onChange={(e) => HandleChange(e)}/></>
                                    :
                                    //activeStep === 2 ?
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="Password"
                                        label="Password"
                                        value={password}
                                        type="password"
                                        error={errPassword !== ""}
                                        helperText={errPassword}
                                        onChange={(e) => HandleChange(e)}/>}
                        < Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{mr: 1}}
                            >
                                Back
                            </Button>
                            <Box sx={{flex: '1 1 auto'}}/>

                            <Button onClick={handleNext} disabled={isErr}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                            {/*{activeStep === steps.length - 1?<Navigate to={"/login"}/>:<span/>}*/}
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </Card>
    );
}