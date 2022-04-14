import React from "react";
import AdminProvider, {useAdmin} from "../../tools/useAdmin";
import Adsiderbar from "../Adsiderbar";
import {Box, Container, Grid} from '@mui/material';
import {ShowCard} from "./dashboard/show-card";
import DashItem from "./dashboard/dash";

export default function Dashboard() {
    console.log("1")
    return (
        <AdminProvider>
            <Adsiderbar/>


        </AdminProvider>
    )
}