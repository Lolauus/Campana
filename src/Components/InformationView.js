import React from "react";
import GetGuestsInPark from "./GetGuestsInpark";
import Weather from "./Weather.js";
import OpenHours from "./OpenHours.js";
import Nameday from "./Nameday";
import Weatherpicture from "./Weatherpicture";
function InformationView(){
     return(

        <div className="info--panel">           
            <div className="weather-component-holder"><Weather /></div>
            <div className="Weatherpicture"> <Weatherpicture /></div>
            <div className="paddinglineLeft"></div>
            <div className="paddinglineRight"></div>
            <div className="getguestsinpark-component-holder"><GetGuestsInPark /> </div>
            <div className="OpenHours-component-holder"><OpenHours /></div>
            <div className="nameday-compnent-holder"> <Nameday /></div> 
        </div>
       
    )
}
export default InformationView;