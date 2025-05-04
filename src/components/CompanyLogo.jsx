import React from "react";
import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import sitepoint from "../assets/sitepoint.png";
import meundies from "../assets/meundies.png";

const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, sitepoint, meundies];

  return (
    <div className="w-full overflow-hidden container mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-center items-start">
      <div
        className="border-l-4 border-blue-500 px-5 w-[300px] shrink-0 text-gray-600 bg-white py-2 z-10 sm:text-base
      text-xl font-semibold text-left"
      >
        Proud Partner at <br /> Hubspot & Segment
      </div>

      <div className="flex whitespace-nowrap animate-marquee ">
        {logos.map((logo, index) => (
          <img
            src={logo}
            key={index}
            al="company logo"
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}

        {/* dup logos */}
        {logos.map((logo, index) => (
          <img
            src={logo}
            key={`duplicate-${index}`}
            al="company logo"
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;
