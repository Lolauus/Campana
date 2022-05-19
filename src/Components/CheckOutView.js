import React, {useEffect} from "react";

function CheckInView(){
    useEffect(() => {
        setInterval(() =>  window.location.href = '/', 1500);
    }, );
    return(
        <div className="buttonview-holder">
            <p>Bra jobbat, kör hårt med kröket fan! </p>
        </div>
    )
}
export default CheckInView; 