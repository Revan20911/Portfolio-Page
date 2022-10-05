import React from "react";
import ArrowDown from "../ui/down_arrow_button";


const HomeContent = ({onClick}) => {
    return(
        <div>
        <div className="home-content-main">
            <div className="container">
                <div className="text-container">
                    <h1>Hi there,</h1>
                    <h1 id="subtitle">
                        I'm Chris Merrill.
                    </h1>
                </div>
                <div className="text-container">
            </div>
            </div>

            <ArrowDown className={"down-arrow-1"} onClick={onClick}/>
                    
        </div>

        </div>
    )
}

export default HomeContent;
