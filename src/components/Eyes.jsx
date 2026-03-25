import React, { useEffect, useState } from "react";
import Img3 from "../Assets/ochi_3.jpg";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let deltaX = e.clientX - window.innerWidth / 2;
      let deltaY = e.clientY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

  }, []);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${Img3})` }}
      >

        <div className="absolute top-1/2 left-1/2 
                        -translate-x-1/2 -translate-y-1/2 
                        flex gap-6 md:gap-10 items-center">

          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="w-[28vw] h-[28vw] md:w-[18vw] md:h-[18vw] lg:w-[14vw] lg:h-[14vw] 
                         bg-white rounded-full flex justify-center items-center"
            >
              <div className="w-2/3 h-2/3 bg-zinc-800 rounded-full relative flex justify-center items-center text-white">

                <div className="absolute uppercase text-[3vw] md:text-sm lg:text-base">
                  play
                </div>

                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`
                  }}
                  className="absolute top-1/2 left-1/2 w-full h-6 md:h-10"
                >
                  <div className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full"></div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Eyes;