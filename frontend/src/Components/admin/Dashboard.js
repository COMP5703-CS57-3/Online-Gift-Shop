import React from "react";
import AdminProvider from "../../tools/useAdmin";
import Adsiderbar from "./Adsiderbar";

export default function Dashboard() {
    return (
        <AdminProvider>
            <Adsiderbar/>
        </AdminProvider>
    )
}