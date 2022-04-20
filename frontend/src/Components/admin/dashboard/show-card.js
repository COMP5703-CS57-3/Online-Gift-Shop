import {Avatar, Card, CardContent, Grid, Typography} from '@mui/material';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import React, {useEffect} from "react";
import Loading from "../../normal/Loading";
import {useAdmin} from "../../../tools/useAdmin";

export const ShowCard = ({Title,getNumberFunc,Number,icon}) => {

    // const {getTotalAccount, totalAccountNumber} = useAdmin()

    useEffect(() => {
        getNumberFunc();
        // console.log(Title)
    }, [])

    return (
        <Card >
            <CardContent>
                <Grid
                    container
                    spacing={3}
                    sx={{justifyContent: 'space-between'}}
                >
                    <Grid item>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="overline"
                        >
                            {Title}
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h4"
                        >
                            {Number}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            sx={{
                                backgroundColor: 'success.main',
                                height: 40,
                                width: 40
                            }}
                        >
                            {icon}
                        </Avatar>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    );
}
