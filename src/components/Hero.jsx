import React from "react";
import { IoMdStar } from "react-icons/io";
import heroImage from "../assets/hero-image.png"

const Hero = () => {
  return (
    <section id="home" className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-24 pb-16 px-4 sm:px-6 lf:px-8">
      {/* left Column */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* star badge */}
        <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
          <span className="text-blue-600 group-hover:text-amber-300 group-hover:scale-110 transition-transform">
            <IoMdStar />
          </span>
          <span className="text-sm font-medium">Jump start your growth</span>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
          We boost the growth for
          <span className="text-blue-600 relative inline-block ">
            Startup to Fortune 500{" "}
            <span className="absolute w-full h-0.5 bg-blue-200/50 bottom-0 left-0"></span>
          </span>
          Companies <span className="animate-pulse inline-block ml-2">🕰️</span>
        </h1>

        <p className="text-md md:text-lg max-w-xl text-gray-600 ">
          Get the most accurate leads, sales people training and conversions,
          tools and more - all within the same one building.
        </p>

        <div className="flex gap-3 max-w-md">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all "
          />
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-200">
            →
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2  mt-16 md:mt-0 pl-0 md:pl-12">
        <div className="relative">
          <img src={ heroImage} alt="" className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300" />
      </div>
      </div>
    </section>
  );
};

export default Hero;
