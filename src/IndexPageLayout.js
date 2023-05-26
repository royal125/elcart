import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import TopNavbar from './components/TopNavbar'


export default function IndexPageLayout() {
  return (
    <>
          <div className="DashboardWrapper">
             <Sidebar/>
       

            <div id="contentBox">          
                <TopNavbar/>
                <Outlet />        
            </div>
     </div>
    </>
  )
}