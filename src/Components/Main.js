import React from "react";
 import InformationView from  "./InformationView"
 import DateToday from "./DateToday";
 import Clock from "./Clock";
 import Picture from "./Picture";
 import CheckInButton from "./CheckInButton"
 import CheckOutButton from "./CheckOutButton"


function Main() {
  return (
    
  <div className="All-component-holder">   
   <div className="spacerB"></div>
  <div className="spacerA"></div>
  <div className="info-view-component_holder"> <InformationView /></div>
  <div className="date-today-component_holder"> <DateToday /></div>   
  <div className="clock-component_holder"> <Clock/> </div> 
  <div className="picture-component_holder"> <Picture /></div>
  <div className="CheckIn-component-holder"> <CheckInButton /></div>
  <div className="CheckOut-component-holder"> <CheckOutButton /></div>  
  </div>
  );
}

export default Main;
