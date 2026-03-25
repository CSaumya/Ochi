import React, { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";

const Footer_1 = () => {
  const eyesRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let deltaX = e.clientX - window.innerWidth / 2;
      let deltaY = e.clientY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) - 180;

      eyesRef.current.forEach((eye) => {
        gsap.to(eye, {
          rotate: angle,
          duration: 0.3,
          ease: "power3.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#CDEA68] py-20 px-6 md:px-12 lg:px-20">

      <div className="flex flex-col items-center text-center text-zinc-800 leading-[0.85]">
        <h1 className="text-[12vw] md:text-[10vw] lg:text-[160px] font-extrabold uppercase">
          Ready
        </h1>
        <h1 className="text-[12vw] md:text-[10vw] lg:text-[160px] font-extrabold uppercase">
          To Start
        </h1>
        <h1 className="text-[12vw] md:text-[10vw] lg:text-[160px] font-extrabold uppercase">
          The Project?
        </h1>
      </div>

      <div className="flex justify-center gap-6 md:gap-10 mt-10">

        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="w-[28vw] h-[28vw] md:w-[16vw] md:h-[16vw] lg:w-[10vw] lg:h-[10vw] 
                       bg-white rounded-full flex justify-center items-center"
          >
            <div className="w-2/3 h-2/3 bg-zinc-800 rounded-full relative flex justify-center items-center text-white">

              <div className="absolute uppercase text-[3vw] md:text-sm">
                play
              </div>

              <div
                ref={(el) => (eyesRef.current[i] = el)}
                className="absolute top-1/2 left-1/2 w-full h-6 md:h-10"
                style={{ transform: "translate(-50%, -50%)" }}
              >
                <div className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full"></div>
              </div>

            </div>
          </div>
        ))}

      </div>

      <div className="mt-12 flex flex-col items-center gap-4">

        <button className="group flex items-center gap-4 
                           border border-gray-900 rounded-full bg-gray-800 text-white 
                           px-6 py-3 uppercase text-xs md:text-sm
                           transition-all duration-300 hover:bg-gray-900 hover:scale-105">

          Start the project

          <div className="flex justify-center items-center 
                          w-3 h-3 bg-white rounded-full
                          transition-all duration-300
                          group-hover:w-8 group-hover:h-8">

            <span className="text-black text-sm md:text-lg opacity-0 
                             transition-all duration-300 
                             group-hover:opacity-100">
              <FiArrowUpRight />
            </span>
          </div>
        </button>

        <div className="uppercase text-sm">Or</div>

        <button className="group flex items-center gap-4 
                           border border-gray-900 rounded-full text-gray-900 
                           px-6 py-3 uppercase text-xs md:text-sm
                           transition-all duration-300 hover:bg-gray-900 hover:text-white hover:scale-105">

          hello@ochi.design

          <div className="flex justify-center items-center 
                          w-3 h-3 bg-gray-900 group-hover:bg-white rounded-full
                          transition-all duration-300
                          group-hover:w-8 group-hover:h-8">

            <span className="text-black text-sm md:text-lg opacity-0 
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

export default Footer_1;