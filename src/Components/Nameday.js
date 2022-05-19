import React,{useState, useEffect} from "react";

function Nameday(){

    const date = new Date();

    const year =  date.getFullYear();
    const month =  date.getMonth() +1;
    const day =  date.getDate();
    
    const [firstname, setFirstName] =useState([])
    const [secname, setSecName] =useState([])

    const apicall = (`https://sholiday.faboul.se/dagar/v2.1/${year}/${month}/${day}`);
    useEffect(() =>{

        fetch(apicall)
        .then(res => res.json())
        .then(result => {   
            setFirstName(result.dagar[0].namnsdag[0])
            setSecName(result.dagar[0].namnsdag[1])     
        },[])

    })
    


    return(
        <div>
            <div className="nameofvalues">Namnsdag</div>
            <div className="parkvalue"><p>{firstname} {secname}</p></div>
        </div>
    )
}
export default Nameday;