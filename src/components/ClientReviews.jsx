import React from "react";
import Img12 from "../Assets/ochi_12.png";

const ClientReviews = () => {
  const reviews = [
    { company: "Medallia", name: "Becky Chastain" },
    { company: "Planetly", name: "Nina Walloch" },
    { company: "Workiz Easy", name: "Tomer Levy" },
    { company: "Premium Blend", name: "Ellen Kim" },
    { company: "Hypercare Systems", name: "Brendan Goss" },
    { company: "Officevibe", name: "Raff Labrie" },
    { company: "Raff Labrie", name: "David Budde" },
  ];

  return (
    <div className="w-full py-10">

      <div className="w-full border-b-2 border-gray-300">
        <h1 className="text-3xl md:text-5xl lg:text-6xl px-6 md:px-10 py-6 tracking-tight text-zinc-900">
          Clients’ reviews
        </h1>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-10 text-gray-900 flex flex-col md:flex-row gap-10">

        <div className="md:w-1/4">
          <p className="underline cursor-pointer">Karman Ventures</p>
        </div>

        <div className="md:w-1/4 flex flex-col gap-4">
          <p>Services:</p>

          <div className="flex flex-wrap gap-2">
            {["investor deck", "sales deck"].map((item, i) => (
              <p
                key={i}
                className="uppercase border border-gray-400 rounded-full px-3 py-1 text-xs md:text-sm w-fit cursor-pointer hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="md:w-1/3 flex flex-col gap-6">
          <p className="font-semibold text-sm md:text-base">
            William Barnes
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <img
              src={Img12}
              alt=""
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover"
            />

            <p className="text-sm md:text-base leading-relaxed">
              They were transparent about the time and the stages of the project...
            </p>
          </div>
        </div>

        <div className="md:w-1/6 flex md:justify-end">
          <p className="text-gray-400 cursor-pointer hover:text-black transition-all duration-200 text-sm md:text-base">
            READ
          </p>
        </div>

      </div>

      <div className="mt-6">
        {reviews.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-2 md:gap-0 px-6 md:px-10 py-4 border-gray-400 
              ${index === 0 ? "border-t border-b" : "border-b"}`}
          >
            
            <div className="md:w-1/3">
              <span className="relative cursor-pointer">
                <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                  {item.company}
                </span>
              </span>
            </div>

            <div className="md:w-1/3 md:text-center text-sm md:text-base">
              <p>{item.name}</p>
            </div>

            <div className="md:w-1/3 md:text-right">
              <p className="cursor-pointer hover:text-gray-600 transition-all duration-200 text-sm md:text-base">
                READ
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default ClientReviews;