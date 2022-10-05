import React from "react";
import "../styles/projects.css";
import anitracker from "../assets/Screenshot 2022-10-05 at 12-54-33 AniTracker.png";

const Projects = () => {
    return(
        <div className="project-content-main">
            <h1>Things I've Created</h1>
            <div className="project-content">
                <div className="project-container">
                    <div className="image-container">
                        <img  src={anitracker}/>
                    </div>
                    <div className="text-container">
                    <h1>AniTracker</h1>
                    <p>777</p>
                    </div>
                    </div>
                <div className="project-container-middle">
                <div className="image-container"></div>
                <div className="text-container">
                <h1>AniTracker</h1>
                <p>777</p>
                </div>
                </div>
                <div className="project-container">
                 
                <div className="image-container"></div>
                <div className="text-container">
                <h1>AniTracker</h1>
                <p>777</p>
                </div>
               
                
                </div>
            </div>
        </div>
    )
}

export default Projects;