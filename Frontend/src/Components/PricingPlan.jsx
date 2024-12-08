import React from 'react'
import { PricingCard } from './PricingCard';
import { pricing } from '../assets/Content';


export const PricingPlan = () => {
//  const pricing = [
//     {
//       id: 1,
//       type:"Free",
//       price:"0/month",
//       buttonTitle:"Try for free",
//       feature1:"2 free reports",
//       feature2:"All fundamental analysis",
//       feature3:"analysis through lastest data",
//       feature4:"feature 4",
//     },
//     {
//       id: 2,
//       type:"Starter",
//       price:"$29/month",
//       buttonTitle:"Get Starter",
//       feature1:"10 reports",
//       feature2:"All fundamental analysis",
//       feature3:"analysis through lastest data",
//       feature4:"Industry specific data",
//       feature5:"Peoduct/Service specific data",
//       feature6:"Get the latest trend of the industry",
      
//     },
//     {
//       id: 3,
//       type:"Pro",
//       price:"$49/month",
      // buttonTitle:"Get Pro ",
      // feature1:"20 reports",
      // feature2:"All fundamental analysis",
      // feature3:"analysis through lastest data",
      // feature4:"Industry specific data",
      // feature5:"Peoduct/Service specific data",
      // feature6:"Get the latest trend of the industry",
      // feature7:"Everything in Starter Plan"

//     },
//   ];

  return (
<>
    <div>
      <div className=' flex flex-col justify-center items-center w-full'>
        <h1 className='mb-3 text-center text-4xl font-[700]  bg-gradient-to-r from-teal-100 to-yellow-200 bg-clip-text text-transparent font-poppins'>Simple pricing for advanced people</h1>
        <h1 className='w-8/12 mt-1 text-center text-slate-600 mb-11 font-Roboto'>Turn your vision into actionable insights with our AI-powered Idea Validation and Market Research tool.</h1>
      </div>

    </div>
    <div className="flex sm:flex-row flex-col">
      {/* pricing card */}
      {
        pricing.map((plan,index)=>(
          <div className="flex w-full " key={index}>
            {/* if (id == 3) {
              // make the card size bigger than other by giving style in prop
              <PricingCard style={"h-[580px]"}/>
              
              } else{
                <PricingCard />
               
            }*/}
              <PricingCard pricingDetail={plan} />
          </div>
        ))
      }

    </div>
      </>
  )
}

