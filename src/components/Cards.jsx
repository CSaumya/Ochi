import React from "react";
import Img13 from "../Assets/ochi_13.png";

const Cards = () => {
  return (
    <div className="w-full py-10 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row gap-5">

      <div className="cardcontainer w-full md:w-1/2 h-[40vh] md:h-[50vh]">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex justify-center items-center">
          
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
            className="w-32 md:w-40 h-auto"
          />

          <p className="absolute left-4 bottom-4 md:m-8 text-[#CDEA68] border border-[#CDEA68] rounded-full px-3 py-1 text-xs md:text-sm">
            &copy; 2019-2026
          </p>
        </div>
      </div>

      <div className="cardcontainer flex flex-col sm:flex-row gap-5 w-full md:w-1/2 h-auto md:h-[50vh]">

        <div className="card rounded-xl w-full sm:w-1/2 h-[40vh] md:h-full bg-[#272827] relative flex justify-center items-center">
          
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
            className="w-28 md:w-40 h-auto"
          />

          <p className="absolute left-4 bottom-4 md:m-8 text-white border rounded-full px-3 py-1 text-xs md:text-sm tracking-tight hover:bg-white hover:text-zinc-900 transition-all duration-200 cursor-pointer">
            RATING 5.0 ON CLUTCH
          </p>
        </div>

        <div className="card rounded-xl w-full sm:w-1/2 h-[40vh] md:h-full bg-[#212121] relative flex justify-center items-center">
          
          <img
            src={Img13}
            alt=""
            className="w-28 md:w-40 h-auto"
          />

          <p className="absolute left-4 bottom-4 md:m-8 text-white border rounded-full px-3 py-1 text-xs md:text-sm uppercase tracking-tight hover:bg-white hover:text-zinc-900 transition-all duration-200 cursor-pointer">
            Business bootcamp alumni
          </p>
        </div>

      </div>
    </div>
  );
};

export default Cards;