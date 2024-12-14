import React from 'react'
import { useState } from 'react';

export const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    
    <div className=" mt-20 flex justify-center flex-col items-center mx-auto">
      <h1 className='text-4xl font-poppins font-bold'>FAQ</h1>
      <h2 className='mb-10 text-center font-Roboto text-slate-600'>You will find answers for popular asked questions about the website and its functionality.</h2>
      {items.map((item, index) => (
        <div key={index} className="w-full p-4 md:p-6 text-xl font-poppins border rounded-md m-2 transition-transform duration-100 hover:bg-cyan-400">
          <button
            className="w-full text-left py-3 px-4 flex justify-between items-center"
            onClick={() => handleToggle(index)}
          >
            <span className="font-medium font-poppins">{item.title}</span>
            <span className={`text-4xl transform transition-transform duration-300 ${activeIndex === index ? "rotate-90" : ""}`}>
              {">"}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-40 py-2" : "max-h-0"
            }`}
          >
            <div className="px-4 font-Roboto">{item.content}</div>
          </div>
        </div>
      ))}
    </div>



  )
}

