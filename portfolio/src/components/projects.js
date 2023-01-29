import ProjectList from "./projectList";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'



const Projects = () => {

    const [projects, setProjects] = useState([]);
    useEffect(() => {

        function getProjects(){

            setProjects(ProjectList);

        }

        getProjects();
    })

    function getColor(skill, index){

        const classProperty = "badge  text-lg rounded-xl  h-8 py-3 px-3 my-[1px] font-semibold border-0 border-transparent text-white-50 shadow-xl " + skill.color;


        return <div key={index} className={classProperty}>{skill.name}</div>

    }

    return(
        <div className="flex flex-col  py-10 px-10 justify-center w-fit h-screen ">
            <div className="grid xs:grid-cols-1 lg:grid-cols-auto lg:grid-rows-auto sm:gap-y-6 xs:w-screen  mx-0 my-0 md:grid-cols-3 md:gap-x-48 md:gap-y-0 lg:gap-x-48 lg:gap-y-0 sm:row-span-10 md:grid-rows-auto sm:grid-cols-auto sm:grid-rows-auto  sm:w-screen lg:w-fit w-full h-screen overflow-scroll scrollbar-hide
            transition-all 1s ease-in-out">
                {
                    projects.map((project, index) => {
                        return <div  key={index} className="card xs:w-96 h-fit sm:w-[36rem]  lg:w-80 bg-gray-500 shadow-xl md:mr-2 mb-0 lg:mr-2">
                            <figure ><img className="w-full h-fit"src={project.img_url || <Skeleton/>} alt=""/></figure>
                            <div className="card-body ">
                                <h2 className="card-title text-gray-100 text-3xl font-extrabold">{project.name || <Skeleton/>}</h2>
                                <div className="flex h-38 flex-wrap ">
                                {
                                    project.skills.map((skill, index) =>{
                                        return getColor(skill, index);
                                    })
                                }
                                </div>
                                <div className="card-actions justify-end">
                                    <a href={project.repo} className="btn btn-primary">Repo</a>
                                    <a href={project.live} className="btn btn-primary">Live</a>
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default Projects;