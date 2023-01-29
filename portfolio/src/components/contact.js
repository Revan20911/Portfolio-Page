import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


const Contact = () => {


    return(


        <div className=" flex flex-row justify-center w-[100%] h-fit fixed  left-16 ">
            <div className="  w-auto h-fit">
            <h1 className="text-4xl font-bold text-gray-300 p-4">Send me an email</h1>
            <form className="flex flex-col w-auto h-fit">
                <label className="p-2 text-lg font-semibold text-gray-300">Email</label>
                <input type='text' className="p-2 m-2 w-[60rem] rounded-lg"></input>
                <label className="p-2 text-lg font-semibold text-gray-300">Subject</label>
                <input type='text'className="p-2 m-2 w-[60rem] rounded-lg"></input>
                <label className="p-2 text-lg font-semibold text-gray-300">CC</label>
                <input type='text'className="p-2 m-2 w-[60rem] rounded-lg"></input>
                <label className="p-2 text-lg font-semibold text-gray-300">Body</label>
                <textarea className="p-2 m-2 h-96  w-[60rem] rounded-lg"></textarea>
                            
            </form>
            <button className="h-10 w-fit px-4 py-3 bg-slate-400 text-center flex flex-col justify-center rounded-xl text-gray-300 font-semibold m-2 hover:bg-gray-400 hover:text-gray-900">Send</button>
            </div>
        </div>
    )



}

export default Contact