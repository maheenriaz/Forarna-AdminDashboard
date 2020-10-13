import React from 'react';
import ReactDom from 'react-dom'
import logo from './logo.svg';
import './App.css';

import LoginNavbar from './AfterLoginComponents/LoginNavbar'
import AdminDetails from './AfterLoginComponents/AdminDetails'
import AdminList from './AfterLoginComponents/AdminList'

import {BrowserRouter,Route} from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
  <BrowserRouter>
     
		
    <LoginNavbar />
      
           <Route  path="/AdminDetails" component={AdminDetails}  />
           <Route  path="/AdminList" component={AdminList}  />
        
         
        
    
      </BrowserRouter>
    </div>
  );
}

export default App;
