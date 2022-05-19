import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
  import CheckInView from './Components/CheckInView';
  import CheckOutView from './Components/CheckOutView';
import { HashRouter, Route,Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
       <div className='index' >
              <Routes>
               <Route path="/" element={<App/>} />         
               <Route  path="/CheckInView"  element={<CheckInView/>} />
               <Route  path="/CheckOutView" element={<CheckOutView/>} />
             </Routes>
       </div>                              
     </HashRouter> );

     
 