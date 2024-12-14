import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

export const CallToAction = () => {
// const [islogin,setIslogin] = useState()

// const handleClick = ()=>{
//     console.log("working")
//     // setIslogin(false)

// }
// if(islogin === true){
//   return <Navigate to={'/chat'}/>  
// }else{
// return <Navigate to={'/login'}/>
// }    

    return (
        <>
            <div className='mt-32 flex flex-col justify-center items-center w-full'>
                <h1 className='mb-3 text-center text-4xl font-[700]  bg-gradient-to-r from-teal-100 to-yellow-200 bg-clip-text text-transparent font-poppins'>Turn Your Idea Into Reality Today!</h1>
                <h1 className='w-8/12 mt-1 text-center text-slate-600 mb-11 font-Roboto'>Get AI-validated insights and strategies to launch your dream startup. Don't just dream it, build it!</h1>
            </div>
            <div className="flex mb-11">
              <button className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative">Validate My Idea Now</span>
                </button>
               
            </div>

        </>
    )
}

