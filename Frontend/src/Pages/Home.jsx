import React from 'react'
import { Features, TestimonialSection, PricingPlan, CallToAction, Accordion, Footer  } from '../Components/index'
import { accordionItems } from '../assets/Content'
import { Link } from 'react-router-dom'


const Home = () => {

  


  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-8/12 mt-[5.5rem] flex flex-col justify-center items-center">
        <h2 className='font-bold text-gray-800 font-poppins'>Ideate.Research.Execute</h2>
        <h1 className='mb-4  text-center text-7xl font-[700]  bg-gradient-to-r from-teal-100 to-yellow-200 bg-clip-text text-transparent font-poppins'>Refine Ideas and Explore Markets with AI.</h1>
        <h1 className='text-center text-slate-600 mb-16 font-Roboto'>Turn your vision into actionable insights with our AI-powered Idea Validation and Market Research tool. Discover your target audience, assess market demand, and predict potential risks—all in one place. Whether you're launching a startup or expanding an existing business, our tool equips you with the data-driven insights you need to succeed.</h1>
        <Link to={"/Signup"}>
        <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button>

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