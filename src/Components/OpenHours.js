import React, {useState,useEffect} from "react";

function OpenHours(){

    const [isOpen, setIsopen] = useState([])
    const [openFrom, setOpenFrom] = useState([])
    const [openUntil, setOpenUntil] = useState([])
    
        useEffect(()=>{  
            const url = 'https://api.liseberg.se/api/opentimes';
   
               fetch(url)
              .then(res => res.json())
              .then(result => {              
                    setIsopen(result[0].isOpen);
                    setOpenFrom(result[0].openFrom);
                    setOpenUntil(result[0].openUntil)          
                })
        },[])

        function showData(){

            if(isOpen === true){
                return(<div> <p>{openFrom} - {openUntil}</p></div>)   
            }
            else{
                return( <div>Stängt</div>)
            }
        }

    return(
        <div>
            <div className="nameofvalues">Öppettider</div>
            <div className="parkvalue">{showData()}</div>
        </div>
    )
}
export default OpenHours;