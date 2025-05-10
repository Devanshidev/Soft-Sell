'use client'
import React, { useState } from 'react'
import { FaChartLine } from "react-icons/fa"
import { TbBookUpload } from "react-icons/tb"
import { MdPaid, MdOutlinePeopleOutline } from "react-icons/md"
import { IoArrowBack, IoArrowForwardSharp } from "react-icons/io5"
import { motion } from 'framer-motion'

// Step-by-step process list (used for both desktop and mobile views)
const steps = [
  {
    title: 'Upload License',
    description: 'Easily upload your license file to get started. This step ensures that your license is securely verified before moving forward.',
    icon: <TbBookUpload size={32} />,
  },
  {
    title: 'Get Valuation',
    description: 'We instantly assess the market value of your license based on current trends and demand, helping you understand its worth.',
    icon: <FaChartLine size={32} />,
  },
  {
    title: 'Connect with Buyers',
    description: 'Your license will be listed on our platform, where interested buyers can view and connect with you for further negotiation.',
    icon: <MdOutlinePeopleOutline size={32} />,
  },
  {
    title: 'Get Paid',
    description: 'After successfully selling your license, we ensure a fast and secure payment process, so you can receive your funds without hassle.',
    icon: <MdPaid size={32} />,
  },
]

// Component for How It Works section
export default function HowItWorksSimple() {
  // Tracks the currently visible step in the mobile carousel
  const [currentStep, setCurrentStep] = useState<number>(0)

  // Navigate to the previous step in carousel (loops back to last step if on first)
  const goToPrevStep = () => {
    setCurrentStep((prevStep) => (prevStep === 0 ? steps.length - 1 : prevStep - 1))
  }

  // Navigate to the next step in carousel (loops to first step if on last)
  const goToNextStep = () => {
    setCurrentStep((prevStep) => (prevStep === steps.length - 1 ? 0 : prevStep + 1))
  }

  return (
    <section id="how-it-works" className="py-20 bg-[#F1FBFF] dark:bg-[#1E1D1D] px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-blue-950 dark:text-white font-serif mb-12">How It Works</h2>

        <div className="flex gap-8 justify-center">

          {/* Desktop view: show all steps side by side */}
          <div className="hidden sm:flex gap-8 justify-center">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-[#2a2a2a] p-6 rounded-2xl shadow-md flex flex-col items-center text-center border border-blue-100 dark:border-[#2d2c2c]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="text-md font-sans font-semibold text-blue-950 dark:text-white flex justify-start mb-5">
                  Step {index + 1}
                </div>
                <div className="mb-4 text-blue-950 dark:text-white dark:bg-[#1E1D1D] bg-[#ddecf2] rounded-full p-3">
                  {step.icon}
                </div>
                <h3 className="text-md font-semibold text-blue-950 dark:text-white mb-4">{step.title}</h3>
                <p className="text-[12px] font-sans text-[#7a7a7a] dark:text-gray-200">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile view: show one step at a time with navigation arrows */}
          <div className="sm:hidden flex items-center justify-center relative">
            <motion.div
              key={steps[currentStep].title}
              className="bg-white dark:bg-[#2a2a2a] p-6 rounded-2xl shadow-md flex flex-col items-center text-center border border-blue-100 dark:border-[#2d2c2c] w-[300px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="text-md font-sans font-semibold text-blue-950 dark:text-white dark:border-[#2d2c2c] flex justify-start mb-5">
                Step {currentStep + 1}
              </div>
              <div className="mb-4 text-blue-950 dark:text-white dark:bg-[#1E1D1D] bg-[#ddecf2] rounded-full p-3">
                {steps[currentStep].icon}
              </div>
              <h3 className="text-md font-semibold text-blue-950 dark:text-white  mb-4">{steps[currentStep].title}</h3>
              <p className="text-[12px] font-sans text-[#7a7a7a] dark:text-gray-200">{steps[currentStep].description}</p>
            </motion.div>

            {/* Left arrow: previous step */}
            <div className="absolute top-1/2 -left-10 transform -translate-y-1/2">
              <button
                onClick={goToPrevStep}
                className=" text-blue-950 dark:text-white rounded-full shadow-lg focus:outline-none"
              >
                <IoArrowBack />
              </button>
            </div>

            {/* Right arrow: next step */}
            <div className="absolute top-1/2 -right-10 transform -translate-y-1/2">
              <button
                onClick={goToNextStep}
                className=" text-blue-950 dark:text-white rounded-full shadow-lg focus:outline-none"
              >
                <IoArrowForwardSharp />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
