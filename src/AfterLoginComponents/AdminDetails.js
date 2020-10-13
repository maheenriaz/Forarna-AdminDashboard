import React from 'react';
import ReactDom from 'react-dom'
import {browserHistory} from "react-router";
import browser from '../1.jpg';
import '../App.css';
import img1 from '../../src/1.jpg'
import Forarna from '../forarna.jpg';
import {Link,NavLink} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'

class AdminDetails extends React.Component {
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
               <div className="col-sm-12"  id="side2">
                             <center>
                                 <form className="col-md-12" id="personal-info" ><br></br><br></br>
                                   <br></br>
                                   <div class="row" style={{backgroundColor:"#e9ecef"}}>
                                      <div class="col-12">
                                      <br></br><br></br>
                                      <button type="button" id="co" style={{display:'inline-block'}} class="btn btn-primary" >Browse</button>
                                      <br></br><br></br>
                                        </div>
 
                                    </div>
                <br></br>  <br></br>  <br></br>
                <center> 
                <div class="row">
                    <div class="col-12" id="row-c">
                    <img src={img1} id="imga" />
                
                    <div class="col-6" id="im1"  >
                    <button type="button" id="b" style={{display:'inline-block'}} class="btn btn-primary" >Browse</button>

                      </div>
                  </div>
            </div>      
    
            </center>
            <br></br><br></br><br></br><br></br><br></br>
                                   <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                             
                                      <div className="row align-items-center">
                                              <div className="col">
                                                <input type="text" className="form-control" placeholder="First Name" />
                                              </div>
                                              <div className="col">
                                                <input type="text" className="form-control" placeholder="Last Name"/>
                                              </div>
                                      </div>
                                      <div className="row align-items-center mt-4">
                                         <div className="col">
                                                <input type="Number" className="form-control" placeholder="Phone Number"/>
                                              </div>
                                              <div className="col">
                                                <input type="Email" className="form-control" placeholder="Email"/>
                                              </div>
                                      </div>
                                <div className="row align-items-center mt-4">
                                  <div className="col">
                                    <input type="password" className="form-control" placeholder="Password"/>
                                  </div>
                                  <div className="col">
                                    <input type="password" className="form-control" placeholder="Confirm Password"/>
                                  </div>
                                </div>

                             



                                 <br></br><br></br><br></br>
                            </div>
                          </div>   
                        </div>
                                         </form>
  </center>
 </div>
</div>


  <center>
     <div className="col-sm-12" id="Update" >
     <br></br><br></br>
     <button type="button" className="btn btn-primary" id="register_submit" >Add</button>
     <br></br><br></br>
 <br></br><br></br><br></br>
     </div>
 </center>
       


                      


 </div>
  </div>
      </div>






      







 </div>
    
   </div>

    );

}
}





export default AdminDetails;
