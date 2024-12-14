import React from 'react'
import { PricingCard } from './PricingCard';
import { pricing } from '../constants/Content';


export const PricingPlan = () => {
 

  return (
    <>
      <div>
        <div className='mt-20 flex flex-col justify-center items-center w-full'>
          <h1 className='mb-3 text-center text-4xl font-[700]  bg-gradient-to-r from-teal-100 to-yellow-200 bg-clip-text text-transparent font-poppins'>Simple pricing for advanced people</h1>
          <h1 className='w-8/12 mt-1 text-center text-slate-600 mb-11 font-Roboto'>Turn your vision into actionable insights with our AI-powered Idea Validation and Market Research tool.</h1>
        </div>

      </div>
      <div className="flex sm:flex-row flex-col">
        {/* pricing card */}
        {
          pricing.map((plan, index) => (
            <div className="flex w-full m-2" key={index}>
              {(index == 1) ? <PricingCard pricingDetail={plan} typeStyle={"bg-white pr-4 pl-4 w-min text-black rounded-full "} borderStyle={"border border-slate-100 scale-110"}/>  : <PricingCard pricingDetail={plan}/>}
            </div>
          ))
        }

      </div>
    </>
  )
}

