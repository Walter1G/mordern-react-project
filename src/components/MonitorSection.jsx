import React from "react";
import monitorcard from "../assets/monitor-card.webp";
import { FaArrowRight } from "react-icons/fa";

const MonitorSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className='flex  flex-col md:flex-row-reverse items-center justify-between gap-12 md"gap-24'>
        {/* left */}
        <div className="md:w-1/2 w-full">
          <img
            className="w-full h-auto"
            src={monitorcard}
            alt="schedule image"
          />
        </div>

        {/* right */}
        <div className=" md:w-1/2 w-full ">
          <p className="text-green-500 font-semibold mb-1  text-3xl">MONITOR</p>
          <h2 className="font-bold text-3xl md:text-4xl mb-6 text-neutral-900 mt-4 md:w-4/5">
            Introducing best mobile carousels
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Before the ship is really back, Round, round, all around the world.
            Round, all around the world. round, all around ht eworld. Round, all
            around the world.
          </p>

          <a className="text-blue-500 font-semibold cursor-pointer flex items-center  gap-2 hover:gap-4 transition-all ">
            Learn more about monitoring <FaArrowRight className="size-6" />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default MonitorSection;
