import React, { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import DashboardSidebar from "../Components/siderbar/dashboard-sidebar";
import DashItem from "./admin/dashboard/dash";
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