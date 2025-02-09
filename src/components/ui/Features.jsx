"use client"
import React from "react";
import Link from "next/link";
import { FiCreditCard } from "react-icons/fi";

const Features = () => {
  return (
    <div className="px-24 py-16">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 ">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 font-medium mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 "></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Digital Innovation
            </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-500  sm:text-4xl md:mx-auto">
          What We Offer
        </h2>
        <p className="text-base text-body-color md:text-lg">
          This system aims to help students, researchers, and universities by digitizing academic research papers, making them more accessible, searchable, and shareable.
        </p>
      </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
        <Card
          title="Efficient Digitization"
          subtitle="Convert paper-based research into digital formats."
          href="#"
          Icon={FiCreditCard}
        />
        <Card
          title="Searchability & Access"
          subtitle="Centralized database for easy access to academic research."
          href="#"
          Icon={FiCreditCard}
        />
        <Card
          title="AI-Powered Retrieval"
          subtitle="Advanced search features using AI for efficient literature review and research discovery."
          href="#"
          Icon={FiCreditCard}
        />
        <Card
          title="Enhanced Collaboration"
          subtitle="Dossie Scholar fosters collaboration by providing a platform for students, researchers, and universities .
"
          href="#"
          Icon={FiCreditCard}
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <Link href={href} passHref>
      <div className="w-full h-56 p-8 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#408FFF] to-[#1D4ED8] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
        <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-[#408FFF] group-hover:text-slate-100 group-hover:rotate-12 transition-transform duration-300" />
        <Icon className="mb-2 text-2xl text-[#408FFF] group-hover:text-white transition-colors relative z-10 duration-300" />
        <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
          {title}
        </h3>
        <p className="text-slate-400 group-hover:text-slate-200 relative z-10 duration-300">
          {subtitle}
        </p>
      </div>
    </Link>
  );
};

export default Features;
