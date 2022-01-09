import React from "react";
import Boxes from "./include/Boxes";
import Sidebar from "./include/Sidebar";
import CovidData2 from "./CovidData";
const Home = () => {
    return (
        <>
            <div className="container" style={{marginTop:'30px'}}>
                <div className="row">
                    <div className="col-sm-4">
                        <Sidebar/>
                    </div>
                    <div className="col-sm-8">
                        <div className="row">
                            <Boxes title="Lizard 1" description="Lizards 1 are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" image="contemplative-reptile.jpg" />
                            <Boxes title="Lizard 2" description="Lizards 2 are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except 3 Antarctica" image="contemplative-reptile.jpg" />
                            <Boxes title="Lizard 3" description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" image="contemplative-reptile.jpg" />
                           
                        </div>
                    </div>
                    
                </div>
                <CovidData2 />
            </div>
        </>
    )
}

export default Home; 