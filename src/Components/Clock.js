import React, {useState, useEffect} from "react";

function Clock(){
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000);
    }, []);

    return(<div className="time-holder">{date.toLocaleTimeString()} </div>)

}
export default Clock;