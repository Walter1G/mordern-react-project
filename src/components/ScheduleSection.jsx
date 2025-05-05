import React from "react";
import scheduleImage from "../assets/stats.webp";
import { FaArrowRight } from "react-icons/fa";

const ScheduleSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 md"gap-24'>
        {/* left */}
        <div className="md:w-1/2 w-full">
          <img
            className="w-full h-auto"
            src={scheduleImage}
            alt="schedule image"
          />
        </div>

        {/* right */}
        <div className=" md:w-1/2 w-full ">
          <p className="text-orange-500 font-semibold mb-1  text-3xl">SCHEDULE</p>
          <h2 className="font-bold text-3xl md:text-4xl mb-6 text-neutral-900 mt-4 ">
                      Streamline Your Business <br/>
                      With Smart Scheduling Solutions
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Take control of your time and boost productivity with our
            intelligent scheduling system. Automate appointments, manage team
            availability, and deliver exceptional customer experience through
            seamless calender management.
                  </p>
                  
                  <a className="text-blue-500 font-semibold cursor-pointer flex items-center  gap-2 hover:gap-4 transition-all ">Explore scheduling features <FaArrowRight className="size-6" />  </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
