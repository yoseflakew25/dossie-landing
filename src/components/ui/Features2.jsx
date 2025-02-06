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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 font-medium mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 "></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Digital Innovation
            </div>
            <h2 className="text-3xl font-bold text-blue-500  md:text-4xl">
              Fast, Secure, and Easy Access
            </h2>
            <p className="my-8 text-gray-600">
              With our tailored solution, EIC can streamline operations and
              deliver superior service to its clients. The system is designed
              with advanced security measures to protect sensitive data,
              ensuring that client information remains confidential and secure.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
