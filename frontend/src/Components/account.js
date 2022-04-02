import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {AccountProfile} from "./account/account-profile";
import {AccountProfileDetails} from "./account/account-profile-details";
import Box from "@mui/material/Box";
import Head from 'next/head';

export default function Account() {
    return (
        <>
            <Head>
                <title>
                    Account | Material Kit
                </title>
            </Head>
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
                            <AccountProfile/>
                        </Grid>
                        <Grid
                            item
                            lg={8}
                            md={6}
                            xs={12}
                        >
                            <AccountProfileDetails/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
