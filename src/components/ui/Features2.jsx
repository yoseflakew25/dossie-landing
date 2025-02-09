"use client";
import React from "react";
import Image from "next/image";
import temp from "../../assets/secc.svg"; // Ensure the image is placed in the public folder

const Section4 = () => {
  return (
    <div className="py-16 -mt-4">
      <div className="px-6 m-auto text-gray-600 xl:container md:px-12 xl:px-16">
        <div className="lg:bg-[#f6f9ff] lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="md:w-4/12 lg:w-1/3">
            <Image
              src={temp}
              alt="Fast, Secure and Easy Access"
              loading="lazy"
              className="rounded-3xl"
            />
          </div>
          <div className="mx-8 md:w-7/12 lg:w-1/2">
          
            <h2 className="text-3xl font-bold text-blue-500  md:text-4xl">
            Why DossieScholar?
            </h2>
            <ul className="space-y-2 mt-8">
<li>           <span className="font-bold text-blue-500 text-lg"> AI-Driven</span> Utilizing the latest AI models to digitize and enhance academic research.

</li>
<li>           <span className="font-bold text-blue-500 text-lg"> Scalable</span>  Built for universities and institutions, from Ethiopia to across Africa.


</li>
<li>           <span className="font-bold text-blue-500 text-lg"> Affordable</span>  Providing affordable solutions with free core services and a low-cost AI assistant for research.


</li>

            </ul>
            <p className="my-8 text-gray-600">
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
