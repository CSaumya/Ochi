import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Img_2 from "../Assets/ochi_2.jpg";

const About = () => {
  return (
    <div className="w-full py-16 md:py-20 bg-[#CDEA68] rounded-t-2xl -mt-[20px]">
      
      {/* Top Text */}
      <p className="text-[8vw] md:text-4xl lg:text-5xl pt-5 px-6 md:px-10 w-full md:w-[80%] leading-tight md:leading-[3vw]">
        We craft category-defining presentations, brand identities, and digital experiences that{" "}
        
        {/* Animated words */}
        {["drive funding", "sales,", "market leadership."].map((word, i) => (
          <span key={i} className="relative cursor-pointer mr-2">
            <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
              {word}
            </span>
          </span>
        ))}
      </p>

      {/* Middle Section */}
      <div className="w-full border-t border-b mt-12 border-[#a1b562]">
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between px-6 md:px-10 py-10">
          
          <p className="text-base md:text-lg">What you can expect:</p>

          <div className="w-full md:w-[40%] text-sm md:text-base">
            <p>
              We don't just make slides. We shape strategy, storytelling, design scalable brand systems, and build presentations that make people say: "I want in!"
              <br /><br />
              Our clients make the world go round – from deep tech, aerospace and robotics to music festivals and Michelin-starred restaurants.
              <br /><br />
              Since 2019, we've been the go-to partner for Yahoo, Medallia, Uber, Lexus, Salience Labs, Trawa and AllThingsGo.
            </p>
          </div>

          <div>
            <p>S:</p>
            <div className="flex flex-col mt-5 gap-2">
              {["Instagram", "Behance", "Facebook", "LinkedIn"].map((item, i) => (
                <span key={i} className="relative cursor-pointer">
                  <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                    {item}
                  </span>
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-10 p-6 md:p-10">
        
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl">
            How we can help:
          </h1>

          <button
            className="group flex items-center gap-4 
                       border border-gray-900 rounded-full bg-gray-800 text-white 
                       px-5 py-3 mt-6 cursor-pointer uppercase 
                       transition-all duration-300 hover:bg-gray-900">

            Read More

            <div
              className="flex justify-center items-center 
                         w-3 h-3 bg-white rounded-full
                         transition-all duration-300
                         group-hover:w-8 group-hover:h-8">

              <span
                className="text-black text-lg opacity-0 
                           transition-all duration-300 
                           group-hover:opacity-100">
                <FiArrowUpRight />
              </span>
            </div>
          </button>
        </div>

        <div className="w-full md:w-1/2 h-[40vh] md:h-[60vh] overflow-hidden rounded-xl">
          <img
            src={Img_2}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default About;