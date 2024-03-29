import { BsHash} from "react-icons/bs";
import {useEffect, useRef} from 'react'




function Channels({setChannel, sidebarStatus, setSidebarStatus}){

    function changeChannel(value){

        setChannel(value);
        setSidebarStatus('inactive');
        
    }

    
    const ChannelBar = useRef(null);
    const ChannelBarHeader = useRef(null); 

    useEffect(()=>{

        function expandSideBar(){

            const BarinitialClass = "fixed  xs:top-0 xs:w-screen xs:h-0 lg:left-0 lg:w-0 lg:h-screen none bg-gray-800 h-screen  transition-all 1s ease-in-out opacity-0 z-0";
            const HeaderInitialClass =  " none fixed xs:w-screen lg:w-0 lg:h-14 bg-gray-800 border-b border-gray-800 shadow-md items-center justify-center transition-all 1s opacity-0"

            if(sidebarStatus === 'active'){
                ChannelBar.current.className = "fixed flex lg:left-16 lg:top-0 flex-col xs:h-80 xs:pr-6 xs:top-14 xs:left-0 xs:w-screen  bg-gray-800 lg:h-screen lg:w-80  transition-all 1s ease-in-out opacity-100 z-10";
                ChannelBarHeader.current.className = " flex fixed  xs:w-screen  xs:h-14 xs:p-2 lg:w-80 lg:h-14 bg-gray-800 border-b border-gray-800 shadow-md items-center justify-center transition-all 1s opacity-100"
            }else if(sidebarStatus === 'inactive'){

                ChannelBar.current.className = BarinitialClass;
                ChannelBarHeader.current.className = HeaderInitialClass;


            }

        }

        expandSideBar();

        
    })


    return(
        <div ref={ChannelBar} id="content"className="fixed flex left-0 flex-col  bg-gray-800 h-screen w-0 z-0">
            <div ref={ChannelBarHeader} className=" flex fixed w-0 h-14 bg-gray-800 border-b border-gray-800 shadow-md items-center justify-center ">
                <div className="text-gray-200 font-sans font-extrabold fixed w-auto overflow-hidden" >Chris Merrill's Portfolio</div>
                
            </div>
            <div className="fixed flex-col h-full xs:top-28 top-14 w-full z-10">
            <SubChannel name="Home"  value="Home" onClick={() => changeChannel('Home')}/>
            <SubChannel name="Skills" onClick={() => changeChannel('Skills')}/>
            <SubChannel name="Projects" onClick={() => changeChannel('Projects')}/>
            <SubChannel name="Contact " onClick={() => changeChannel('Contact')}/>
            <a href="./assets/resume.pdf" download><SubChannel name="Resume" onClick={() => changeChannel('Contact')}/></a>
            </div>
            
        </div>
    )
}




const SubChannel = ({name, onClick}) => {
    return(
        <button onClick={onClick} className="channel-category ">
        <BsHash className="text-gray-600"size="32"/> <div >{name}</div>
     </button>
    )
}



export default Channels;
