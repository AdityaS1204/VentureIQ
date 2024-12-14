import React from 'react'
import { Features, TestimonialSection, PricingPlan, CallToAction, Accordion, Footer  } from '../Components/index'
import { accordionItems } from '../constants/Content'
import { Link } from 'react-router-dom'


const Home = () => {

  


  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="w-6/12 md:w-8/12 mt-[5rem] flex flex-col justify-center items-center">
        <h2 className='font-bold text-gray-800 font-poppins'>Ideate.Research.Execute</h2>
        <h1 className='mb-4  text-center text-7xl font-[700]  bg-gradient-to-r from-teal-100 to-yellow-200 bg-clip-text text-transparent font-poppins'>Refine Ideas and Explore Markets with AI.</h1>
        <h1 className='text-center text-slate-600 mb-16 font-Roboto'>Turn your vision into actionable insights with our AI-powered Idea Validation and Market Research tool. Discover your target audience, assess market demand, and predict potential risks—all in one place. Whether you're launching a startup or expanding an existing business, our tool equips you with the data-driven insights you need to succeed.</h1>
        <Link to={"/Signup"}>
        <button className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative">Get Started</span>
                </button>
        </Link>
        <Features />
        <TestimonialSection />
        <PricingPlan />
        <CallToAction />
        <Accordion items={accordionItems}/>
        <Footer/>
      </div>
    </div>

  )
}

export default Home