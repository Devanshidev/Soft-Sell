"use client"
import React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"

// Array of testimonial data: each object includes name, role, company, feedback text, and avatar image
const testimonials = [
  {
    name: "Priya Desai",
    role: "IT Asset Manager",
    company: "TechNova",
    text: "Selling our unused licenses through this platform was a breeze. The process was fast, secure, and the team was super helpful throughout.",
    avatar: img1,
  },
  {
    name: "Mark Johnson",
    role: "Procurement Lead",
    company: "BrightSoft Inc.",
    text: "I was impressed with the transparent valuation. We got a great deal and received our payout in under 24 hours. Highly recommended!",
    avatar: img2,
  },
  {
    name: "Jennie Smith",
    role: "Software Operations Head",
    company: "CodeCrest",
    text: "Their service saved us time and money. Everything from uploading licenses to receiving funds was seamless. It's now our go-to resale platform.",
    avatar: img3,
  },
  {
    name: "Carlos Alvarez",
    role: "IT Administrator",
    company: "Innova Solutions",
    text: "A very professional experience. Transparent valuation and secure process gave us full confidence. We’ve already done multiple transactions.",
    avatar: img4,
  },
]

const Testimonials = () => {
  const ref = useRef(null) // Reference to track section visibility
  const inView = useInView(ref, { once: true, margin: "-100px" }) // Trigger animation once when section comes into view

  return (
    <section
      className="bg-[#F1FBFF] dark:bg-[#1E1D1D] py-16 px-6 md:px-20"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-950 dark:text-white font-serif">
          Customer Testimonials
        </h2>

        {/* Testimonials Grid */}
        <div
          ref={ref} // Attach ref to trigger animation when this grid scrolls into view
          className="grid grid-cols-2 pn:max-sm:grid-cols-1 duration-100 gap-8 items-stretch"
        >
          {testimonials.map((t, idx) => (
            // Each testimonial card with staggered fade-in animation
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }} // Start invisible and slightly moved down
              animate={inView ? { opacity: 1, y: 0 } : {}} // Animate in when in view
              transition={{ duration: 0.6, delay: idx * 0.3 }} // Delay animation per card
              className="bg-white dark:bg-[#2a2a2a] p-6 rounded-xl shadow-md"
            >
              {/* User Info with Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-blue-950 dark:text-white">{t.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-[#7a7a7a]">
                    {t.role} @ {t.company}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-[#7a7a7a] dark:text-gray-200 leading-relaxed">
                “{t.text}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
