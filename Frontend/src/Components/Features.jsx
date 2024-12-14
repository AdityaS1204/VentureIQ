import React from 'react'
import { Link } from 'react-router-dom'

export const Features = () => {
  return (
    <>
      <h1 className='m-9 text-4xl font-bold font-poppins text-center'>Features that No other tool provides</h1>
      <div className="mb-28 flex flex-row flex-wrap gap-2 justify-center">
        <div className="flex gap-2 flex-col">
          {/* two small card vertical */}
          <div className="p-4 border-2 h-[250px] w-80 rounded-3xl shadow-xl duration-500 hover:-translate-y-4 hover:shadow-lg hover:shadow-slate-800">
            <h1 className='mb-2 text-3xl bg-clip-text text-transparent font-bold bg-gradient-to-r from-teal-200 to-yellow-200'>Cutting-Edge AI Models</h1>
            <h2 className='pt-1'>Advanced AI for accurate, reliable, and tailored predictions.</h2>
          </div>
          <div className="p-4 border-2 h-[250px] w-80 rounded-3xl duration-500 shadow-xl hover:-translate-y-4 hover:shadow-lg hover:shadow-slate-800">
            <h1 className='mb-2 text-3xl bg-clip-text text-transparent font-bold bg-gradient-to-r from-teal-200 to-yellow-200'> Data-Driven Intelligence</h1>
            <h2 className='pt-1'>AI insights to empower smarter decisions.</h2>
          </div>
        </div>
        <div className='md:mt-28'>
          {/* single card */}
          <div className="p-4 border-2 md:h-[350px] w-80 rounded-3xl shadow-xl duration-500 hover:-translate-y-4 hover:shadow-lg hover:shadow-slate-800">
            <h1 className='mb-2 text-3xl bg-clip-text text-transparent font-bold bg-gradient-to-r from-teal-200 to-yellow-200'>Startup Validation Made Easy</h1>
            <h2 className='pt-1'>Evaluate your ideas with precision. Our AI models assess feasibility, scalability, and market fit to validate your business concepts effectively.</h2>
           <Link to={"/Chat"}>
           <button className='mt-12 p-3 w-full h-14 border-2 rounded-full flex justify-between items-center font-semibold text-xl duration-500 hover:-translate-y-4 hover:shadow-lg hover:shadow-slate-500'>Try Now <span> <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              className="w-10 h-10"
            >
              {/* Outer Circle */}
              <circle cx="64" cy="64" r="64" className="fill-gray-600" />
              {/* Inner Arrow */}
              <path
                d="M49.2 38.4L73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z"
                className="fill-white"
              />
            </svg></span></button>
           </Link> 
           
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {/* two small card vertical */}
          <div className="p-4 border-2 h-[250px] w-80 rounded-3xl shadow-xl duration-500 hover:-translate-y-4 hover:shadow-lg hover:shadow-slate-800">
            <h1 className='mb-2 text-3xl bg-clip-text text-transparent font-bold bg-gradient-to-r from-teal-200 to-yellow-200'> Custom Sales & Marketing Strategies</h1>
            <h2 className='pt-1'> AI-powered strategies for growth and success.</h2>
          </div>
          <div className="p-4 border-2 h-[250px] w-80 rounded-3xl shadow-xl duration-500 hover:-translate-y-4 hover:shadow-lg hover:shadow-slate-800">
            <h1 className='mb-2 text-3xl bg-clip-text text-transparent font-bold bg-gradient-to-r from-teal-200 to-yellow-200'>Fast and Intuitive Platform</h1>
            <h2 className='pt-1'>A user-friendly platform for quick AI insights.</h2>
          </div>
        </div>
      </div>
    </>
  )
}

