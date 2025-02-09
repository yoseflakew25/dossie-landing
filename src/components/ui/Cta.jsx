"use client"
import React from 'react';
import Link from 'next/link';

const Cta = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24 mb-16">
      <div className="text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-primary font-medium mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Digital Innovation
            </div>
        <h2 className="text-3xl font-bold text-blue-500  sm:text-5xl">
          Your Records, Anytime, <br /> Anywhere
        </h2>

        <p className="mx-auto mt-4 max-w-sm text-gray-500">
          Log in to explore how this system enhances your ability to manage and retrieve school records effectively.
        </p>

        <div className="flex flex-col sm:flex-row gap-4  justify-center items-center mt-8">
              <Link href="/about">
                <div className="group">
                  <button className="btn bg-blue-500 w-full sm:w-auto px-8 text-white gap-2 transition-all duration-300 hover:shadow-lg hover:bg-blue-600">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </Link>
             
            </div>
        
      </div>
    </div>
  );
};

export default Cta;
