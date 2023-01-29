import {useState} from "react";
import {LanguageList, FrameworkList, DatabaseList} from "./skillList";

const Skills = () => {

    const [languages] = useState(LanguageList)
    const [frameworks] = useState(FrameworkList)
    const [databases] = useState(DatabaseList)

    
    function onClick(){
        console.log('hello')
    }
    


    return(
        <div className="grid grid-cols-5 grid-flow-row h-fit w-fit mx-5 my-5">
            {GetSkills(languages, onClick)}
            {GetSkills(frameworks, onClick)}
            {GetSkills(databases, onClick)}
            
        </div>
    )

    
    

}

function GetSkills(valueList, onClick){

    

    return valueList.map((item, index)=>{
        return <div key={index} onClick={onClick}  className="  flex cursor-pointer flex-row justify-center relative h-48 w-48 rounded-box mx-3 mt-3 mb-3 overflow-hidden hover:overflow-visible"  >
        
        <img className="fixed shadow-xl rounded-box h-48 w-48 "src={item.img_url} alt=""/>
        <div 
        className=" flex hover:backdrop-blur-2xl flex-col text-2xl font-bold items-center text-opacity-0 justify-center  w-full h-full bg-opacity-0  bg-gray-500 hover:bg-opacity-70 hover:text-opacity-100  absolute top-0 bottom-0 left-0 right-0 rounded-3xl transition-all 1s ease-in-out text-gray-100">
            {item.name}
            </div>
            
        
        </div>
    })  
}

export default Skills;