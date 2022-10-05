import React from "react";

const Link = ({onClick, link, text}) =>{
    return(
        <>
        <div onClick={onClick}className="link-button">
            <a href={link}>
            {text}
            </a>
        </div>
        </>
    )
}

export default Link;