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
        <div className="grid grid-cols-6  h-full w-full mx-5 my-5 px-96 py-48 gap-y-3 gap-x-14 ">
            {GetSkills(languages, onClick)}
            {GetSkills(frameworks, onClick)}
            {GetSkills(databases, onClick)}
            
        </div>
    )

    
    

}

function GetSkills(valueList, onClick){

    

    return valueList.map((item, index)=>{
        return <div key={index} onClick={onClick}  className="flex cursor-pointer flex-col justify-center items-center h-56 w-72 p-5  bg-gray-600 "  >

              
        <img className=" h-24 w-24 mb-4  "src={item.img_url} alt=""/>
        <h1 className="text-gray-300 font-bold text-2xl">{item.name}</h1>
        <p className="text-gray-300 font-semibold text-md"></p>
        
    
            
       
        </div>
    })  
}

export default Skills;
