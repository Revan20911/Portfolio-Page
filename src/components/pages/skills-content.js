import React from "react";
import "../styles/skills.css";
import jsicon from "../assets/javascript.svg";
import cssicon from "../assets/css3.svg";
import htmlicon from "../assets/html.svg";
import reacticon from "../assets/react.svg";
import nodeicon from "../assets/nodejs.svg";
import exicon from "../assets/express.svg";
import mongoicon from "../assets/mongodb.svg";
import pythonicon from "../assets/python.svg";
import ArrowDown from "../ui/down_arrow_button";


const Skills = ({onClick}) => {
    return(
        <div className="skills-content-main">
            <div className="skills-container">
            <h1>Technologies I have used</h1>
            <div className="skill-grid">
                <div className="skill"><img alt="" src={jsicon}/></div>
                <div className="skill"><img alt="" src={htmlicon}/></div>
                <div className="skill"><img alt="" src={cssicon}/></div>
                <div className="skill"><img alt="" src={reacticon}/></div>
                <div className="skill"><img alt="" src={nodeicon}/></div>
                <div className="skill"><img alt="" src={exicon}/></div>
                <div className="skill"><img alt="" src={pythonicon}/></div>
                <div className="skill"><img alt="" src={mongoicon}/></div>  
            </div>
            <ArrowDown className={"down-arrow-1"} onClick={onClick}/>
            </div>
            
        </div>
    )
}

export default Skills;
