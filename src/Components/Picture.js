import logo from "../Pictures/kanin.jpg"
import React from "react"

function Picture(){
    return(
        <div>
            <img className="bunnypicture" src={logo} alt="liseberg bunny"></img>
        </div>
    )
}
export default Picture;