import React from 'react';
import ReactDom from 'react-dom'
import {browserHistory} from "react-router";

import '../App.css';
import Forarna from '../forarna.jpg';
import cartoon from '../cartoon.jpg';
import {Link,NavLink} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'

class Navbar extends React.Component {
 
render(){ 
    return (
      <div>
     
      <nav id="nav-iop" className="navbar-fixed"  id="nav-border" >
        <div className="container-fluid">
                <div className="nav-wrapper" >
                      <a href="#!" className="brand-logo" style={{color:'black'}}><img src={Forarna} width="170px" height="55px" /></a>   
                      <a className="sidenav-trigger" style={{color:'black'}} data-target="mobile-link"><i href="#" className="material-icons">Menu</i></a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down" style={{marginLeft:'180px'}}>
                           <li><NavLink to="#" id="nav-text">
                          <span className="glyphicon glyphicon-time"></span>
                          <b>Profiles</b></NavLink>
                          </li>
                           <li><NavLink to="#" id="nav-text">
                          <span className="glyphicon glyphicon-time"></span>
                          <b>Job</b></NavLink>
                          </li>
                           <li><NavLink to="#" id="nav-text">
                          <span className="glyphicon glyphicon-time"></span>
                          <b>Driver</b></NavLink>
                          </li>
                           <li><NavLink to="/AdminDetails" id="nav-text"><span className="glyphicon glyphicon-lock"></span><b>Admin</b></NavLink></li>
                          </ul>


                      <ul className="right hide-on-med-and-down">
                      <div className="col-sm-3"> 
                            <img src={cartoon} style={{width:'60px',height:'50px',borderRadius:'30px'}} />
                          </div>
                           <div className="col-sm-3">  
                                 {/* <NavLink to="/AdminDetails"><span className="glyphicon glyphicon-chevron-down" style={{fontSize:'20px',color:'black'}}></span></NavLink> */}
                                 <li class="dropdown" >
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" 
          role="button" aria-haspopup="true" aria-expanded="false">
          <span className="glyphicon glyphicon-chevron-down" 
           style={{fontSize:'20px',color:'black'}}></span> </a>
          <ul class="dropdown-menu" style={{height:'120px'}}>
            <li  ><a href="#" style={{fontSize:'18px'}}>Settings</a></li>
            <li><a href="#" style={{fontSize:'18px'}}>Profile</a></li>
            <li><a href="#" style={{fontSize:'18px'}}>Logout</a></li>
          </ul>
        </li>
   
                              </div>
                      
                        </ul>
                        
                   
                  </div>
       </div>
    </nav>
       <ul className="sidenav"  id="mobile-link"  >
            <li><NavLink to="" id="nav-text"><b>Dashboard</b></NavLink></li>
                     <li><NavLink to="#" id="nav-text">
                          <span className="glyphicon glyphicon-time"></span>
                          <b>Profiles</b></NavLink>
                          </li>
                           <li><NavLink to="#" id="nav-text">
                          <span className="glyphicon glyphicon-time"></span>
                          <b>Job</b></NavLink>
                          </li>
                           <li><NavLink to="#" id="nav-text">
                          <span className="glyphicon glyphicon-time"></span>
                          <b>Driver</b></NavLink>
                          </li>
                           <li><NavLink to="#" id="nav-text"><span className="glyphicon glyphicon-lock"></span><b>Admin</b></NavLink></li>
                        

                          <div className="col-sm-3"> 
                            <img src={cartoon} style={{width:'60px',height:'50px',borderRadius:'30px'}} />
                          </div>
                           <div className="col-sm-3">  
                           <li class="dropdown" >
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" 
          role="button" aria-haspopup="true" aria-expanded="false">
          <span className="glyphicon glyphicon-chevron-down" 
           style={{fontSize:'20px',color:'black'}}></span> </a>
          <ul class="dropdown-menu" style={{height:'140px'}}>
            <li  ><a href="#" style={{fontSize:'18px'}}>Settings</a></li>
            <li><a href="#" style={{fontSize:'18px'}}>Profile</a></li>
            <li><a href="#" style={{fontSize:'18px'}}>Logout</a></li>
          </ul>
        </li>   </div>
                      
         </ul>

                     
                     

 </div>

    );

}
}





export default Navbar;
