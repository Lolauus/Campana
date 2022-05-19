import React, { useState, useEffect } from 'react';
import Temp from "../Pictures/Temp.png"

 function Weather(){
   
    //STATE FOR SAVING DATA FROM JSON 
    const [temp, setTemp] =useState([])
    const [tempMax, setTempMax] =useState([])
    const [tempMin, setTempMin] =useState([])

    useEffect(()  => {
         //API KEY AND URL
      const apiKey = process.env.REACT_APP_API_KEY;
      const apiURL = ( `https://api.openweathermap.org/data/2.5/weather?lat=57.708870&lon=11.974560&appid=${apiKey}&units=metric`)

            //FETCHCALL TO API
          fetch(apiURL)
          .then(res => res.json())
          .then(result => {
              setTemp(result.main.temp);
              setTempMax(result.main.temp_max);
              setTempMin(result.main.temp_min);  
          })
        
    },[]);

      //FUNCTION WITH IFSTATEMENT TO CHECK IF TEMP HAS A VALUE ASSIGNED
      function WeatherData(){

        if(temp !== 'undefined'){
            return(
                <div>
                <div className="temphighlowvalue">
                     <p className="nameofvalues">H: {Math.round(tempMax) + "°"} L: {Math.round(tempMin) + "°"}</p>
                </div> 
                <div className="todaytemp-container">
                <div>
                      <img className="temppicture" src={Temp} alt="temp for the day"></img>    
                </div>
                 <div className="parkvalue">
                     <p>{Math.round(temp) +"°"}</p>
                </div>
                </div> 
           </div>
            )
        }
        else{
            return(<div>För kallt för att visa temp</div>)           
        }
        }

      //RETURN FUNCTION
 return(<div>{WeatherData()}</div>)
}
export default Weather;