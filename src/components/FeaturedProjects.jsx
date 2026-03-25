import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

import Img4 from "../Assets/ochi_4.png";
import Img5 from "../Assets/ochi_5.png";
import Img6 from "../Assets/ochi_6.png";
import Img7 from "../Assets/ochi_7.png";
import Img8 from "../Assets/ochi_8.png";
import Img9 from "../Assets/ochi_9.png";
import Img10 from "../Assets/ochi_10.png";
import Img11 from "../Assets/ochi_11.jpg";

const FeaturedProjects = () => {
  const [active, setActive] = useState("");

  const projects = [
    { title: "Salience Labs", img: Img4, tags: ["brand identity", "pitch deck", "strategy", "website"] },
    { title: "Medallia Experience", img: Img5, tags: ["conference", "executive keynote", "product launch"] },
    { title: "AH2 & Matt Horn", img: Img6, tags: ["pitch deck"] },
    { title: "Vise", img: Img7, tags: ["agency", "company presentation"] },
    { title: "Cardboard Spaceship", img: Img8, tags: ["brand template", "sales deck", "social media templates"] },
    { title: "Premium Blend", img: Img9, tags: ["brand template"] },
    { title: "All Things Go", img: Img10, tags: ["brand identity", "pitch deck"] },
    { title: "Trawa", img: Img11, tags: ["brand identity", "design research", "investor deck"] }
  ];

  return (
    <div className="w-full py-10 overflow-hidden relative">

      <div className="w-full border-b-2 border-gray-300">
        <h1 className="text-3xl md:text-5xl lg:text-6xl px-6 md:px-10 py-6 tracking-tight text-zinc-900">
          Featured projects
        </h1>
      </div>

      <div
        className="hidden md:block fixed w-[80%] top-1/2 left-1/2 
                   text-[#ccf830] text-5xl lg:text-7xl uppercase font-semibold
                   pointer-events-none transition-all duration-300 z-[999] text-center"
        style={{
          opacity: active ? 1 : 0,
          transform: active
            ? "translate(-50%, -50%) scale(1)"
            : "translate(-50%, -50%) scale(0.9)"
        }}
      >
        {active}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-6 md:px-10 py-10">
        
        {projects.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActive(item.title)}
            onMouseLeave={() => setActive("")}
            onClick={() => setActive(item.title)}
          >

            <div className="flex gap-3 items-center mb-3">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-zinc-700"></div>
              <p className="uppercase text-gray-700 text-sm md:text-base">
                {item.title}
              </p>
            </div>

            <div className="h-[40vh] md:h-[60vh] lg:h-[80vh] relative overflow-hidden rounded-2xl md:rounded-3xl group">
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover 
                           transition-all duration-500 ease-out 
                           group-hover:scale-95 group-hover:rounded-3xl cursor-pointer"
              />
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3 mt-4">
              {item.tags.map((tag, i) => (
                <p
                  key={i}
                  className="border border-gray-600 text-gray-600 rounded-full px-2 md:px-3 py-1 text-xs md:text-sm uppercase 
                             hover:text-white hover:bg-gray-800 cursor-pointer 
                             transition-all duration-200"
                >
                  {tag}
                </p>
              ))}
            </div>

          </div>
        ))}

      </div>

      <div className="flex justify-center px-6">
        <button
          className="group flex items-center gap-3 md:gap-4 
                     border border-gray-900 rounded-full bg-gray-800 text-white 
                     px-5 md:px-6 py-2 md:py-3 mt-5 uppercase text-xs md:text-sm
                     transition-all duration-300 hover:bg-gray-900 hover:scale-105">

          View all case studies

          <div
            className="flex justify-center items-center 
                       w-3 h-3 bg-white rounded-full
                       transition-all duration-300
                       group-hover:w-7 group-hover:h-7">

            <span
              className="text-black text-sm md:text-lg opacity-0 
                         transition-all duration-300 
                         group-hover:opacity-100">
              <FiArrowUpRight />
            </span>
          </div>
        </button>
      </div>

    </div>
  );
};

export default FeaturedProjects;