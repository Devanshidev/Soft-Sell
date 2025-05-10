'use client';

import React from 'react';
import FloatingBoxes from '../animations/FloatingBoxes';

import dynamic from 'next/dynamic';

import { BiSearchAlt } from 'react-icons/bi';
import { RiRecycleFill } from 'react-icons/ri';
import { motion } from 'framer-motion';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent"></div>
});

// Import animation data
import lottieanimation from '../animations/lottieanimation.json';

// Hero section showcasing SoftSell's value proposition
const Hero: React.FC = () => {
  return (
    <div
      className="relative bg-gradient-to-br from-[#e0f7fa] via-[#ffffff] to-[#d0f0ff]
        dark:from-[#0D0D0D] dark:via-[#232222] dark:to-[#0D0D0D]
        w-full h-screen overflow-auto"
    >
      {/* Animated background boxes */}
      <FloatingBoxes />

      {/* Main Hero Content */}
      <div className="flex items-center justify-between h-full z-10 relative">
        
        {/* Left Text Section */}
        <div className="flex flex-col p-10 pn:max-sm:p-4 pn:max-sm:text-center">
          
          {/* Heading with animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[42px] pn:max-sm:text-4xl font-serif font-semibold text-blue-950 dark:text-white mb-4"
          >
            Your Unused Software Licenses
            <div>Deserve a Second Life</div>
          </motion.div>

          {/* Subtext with call-to-action link */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[15px] text-[#333] dark:text-gray-200 font-medium font-sans"
          >
            Easily evaluate and sell your surplus licenses — hassle-free with SoftSell.
            <a href="#choose-us" className="underline">Why Softsell?</a>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mt-4 pn:max-sm:justify-center"
          >
            {/* Check Value Button */}
            <button className="flex items-center gap-2 bg-blue-950 text-white text-[14px] dark:bg-white dark:text-black font-medium py-2.5 px-4 rounded-xl hover:bg-white hover:text-blue-950 border-2 border-transparent hover:border-[#1f1f21] dark:hover:shadow-[0px_0px_10px_rgba(255,255,255,0.5)] transition-all duration-200">
              <BiSearchAlt />
              Check Value
            </button>

            {/* Sell Now Button */}
            <button className="flex items-center gap-2 border-2 border-blue-950 text-blue-950 text-[14px] py-2.5 px-4 rounded-xl font-medium dark:hover:bg-white/10 hover:text-white dark:border-white dark:text-white hover:bg-blue-950 transition-all duration-200">
              <RiRecycleFill />
              Sell Now
            </button>
          </motion.div>
        </div>

        {/* Right-side Lottie Animation (hidden on small screens) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-lg pn:max-sm:hidden h-auto p-10"
        >
          <Lottie animationData={lottieanimation} loop={true} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
