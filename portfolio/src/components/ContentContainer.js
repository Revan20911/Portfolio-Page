
import Home from "./home";
import {BsHash} from "react-icons/bs";
// import Skills from "./skills";

import Projects from "./projects";

function ContentContainer ({channel}){

    const currentChannel = channel;

    if(currentChannel === 'Home' | ''){
        return(
            <div className="fixed xs:left-0 md:left-16 sm:left-16 lg:left-16 flex-col bg-gray-600 h-screen w-full  z-0 ">
                <div className="fixed lg:top-0 xs:left-0 lg:left-16 lg:h-14 lg:w-screen bg-gray-700 shadow-md text-gray-100 z-20">
                    <div className="flex flex-row items-center text-left mt-3 ml-3">
                    <BsHash className="text-gray-500"size="30"/><h1 className="text-lg font-semibold">{channel}</h1>
                    </div>
                    
                </div>
                <div className="flex-col   top-14 xs:left-0 md:left-16 lg:left-16 sm:left-16 overflow-scroll" >
                    <Home/>
                    </div>
                
            </div>
        )

    }else if(currentChannel === 'Skills'){
        return(
            <div className="fixed left-96 xs:left-0 md:left-16 sm:left-16 lg:left-16 flex-col bg-gray-600 h-screen w-full  ">
                <div className="fixed top-0 xs:left-0  sm:left-16 md:left-16 h-14 w-screen bg-gray-700 shadow-md text-gray-100">
                    <div className="flex flex-row items-center text-left mt-3 ml-3">
                    <BsHash className="text-gray-500"size="30"/><h1 className="text-lg font-semibold">{channel}</h1>
                    </div>
                    
                </div>
                <div className="fixed  xs:left-0 xl:left-16 top-14 md:left-16 lg:left-16 sm:left-0 " >
                   
                    </div>
               
            </div>
        )
    }else if(currentChannel === 'Projects'){
        return(
            <div className="fixed flex items-center justify-center xs:left-0 md:left-0 sm:left-0 lg:left-16 flex-col bg-gray-600 h-screen w-full  z-0 ">
                <div className="fixed xs:top-14 xs:flex-col xs:w-screen xs:justify-center lg:top-0 xs:left-0  lg:left-16 h-14 w-screen bg-gray-700 shadow-md text-gray-100">
                    <div className="flex flex-row items-center text-left mt-3 ml-3">
                    <BsHash className="text-gray-500"size="30"/><h1 className="text-lg font-semibold">{channel}</h1>
                    </div>
                    
                </div>
                <div className="fixed flex-col items-center justify-center xs:left-0 xl:left-16 xs:top-28 top-14 md:left-0 lg:left-16 sm:left-0" >
                    <Projects/>
                    </div>
               
            </div>
        )
    }else if(currentChannel === 'Contact'){
        return(
            <div className="fixed left-96 xs:left-16 md:left-16 sm:left-16 lg:left-16 flex-col bg-gray-600 h-screen w-full  z-0 ">
                <div className="fixed top-0 xs:left-16  sm:left-16 md:left-16 h-14 w-screen bg-gray-700 shadow-md text-gray-100">
                    <div className="flex flex-row items-center text-left mt-3 ml-3">
                    <BsHash className="text-gray-500"size="30"/><h1 className="text-lg font-semibold">{channel}</h1>
                    </div>
                    
                </div>
                <div className="fixed flex-col xl:left-16 top-14 md:left-16 lg:left-16 sm:left-16 " >
                   
                    </div>
               
            </div>
        )
        
    }
      
}

// const ChatBox = () => {
//     const [subject, setSubject] = useState({
//         message: ''
//     }); 

//     function handleChange(value){
//         setSubject({message: value});
//     }
//     return(
//         <div className="fixed flex-row bottom-0 left-96  h-14 w-[100rem] bg-gray-500  rounded-xl mb-4 ml-10" >
//             <div className="flex ml-0 flex-row items-center justify-center text-gray-100">
            
//             <input 
//             placeholder="Email @Chris Merrill" 
//             value={subject.message} 
//             onChange={(e) => handleChange(e.target.value)}
//             className="w-[95rem] h-14 ml-3 bg-gray-500 focus:outline-none"/>
//             <SendEmail value={subject.message}
//             />
//             </div>
//           </div>
//     )
// }

// const SendEmail = ({value}) => {
//     return(
//         <a className="hover:text-gray-100  text-gray-300"href={`mailto:chris.w.merrill@gmail.com?body=${value}`}>
//         <BsArrowRightCircle size="30"/>
//     </a>
//     )
    
    
// }


export default ContentContainer;
