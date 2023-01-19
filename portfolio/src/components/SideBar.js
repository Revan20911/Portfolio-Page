import React from "react";

import { BsGithub, BsLinkedin, BsChatText,} from "react-icons/bs";
import {BiArrowFromLeft} from 'react-icons/bi'
import {useEffect, useRef} from 'react';

const SideBarIcon = ({icon, link, onClick, animation, sidebarStatus}) =>{
    const sidebarButton = useRef(null);

    useEffect(() => {

        function rotateButton(){

            if({sidebarStatus} === 'active'){

                sidebarButton.current.className = "transform-rotate rotate-180";

            }else if ({sidebarStatus} ==='inactive'){

                sidebarButton.current.className = "transform-rotate rotate-0"
            }

            console.log({sidebarStatus});

            
        }
        rotateButton()

        

    })

    return(
        <a ref={sidebarButton} className={`sidebar-icon ${animation}`} onClick={onClick} href={link}>
            {icon}
            
        </a>
    )
}

function SideBar ({sidebarStatus, setSidebarStatus}){

    

    function setSidebarActive(sidebarStatus){

        if(sidebarStatus === 'active'){
            setSidebarStatus('inactive');
        }else if(sidebarStatus === 'inactive'){
            setSidebarStatus('active');
        }
        console.log(sidebarStatus);
    }

    return(
        <div className="fixed  flex lg:flex-col lg:top-0 lg:left-0 lg:h-screen lg:w-16 bg-gray-900 shadow-lg z-20 xs:w-screen xs:top-0 xs:left-0 xs:h-16 xs:flex-row ">
            <SideBarIcon icon={<BsGithub size="28"/>} link="https://github.com/Revan20911"/>
            <SideBarIcon icon={<BsLinkedin size="28"/>} link="https://www.linkedin.com/in/chris-merrill-7a440a224/"/>
            <SideBarIcon icon={<BsChatText size="28"/>} link="https://chat-app-e47df.web.app/"/>
            <SideBarIcon   icon={<BiArrowFromLeft className="xs:rotate-90 xl:rotate-0"  size="28"/>} animation={'animate-pulsing'}onClick={() => setSidebarActive(sidebarStatus)} sidebarStatus={sidebarStatus}/> 
        </div>
    )
}

export default SideBar