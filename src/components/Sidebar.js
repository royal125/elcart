import React from "react";
import { Link } from "react-router-dom";

function Sidebar(){ 


    return(
        <>

         <nav id="sidebar">
            <div className="sidebar-header">
                <h1>Ellcart</h1>
            </div>      
            <ul className="sidebarList list-unstyled">
               <h2><Link to="/frontend/DashboardMain"><i class="bi bi-grid-fill"></i>Dashboard</Link></h2>
               
                 <li>          
                    <a href="/frontend/#ProductsTab" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="bi bi-cart-fill"></i>Products</a>
                    <ul className="collapse list-unstyled" id="ProductsTab">
                        <li>
                            <Link to="/frontend/ProductCategories">Product Categories</Link>
                        </li>
                        <li>
                            <Link to="/frontend/Products">Products</Link>
                        </li>
                        <li>
                            <Link to="/frontend/ProductAttributes">Product Attributes</Link>
                        </li>
                    </ul>
                </li>
                
                <li>
                    <a href="#OnlineStoreTab" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="bi bi-shop-window"></i>Online Store</a>
                    <ul className="collapse list-unstyled" id="OnlineStoreTab">
                        <li>
                            <Link to="/frontend/ProductListing">Product Listing</Link>
                        </li>
                        <li>
                            <Link to="/frontend/BulkUpdate">Bulk Price Update</Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <Link to="/frontend/Customers"><i className="bi bi-person-fill"></i>Customers</Link>
                </li>
                
                <li>
                    <Link to="/frontend/Orders"><i className="bi bi-bell-fill"></i>Orders</Link>
                </li>
             
                
                 <li>
                    <a href="/frontend/#MarketingTab" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="bi bi-bag-dash-fill"></i>Marketing</a>
                    <ul className="collapse list-unstyled" id="MarketingTab">
                        <li>
                            <Link to="/frontend/EmailMarketing">E-mail Marketing</Link>
                        </li>
                    </ul>
                 </li>
                
                 <li>
                    <a href="/frontend/#SettingTab" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="bi bi-gear-fill"></i>Settings</a>
                    <ul className="collapse list-unstyled" id="SettingTab">
                        <li>
                            <Link to="/frontend/Marketplaces">Marketplaces</Link>
                        </li>
                        <li>
                            <Link to="/frontend/CategoryMapping">Category Mapping</Link>
                        </li>
                    </ul>
                 </li>
            </ul>
        </nav>



</>
);
};

export default Sidebar;