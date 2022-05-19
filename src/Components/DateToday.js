import React from "react";

function DateToday(){

    const todayDate = new Date();
    const todayByNumber = todayDate.getDay()

    return(
        <div className="datetoday-component">
            <div className="todaydate-holder">{todayDate.toLocaleString('locale',{weekday:'long'})}</div>
            <div className="todaybynumber-holder">{todayByNumber + ":e"}</div>
            <div className="todaymonth-holder">{todayDate.toLocaleString('locale',{month:'long'})}</div>
        </div>
    )
}
export default DateToday;           