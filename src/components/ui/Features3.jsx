"use client";
import React from "react";
import Image from "next/image";
import temp from "../../assets/secccc.svg"; // Ensure the image is placed in the public folder

const Features3 = () => {
  return (
    <div className="py-16 -mt-4">
      <div className="px-6 m-auto text-gray-600 xl:container md:px-12 xl:px-16">
        <div className="lg:bg-[#f6f9ff] lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
        
          <div className="mx-8 md:w-7/12 lg:w-1/2">
        
            <h2 className="text-3xl font-bold text-blue-500  md:text-4xl">
            For Universities and Researchers
            </h2>
            <ul className="space-y-2 mt-8">
<li>           <span className="font-bold text-blue-500 text-lg"> Enhance Collaboration</span> Access past research easily and collaborate with peers.


</li>
<li>           <span className="font-bold text-blue-500 text-lg"> Efficient Literature Review</span>  Use AI tools to quickly identify relevant studies.



</li>
<li>           <span className="font-bold text-blue-500 text-lg"> Secure and Interoperable</span>  Ensuring long-term retention with compatibility across systems.



</li>

            </ul>
            <p className="my-8 text-gray-600">
            </p>
           
          </div>


          <div className="md:w-4/12 lg:w-1/3">
            <Image
              src={temp}
              alt="Fast, Secure and Easy Access"
              loading="lazy"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features3;
