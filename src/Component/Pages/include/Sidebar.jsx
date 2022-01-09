import React, { createContext } from "react";
import LiveTime from "./LiveTime";
import Accordion from "./Accordion";
const accTitle = createContext();
const accTitle2 = createContext();
const accDesc = createContext();
const Sidebar = () => {

   

    return (
        <>
        <h2>About Me</h2>
        <h5>Photo of me:</h5>
        <div className="fakeimg">Fake Image</div>
        <p><LiveTime/></p>
        <p><LiveTime/></p>
        <h3>Some Links</h3>
        <accTitle.Provider value={"Title 1"}>
            <accTitle2.Provider value={"Sub Title 1"}>
                <accDesc.Provider value={"THis is the desciption"}>
                    <Accordion />
                </accDesc.Provider>
            </accTitle2.Provider>
        </accTitle.Provider>

        
        <accTitle.Provider value={"Title 2"}>
            <accTitle2.Provider value={"Sub Title 2"}>
                <accDesc.Provider value={"THis is the desciption 2"}>
                    <Accordion />
                </accDesc.Provider>
            </accTitle2.Provider>
        </accTitle.Provider>

        
        <accTitle.Provider value={"Title 3"}>
            <accTitle2.Provider value={"Sub Title 3"}>
                <accDesc.Provider value={"THis is the desciption 3"}>
                    <Accordion />
                </accDesc.Provider>
            </accTitle2.Provider>
        </accTitle.Provider>
        <hr className="d-sm-none"/>
        </>
    )
}

export default Sidebar
export {accTitle, accTitle2, accDesc}