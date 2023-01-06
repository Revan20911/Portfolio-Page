import React from "react";
import "../styles/about.css";
import ArrowDown from "../ui/down_arrow_button";

const About = ({onClick}) => {
    return(
        <div className="about-content-main">
            <div className="content-container">
                <div className="text-container">
                    <h1>About</h1>
                    <p>

I am a web developer with a passion for creating visually appealing and user-friendly websites. I have a strong foundation in HTML, CSS, and JavaScript, and I am constantly learning and experimenting with new technologies to enhance my skills. </p>

<p>I have worked on a variety of projects, including building full-stack web applications, as well as creating responsive layouts for mobile and desktop devices. I am a problem-solver at heart and enjoy the challenge of finding creative solutions to complex problems.</p>

<p>When I'm not coding, you can find me tinkering with new gadgets, playing the guitar, or working out at the gym. Thank you for visiting my portfolio, and I hope you enjoy exploring my work.</p>
                </div>
            </div>
            <ArrowDown className={"down-arrow-2"} onClick={onClick}/>
        </div>
    )
}
export default About;