import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion'

export const Navbar = () => {

  return (

    <div className=' flex justify-center items-center'>
      <div className='m-5 p-2 w-[500px] md:w-5/12 h-16 backdrop-blur-xl rounded-full border-2 flex gap-4 justify-evenly     md:justify-between items-center duration-500 hover:-translate-y-4 hover:shadow-lg hover:shadow-slate-800'>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="50" height="30">
            <rect x="0" y="0" width="200" height="200" rx="30" fill="black" />
            <text x="10%" y="70%" font-family="Arial, sans-serif" font-size="94" fill="white" font-weight="bold">VIQ</text>
          </svg>
          <span className="text-xl font-bold font-poppins">VentureIQ</span>
        </div>
        <div className='sm:flex sm:gap-3 hidden gap'>
          <NavLink to={"/"} >Home</NavLink>
          <NavLink to={"/Feature"}>Features</NavLink>
          <NavLink to={"/Pricing"}>Pricing</NavLink>
        </div>
        <Link to={"/Signup"}>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              SignIn
            </span>
          </button>
        </Link>

      </div>
    </div>
  )
}

