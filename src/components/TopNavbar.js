import React from "react";
import { Link } from "react-router-dom";
function TopNavbar() {


    return(
        <nav className="navbar navbar-expand-lg">
               <div className="container-fluid">
                   <button id="sidebarCollapse" className="btn">
                      <i className="bi bi-list"></i>
                    </button>
                    
                <div className="topbarheader">
                   <h1>Ellcart</h1>
                </div>
                    
                  <div className="RightCol">
                       <ul className="MainList">
                           <li className="welcometext">Welcome - Name</li>
                           <li><a href="#"><i className="bi bi-bell"></i></a></li>

                           <li className="dropdown">
                            <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                             <i className="bi bi-person-circle"></i>
                            </a>
                                <ul className="dropdown-menu">
                        <Link className="dropdown-item" to="/frontend/Changepassword">Change Password</Link>
                        <Link className="dropdown-item" to="/frontend">Logout</Link>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                         </ul>                      
                    </div>
                </div>
            </nav>
    );
}

export default TopNavbar;