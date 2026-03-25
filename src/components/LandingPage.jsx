import { useEffect, useRef } from "react";
import gsap from "gsap";
import { RiArrowRightUpLine } from "react-icons/ri";
import Ochi_1 from '../Assets/ochi_1.jpg'

const LandingPage = () => {
    const imageRef = useRef(null);

useEffect(() => {
  if (imageRef.current) {
    gsap.to(imageRef.current, {
      width: "12vw",
      duration: 1,
      delay: 1,
      ease: "power4.out"
    });
  }
}, []);
  return (
    <div className="w-full min-h-screen pt-1">
      
      <div className="mt-32 md:mt-40 px-6 md:px-12 lg:px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker overflow-hidden">
              
              <div className="w-fit flex items-center">
                
                {index === 1 && (
                  <div  ref={imageRef} className="h-[10vw] md:h-[8vw] lg:h-[6vw] relative mr-2 md:mr-4 overflow-hidden" style={{ width: 0 }}>
                    <img src={Ochi_1} alt="" className="h-full w-full object-cover rounded-xl" />
                  </div>
                )}

                <h1 className="text-[10vw] md:text-[8vw] lg:text-[6vw] font-black text-gray-900 uppercase leading-[0.85] tracking-[-0.05em]">
                  {item}
                </h1>

              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-gray-400 mt-16 md:mt-24 px-6 md:px-12 lg:px-20 lg:py-20 py-6 flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between md:items-center">
        <p className="text-gray-800 text-sm md:text-base">
          Presentation and storytelling agency
        </p>

        <p className="text-gray-800 text-sm md:text-base">
          For innovation teams and global brands
        </p>

        {/* Button */}
        <div className="group inline-flex items-center gap-2 cursor-pointer transition-all duration-300 hover:gap-3">
          
          <div className="uppercase text-gray-800 border rounded-full text-xs md:text-sm px-4 py-2 transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white">
            Start the project
          </div>

          <div className="p-2 border rounded-full transition-all duration-300 group-hover:bg-gray-900">
            <RiArrowRightUpLine className="text-lg md:text-xl text-gray-800 transition-all duration-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;