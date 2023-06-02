import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/TopNavbar';
import CookieBanner from './components/CookieBanner.jsx';

const IndexPageLayout = () => {
  return (
    <div className="DashboardWrapper">
      <Sidebar />

      <div id="contentBox">
        <TopNavbar />
        <CookieBanner key="cookie-banner" />
        <Outlet />
      </div>
    </div>
  );
};

export default IndexPageLayout;