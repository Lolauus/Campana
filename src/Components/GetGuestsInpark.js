import React, { useState, useEffect } from 'react';
import peoplepicture from '../Pictures/people.png'
function GetGuestsInPark(){


    const [guests, setGuests] = useState([])
    const [open, setOpen] = useState([])
    
    //Might need to download addon in chrome for this to work
    //Access-allow-controll-origin /CORS
    useEffect(()=>{  
         //API CALL FOR NUMBER OF GUESTS
         const urltotal = 'https://api.liseberg.se/api/GetEntreStatTotal';
         const urlopen = 'https://api.liseberg.se/api/opentimes';

         const fetchData = () =>{
            fetch(urltotal)
            .then(res => res.json())
            .then(response => setGuests(response))
         } 
         //SETTING INTERVAL FOR UPDATING THE CALL TO API
         const interalID = setInterval(() => {
            fetchData();
         },18000 );

       //API CALL TO CHECK IF OPEN OR NOT   
        fetch(urlopen)
            .then(res => res.json())
            .then(response => {
                setOpen(response[0].isOpen);
            }) 
                   
        fetchData();
        return () => clearInterval(interalID);
        
    },[])
//FUNCTION TO HANDLE IF CLOSED
function ifClosed(){
    if(open ===  true){
        return(
        <div className="todaytemp-container">
            <img className="temppicture" src={peoplepicture} alt="people"></img>    
            <p className="parkvalue">{guests}</p>
        </div>               
             )   
    }
    else{       
        return( <div>Stängt</div>)
    }
}

    return(
        <div className="guestsinpark">
        <div>
             <p className="nameofvalues">Gäster i parken</p>
             <div className="parkvalue">{ifClosed()}</div>
        </div>    
        </div>
    )
}
export default GetGuestsInPark;