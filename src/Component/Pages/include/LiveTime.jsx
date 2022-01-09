import React, { useState } from "react";

const LiveTime = () => {
    
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const setNewTime = () => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        },1000)
    }

    return (
        <>
        <span>{time}</span>
        {setNewTime()}
        </>
    )
}

export default LiveTime