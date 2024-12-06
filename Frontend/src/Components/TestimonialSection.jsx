import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../assets/Content";


export const TestimonialSection = () => {


  return (
    <>
      <h1 className="text-4xl font-bold font-poppins">Testimonials</h1>
    {/* add some texxt */}
    <div className="mt-9 mb-32 p-11 h-full w-full border-2 rounded-xl">
      {/* blur div */}
      <div className="flex flex-col text-black">
        {/* card div make the card flex*/}
        {/* img part */}
        {testimonials.map((testimonial) => (
          <div className="m-7 flex gap-9 items-center duration-500 hover:-translate-y-2 hover:shadow-2xl rounded-2xl">
            <img
              src={testimonial.image}
              height="450px" width="450px"
              alt=""
              className="rounded-2xl"
            />
            <div className="flex flex-col gap-4">
              <div>
              <h1 className="font-bold text-2xl text-white">{testimonial.name}</h1>
              <h1 className="text-slate-600">{testimonial.role}</h1>

              </div>

              <h1 className="text-pretty text-slate-100">{testimonial.review}</h1>
            </div>
          </div>
        ))}
        {/* text part */}
      </div>
    </div>
    </>
   
  );
};


