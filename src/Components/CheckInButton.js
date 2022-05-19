import React from "react";
import { Link} from "react-router-dom";
function CheckButtons(){
    return(
        <div>
            <Link to="/Checkinview" >
                <button className="Checkbuttons">In</button>
            </Link>
        </div>
    )
}
export default CheckButtons;