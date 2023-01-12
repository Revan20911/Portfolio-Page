import React from "react";
import "../styles/projects.css";
import anitracker from "../assets/Screenshot 2022-10-05 at 12-54-33 AniTracker.png";
import watchable from "../assets/watchable.png"

import Link from "../ui/link";

const Projects = () => {
    return(
        <div className="project-content-main">
            <h1>Things I've Created</h1>
            <div className="project-content">
                <div className="project-container">
                    <div className="image-container">
                        <img  alt="" src={anitracker}/>
                    </div>
          
                </div>
                <div className="project-container">
                    <div className="image-container">
                        <img  alt="" src={anitracker}/>
                    </div>
                    <div className="text-container">
                    <h1>AniTracker</h1>
                    <div className="row">
                        <Link text="LIVE" link="https://anim-tracker.netlify.app/"/>
                        <Link text="REPO" link="https://github.com/Revan20911/AniTracker"/>
                    </div>
                </div>
                </div>
                <div className="project-container">
                    <div className="image-container">
                        <img  alt="" src={watchable}/>
                    </div>
                    <div className="text-container">
                    <h1>AniTracker</h1>
                    <div className="row">
                        <Link text="Coming Soon"/>
                        <Link text="REPO" link="https://github.com/Revan20911/Watchable"/>
                    </div>
                </div>
                </div>
                <div className="project-container">
                    <div className="image-container">
                        <img  alt="" src={anitracker}/>
                    </div>
                    <div className="text-container">
                    <h1>AniTracker</h1>
                    <div className="row">
                        <Link text="LIVE" link="https://anim-tracker.netlify.app/"/>
                        <Link text="REPO" link="https://github.com/Revan20911/AniTracker"/>
                    </div>
                </div>
                </div>
                
                
     
            </div>
        </div>
    )
}

export default Projects;
