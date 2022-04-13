import React, {useState} from "react";
import AdminProvider from "../../tools/useAdmin";
import {Outlet} from "react-router-dom";
import BeforEach from "../../router/BeforEach";
import AdminHeader from "../siderbar/AdminHeader";
import Adsiderbar from "../Adsiderbar";

export default function Dashboard() {
    return (
        <AdminProvider>
            <Adsiderbar/>
            <Outlet/>
            this is admin
        </AdminProvider>
    )
}