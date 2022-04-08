import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import {TextField} from "@material-ui/core";
import Button from "@mui/material/Button";

const steps = ['Please input your email', 'Please input validation code', 'Finish'];

export default function ForgetPassword() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [errEmail, setErrEmail] = React.useState(true);

    const handleNext = () => {

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    function HandleUserChange(e) {
        return undefined;
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
                        {activeStep === 1 ?
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="user_email"
                                label="Email"
                                error={errEmail !== true}
                                helperText={errEmail !== true ? errEmail : ""}
                                // onChange={(e) => HandleUserChange(e)}
                                    />:<TextField
                                margin="normal"
                                required
                                fullWidth
                                name="Password"
                                label="Password"
                                type="password"
                                error={errEmail !== true}
                                helperText={errEmail !== true ? errEmail : ""}
                                onChange={(e) => HandleUserChange(e)}/>}
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

                                    <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                    </Box>
                                    </React.Fragment>
                                    )}
                                    </Box>
                                    </Card>
                                    );
                                    }