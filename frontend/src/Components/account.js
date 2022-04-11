import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AccountProfile from "./account/account-profile";
import AccountProfileDetails from "./account/account-profile-details";
import Box from "@mui/material/Box";
import Background from "../picture/background.png";
import {_local} from "../logic/local$sess";
import BeforEach from "../router/BeforEach";

export default function Account(props) {
    const id = _local.get("id")
    BeforEach()
    return (
        <>

            <div style={{
                width: '100%',
                height: 1500,
                backgroundImage: "url(" + Background + ")",
                backgroundRepeat: "no-repeat"
            }}>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        py: 8
                    }}
                >
                    <Container maxWidth="lg">
                        <Typography
                            sx={{mb: 3}}
                            variant="h4"
                        >
                            Account
                        </Typography>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                lg={4}
                                md={6}
                                xs={12}
                            >
                                <AccountProfile id={id}/>
                            </Grid>
                            <Grid
                                item
                                lg={8}
                                md={6}
                                xs={12}
                            >
                                <AccountProfileDetails id={id}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>
        </>
    );
}
