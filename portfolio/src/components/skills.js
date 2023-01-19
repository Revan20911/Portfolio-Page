import {useState, Suspense, useRef} from "react";
import {LanguageList, FrameworkList, DatabaseList} from "./skillList";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";

import { TextureLoader } from "three";


import javascript from "../assets/gamecube.jpg";


const Skills = () => {

    const [languages] = useState(LanguageList)
    const [frameworks] = useState(FrameworkList)
    const [databases] = useState(DatabaseList)

    
return(
  <div id="canvas-container"className="h-screen w-screen flex flex-col justify-center ">
    <Canvas>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      </Canvas>
      </div>

)
}


function Scene(){
  const colorMap = useLoader(TextureLoader, javascript )
  const myBox = useRef();

  const [active, setActive] = useState(false);

  useFrame(({clock}) =>{

    myBox.current.rotation.x = clock.getElapsedTime()

  })

  return(
    <>
    <ambientLight color={"white"}args={[32,0,10]} intensity={0.8}/>
    
    <mesh ref={myBox} scale={active ? 1.5 : 1} >
        <sphereGeometry args={[2,32,32]}/>
        <meshStandardMaterial map={colorMap}/>
      </mesh>
    </>


  )

}
     

    

        
    



function GetSkills(valueList){

    

    return valueList.map((item, index)=>{
        return <div className="  flex  justify-center relative h-48 w-48 rounded-b-3xl mx-3 mt-3 mb-3" key={index}>
        <img className="fixed shadow-xl  rounded-[2rem] h-48 w-48 "src={item.img_url} alt=""/>
        <div 
        className=" flex hover:backdrop-blur-2xl flex-col text-2xl font-bold items-center text-opacity-0 justify-center  w-full h-full bg-opacity-0  bg-gray-500 hover:bg-opacity-70 hover:text-opacity-100  absolute top-0 bottom-0 left-0 right-0 rounded-3xl transition-all 1s ease-in-out text-gray-100">
            {item.name}
            </div>
        </div>
    })  
}

export default Skills;