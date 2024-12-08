import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../assets/Content";


export const TestimonialSection = () => {


  return (
    <>
      <h1 className="text-4xl font-bold font-poppins">Testimonials</h1>
    {/* add some texxt */}
   
      {/* blur div */}
      <div className="flex flex-col text-black">
        {/* card div make the card flex*/}
        {/* img part */}
        {testimonials.map((testimonial) => (
          <div className="p-2 m-7 flex flex-col sm:flex-row gap-9 items-center duration-500 hover:-translate-y-2 hover:shadow-2xl rounded-2xl">
            <img
              src={testimonial.image}
              // height="45px" width="450px"
              className="rounded-2xl h-20 sm:h-56"
            />
            <div className="flex flex-col gap-4">
              <div>
              <h1 className="font-bold text-2xl text-white text-center">{testimonial.name}</h1>
              <h1 className="text-slate-600 text-center">{testimonial.role}</h1>

              </div>

              <h1 className="text-pretty text-slate-100 text-center sm:text-left ">{testimonial.review}</h1>
            </div>
          </div>
        ))}
        {/* text part */}
      </div>
    
    </>
   
  );
};


