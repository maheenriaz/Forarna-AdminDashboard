import React from 'react';
import ReactDom from 'react-dom'
import {browserHistory} from "react-router";
import browser from '../1.jpg';
import '../App.css';
import Forarna from '../forarna.jpg';
import {Link,NavLink} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'

class AdminList extends React.Component {
  onNavigateHome() {
    this.props.history.push("/AdminDetails");
}
onNavigateHome2() {
  this.props.history.push("/AdminList");
}
render(){ 
    return (
      <div>
     
        <div className="jumbotron" style={{height:'100%'}}>
  
     <div className="container-fluid" >
             <br></br><br></br>
              <div className="row">
                   <div className="col-sm-3"  id="personal_dashboard" >
                   <br></br>
                      <h2 id="comp_details" className="txt" onClick={this.onNavigateHome.bind(this)}>Add Admin</h2>
                    <hr></hr>
                         <h2 id="comp_details" className="txt" onClick={this.onNavigateHome2.bind(this)}>Manage Admin</h2>
                          <hr></hr>

                           
        </div>
  
               <div className="col-sm-9" style={{backgroundColor:'#e9ecef'}} >
 <div className="row">
                          <div className="col-sm-12"  id="side2" >
                                 <center>
                                    <form className="col-md-12" id="company_registration" >
                                    <br></br> <br></br> <br></br>
                                     <h1 id="forona_text" style={{fontSize:'40px'}}><b>Admin List</b></h1>
                                   <br></br> <br></br> <br></br>
                                           <div className="col s2 m6" id="card3">
                                                      <div className="card " style={{backgroundColor:'white'}}>
                                                          <div class="row">
                                                              <div class="col-sm-6" >
                                                              <div className="col-sm-2">
                                                                 <img src={browser} style={{height:'90px',width:'90px',marginTop:'3px',borderRadius:'30px'}}/>
                                                              </div>
                                                               <div className="col-sm-5">
                                                               <p id="cl">Admin Name</p>
                                                              <p id="cl">Designation</p>
                                                              </div>
                                                             
                                                              </div>
                                                              <div class="col-sm-6" >
                                                               
                                                                   <div className="col-sm-12">
                                                                     <p style={{color:' #4EC2A4 '}}><b>Shortlist |Delete</b></p>
                                                                   </div>
                                                                    
                                                              </div>
                                                            </div>  
                                                         
                                                      </div>
                                                    </div>
                                              <div className="col s2 m6" id="card3">
                                                      <div className="card " style={{backgroundColor:'white'}}>
                                                          <div class="row">
                                                              <div class="col-sm-6" >
                                                              <div className="col-sm-2">
                                                                 <img src={browser} style={{height:'90px',width:'90px',marginTop:'3px',borderRadius:'30px'}}/>
                                                              </div>
                                                               <div className="col-sm-5">
                                                               <p>Admin Name</p>
                                                              <p>Designation</p>
                                                              </div>
                                                             
                                                              </div>
                                                              <div class="col-sm-6" >
                                                            
                                                                   <div className="col-sm-12">
                                                                     <p style={{color:' #4EC2A4 '}}><b>Shortlist|Delete</b></p>
                                                                   </div>
                                                                    
                                                              </div>
                                                            </div>  
                                                         
                                                      </div>
                                                    </div>

                                                      <div className="col s2 m6" id="card3">
                                                      <div className="card " style={{backgroundColor:'white'}}>
                                                          <div class="row">
                                                              <div class="col-sm-6" >
                                                              <div className="col-sm-2">
                                                                 <img src={browser} style={{height:'90px',width:'90px',marginTop:'3px',borderRadius:'30px'}}/>
                                                              </div>
                                                               <div className="col-sm-5">
                                                               <p>Admin Name</p>
                                                              <p>Designation</p>
                                                              </div>
                                                             
                                                              </div>
                                                              <div class="col-sm-6" >
                                                           
                                                                   <div className="col-sm-12">
                                                                     <p style={{color:' #4EC2A4 '}}><b>Shortlist|Delete</b></p>
                                                                   </div>
                                                                    
                                                              </div>
                                                            </div>  
                                                         
                                                      </div>
                                                    </div>
                                         </form>   

                                  </center>
                           </div>
                     </div>
             



 </div>
  </div>
      </div>






      







 </div>
    
   </div>

    );

}
}





export default AdminList;
