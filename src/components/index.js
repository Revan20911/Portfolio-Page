import React from "react";
import Button from "./ui/header_button";
import "./styles/index.css";
import HomeContent from "./pages/home-content";
import Projects from "./pages/project-content";
import About from "./pages/about";
import Skills from "./pages/skills-content";
import scrollToAbout from "./function_helpers/scrollToAbout";
import scrollToSkills from "./function_helpers/scrollToSkills";
import scrollToHome from "./function_helpers/scrollToHome";
import scrollToProjects from "./function_helpers/scrollToProjects"

export default function Index (){

    return(
        <>
        <header>
            <Button text="Home" onClick={scrollToHome}/>
            <Button text="About" onClick={scrollToAbout}/>
            <Button text="Skills" onClick={scrollToSkills}/>
            <Button text="Projects" onClick={scrollToProjects}/>
        </header>
        <main>
            <div className="contentwrap">
                <HomeContent onClick={scrollToAbout}/>
                <About onClick={scrollToSkills}/>
                <Skills onClick={scrollToProjects}/>
                <Projects/>                
            </div>
        </main>
    </>
    )
}


