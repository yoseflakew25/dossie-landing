"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import heroPic from "../../assets/sec.png";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const Hero = () => {
  return (
    <motion.section
      id="about"
      className="bg-[#F9FBFF]"
      initial="hidden"
      animate="visible"
    >
      <div className="lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
        <motion.div
          className="w-full lg:w-1/2 space-y-8"
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 font-medium"
            variants={itemVariants}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            Digitalization
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-600"
            variants={itemVariants}
          >
            Welcome to <span className="text-blue-500">DossieScholar</span>
          </motion.h1>

          <motion.p
            className="text-md text-gray-600 leading-relaxed max-w-2xl"
            variants={itemVariants}
          >
            Dossie Scholar offers a centralized digital repository that digitizes
            paper-based research papers from Ethiopian universities and beyond.
            Through LLM-powered text extraction and Agentic RAG technology, we
            provide a powerful tool for students, researchers, and academics to
            easily retrieve, analyze, and build upon existing knowledge.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
            <Link href="/" className="group">
              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </Link>
            <Link href="/about">
              <button className="border border-primary text-blue-500 px-8 py-3 rounded-lg gap-2 hover:bg-blue-500/10 flex items-center">
                About us
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div className="md:w-5/12 lg:w-1/3" variants={imageVariants}>
          <Image
            src={heroPic}
            alt="Hero Image"
            loading="lazy"
            className="rounded-3xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
