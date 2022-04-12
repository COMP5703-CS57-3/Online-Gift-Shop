import React from "react";
import AdminProvider from "../../tools/useAdmin";
import {Outlet} from "react-router-dom";
import BeforEach from "../../router/BeforEach";

export default function Dashboard() {
    return (
        <AdminProvider>
            this is admin
            <BeforEach/>
        </AdminProvider>
    )
}