import './App.css';


import React, { useState } from 'react';
import DashboardMain from './components/DashboardMain';
import ProductCategories from './components/ProductCategories';
import Products from './components/Products';
import ProductAttributes from './components/ProductAttributes';
import Logout from './components/Logout';
import ProductListing from './components/ProductListing';
import BulkUpdate from './components/BulkUpdate';
import Changepassword from './components/Changepassword';
import Customers from './components/Customers';
import Orders from './components/Orders';
import EmailMarketing from './components/EmailMarketing';
import Marketplaces from './components/Marketplaces';
import CategoryMapping from './components/CategoryMapping';
// import Login from './components/Login';
import UserLogin from './components/UserLogin';
import Sidebar from './components/Sidebar';
import IndexPageLayout from './IndexPageLayout';

import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom'

function App() {

  // let [token, setToken] = useState(localStorage.getItem("ElcartUserToken"));
  // let [loggedIn, setLoggedIn] = useState(true)


  return (
    <>


      <Routes>
        <Route path='/frontend' element={<UserLogin />}></Route>

        <Route path='frontend' element={<IndexPageLayout />}>
          <Route path='ProductCategories' element={<ProductCategories />}></Route>
          <Route path='Products' element={<Products />}></Route>
          <Route path='ProductAttributes' element={<ProductAttributes />}></Route>
          <Route path='ProductListing' element={<ProductListing />}></Route>
          <Route path='BulkUpdate' element={<BulkUpdate />}></Route>
          <Route path='Customers' element={<Customers />}></Route>
          <Route path='Orders' element={<Orders />}></Route>
          <Route path='EmailMarketing' element={<EmailMarketing />}></Route>
          <Route path='Marketplaces' element={<Marketplaces />}></Route>
          <Route path='CategoryMapping' element={<CategoryMapping />}></Route>
          <Route path='DashboardMain' element={<DashboardMain />}></Route>
          <Route path='Changepassword' element={<Changepassword />}></Route>
          <Route path='logout' element={<Logout />}></Route>

        </Route>

      </Routes>
    </>

  );
}

export default App;