'use client';

import React from 'react';

const Faq = () => {
  return (
    <div className="space-y-4 mx-8 lg:mx-64 my-16">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-primary font-medium mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              DossieScholar
            </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-500  sm:text-4xl md:mx-auto">
          Frequently Asked Questions (FAQs)
        </h2>
      </div>

      <details
        className="group border-s-4 border-primary  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-900">
            What is DossieScholar and what services do you offer?
          </h2>
          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>
        <p className="mt-4 leading-relaxed text-gray-700">
          Answer: DossieScholar is a digital platform dedicated to transforming academic research accessibility. We digitize paper-based research papers from Ethiopian universities and beyond, creating a centralized repository that allows students, researchers, and academics to easily access, search, and share valuable knowledge. Our services include efficient digitization, enhanced searchability, and AI-powered retrieval tools.
        </p>
      </details>

      <details
        className="group border-s-4 border-primary  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-900">
            How does DossieScholar utilize AI technology?
          </h2>
          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>
        <p className="mt-4 leading-relaxed text-gray-700">
          Answer: We leverage cutting-edge AI technologies, including Large Language Models (LLMs) and Agentic RAG, to enhance the digitization and retrieval of academic research. These AI tools enable advanced text extraction, making it easier for users to conduct literature reviews and find relevant studies efficiently.
        </p>
      </details>

      <details
        className="group border-s-4 border-primary  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-900">
    Who can benefit from using DossieScholar?
          </h2>
          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>
        <p className="mt-4 leading-relaxed text-gray-700">
          Answer: DossieScholar is designed for students, researchers, and universities, particularly those in Ethiopia and across Africa. Our platform fosters collaboration by allowing users to connect, share knowledge, and build on existing research, ultimately enhancing the academic community's collective efforts.
        </p>
      </details>

      <details
        className="group border-s-4 border-primary  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-900">
           Is DossieScholar affordable for universities and researchers?
          </h2>
          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>
        <p className="mt-4 leading-relaxed text-gray-700">
          Answer: Yes, DossieScholar offers affordable solutions with free core services available to all users. We also provide a low-cost AI assistant for research, ensuring that our platform remains accessible to universities and researchers while promoting efficient collaboration and literature review processes.
        </p>
      </details>
    </div>
  );
};

export default Faq;
