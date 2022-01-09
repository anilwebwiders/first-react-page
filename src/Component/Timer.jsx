import React, { useState } from "react";

const Timer = () => {
    const [time, setTime] = useState(new Date());
    const changeTime = () => {
        setInterval(() => {
            let newTIme = new Date();
            setTime(newTIme);
        },1000)
        
    }

    return (
        <>
        <h1>Current Time</h1>
        <h2>{time.toLocaleTimeString()}</h2>
        {changeTime()}
        </>
    );
}
export default Timer;