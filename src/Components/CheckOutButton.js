import React from "react";
import {Link} from "react-router-dom";

function CheckButtons(){
    return(
        <div>
            <Link to="/Checkoutview" >
                <button className="Checkbuttons">Ut</button>
            </Link>
        </div>
        
    )
}
export default CheckButtons;