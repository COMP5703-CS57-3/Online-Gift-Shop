import React from 'react';
import DashboardSidebar from "../Components/siderbar/dashboard-sidebar";
// import { DashboardNavbar } from './dashboard-navbar';
// import {AdminSiderHeader} from "./admin/AdminSiderHeader";

// const DashboardLayoutRoot = styled('div')(({ theme }) => ({
//   display: 'flex',
//   flex: '1 1 auto',
//   maxWidth: '100%',
//   paddingTop: 64,
//   [theme.breakpoints.up('lg')]: {
//     paddingLeft: 280
//   }
// }));

export const Adsiderbar = () => {


    return (
        <>
            {/*<DashboardLayoutRoot>*/}
            {/*</DashboardLayoutRoot>*/}
            {/*<DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />*/}
            <DashboardSidebar
            />

        </>
    );
};

export default Adsiderbar;