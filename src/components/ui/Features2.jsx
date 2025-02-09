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
            <h2 className="text-3xl font-bold text-blue-500 md:text-4xl mb-4">
              Why DossieScholar?
            </h2>
            <ul className="space-y-4 mt-8">
              <li className="flex items-center space-x-4 cursor-pointer">
                <span className="text-3xl text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></path></svg></span>
                <div className="flex flex-col">
                  <p className="text-lg font-bold text-blue-500">AI-Driven</p>
                  <p className="text-md text-gray-600">Utilizing the latest AI models to digitize and enhance academic research.</p>
                </div>
              </li>
              <li className="flex items-center space-x-4 cursor-pointer">
              <span className="text-3xl text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 15.5c0 1.11-.89 2-2 2s-2-.89-2-2s.9-2 2-2s2 .9 2 2m-9-2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.89 2-2s-.89-2-2-2M23 15v3c0 .55-.45 1-1 1h-1v1c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2v-1H2c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1c0-3.87 3.13-7 7-7h1V5.73c-.6-.34-1-.99-1-1.73c0-1.1.9-2 2-2s2 .9 2 2c0 .74-.4 1.39-1 1.73V7h1c3.87 0 7 3.13 7 7h1c.55 0 1 .45 1 1m-2 1h-2v-2c0-2.76-2.24-5-5-5h-4c-2.76 0-5 2.24-5 5v2H3v1h2v3h14v-3h2z"></path></svg></span>
              <div className="flex flex-col">
                  <span className="text-lg font-bold text-blue-500">Scalable</span>
                  <span className="text-md text-gray-600">Built for universities and institutions, from Ethiopia to across Africa.</span>
                </div>
              </li>
              <li className="flex items-center space-x-4 cursor-pointer">
                <span className="text-3xl text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 14.975v-1H4v-2h5v-2H5q-.425 0-.712-.287T4 8.975v-4q0-.425.288-.712T5 3.975h1.5v-1h2v1H11v2H6v2h4q.425 0 .713.288t.287.712v4q0 .425-.288.713t-.712.287H8.5v1zm7.45 6l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4z"></path></svg></span>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-blue-500">Affordable</span>
                  <span className="text-md text-gray-600">Providing affordable solutions with free core services and a low-cost AI assistant for research.</span>
                </div>
              </li>
            </ul>
            <p className="my-8 text-blue-500 text-md  leading-relaxed">
              "Our mission is to empower researchers with innovative tools and resources that enhance productivity and foster collaboration."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
