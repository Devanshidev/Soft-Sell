"use client"
import React from 'react'
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

// Array of feature objects containing icon, title, and description
const features = [
  {
    icon: "✔️",
    title: "Fast Payouts",
    desc: "We understand that time is critical — that’s why we ensure your payout is processed within 24 hours after verification, so you can access your funds without unnecessary delays or complications.",
  },
  {
    icon: "🛡️",
    title: "Secure Transfers",
    desc: "Your security is our top priority. We use industry-grade encryption and secure protocols to safeguard your personal data and financial transactions from start to finish, giving you peace of mind.",
  },
  {
    icon: "📊",
    title: "Transparent Valuations",
    desc: "No hidden formulas or vague estimates — our valuation process is completely transparent. You'll receive a clear, data-driven breakdown of how your license's worth is determined based on market trends and current demand.",
  },
  {
    icon: "🤝",
    title: "Trusted by Resellers",
    desc: "With a growing network of over 100+ professional resellers, our platform is recognized for its reliability, consistency, and seller-first approach. You can count on us for a smooth, credible selling experience backed by real users.",
  },
]

const Whychooseus = () => {
  const ref = useRef(null) // Reference to the section element
  const inView = useInView(ref, { once: true, margin: "-100px" }) // Trigger animation once when in view

  return (
    <section
      className="py-16 px-6 bg-[#F1FBFF] dark:bg-[#1E1D1D]"
      ref={ref} // Attach ref to section for animation triggering
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-blue-950 dark:text-white mb-12 font-serif">
        Why Choose Us
      </h2>

      {/* Grid container for features */}
      <div className="grid grid-cols-2 pn:max-sm:grid-cols-1 gap-6 max-w-6xl mx-auto duration-100">
        {features.map((feature, index) => (
          // Animate each feature block with Framer Motion
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} // Animation start
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
            transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger animations
            className="bg-white dark:bg-[#2a2a2a] p-6 rounded-2xl shadow-md border border-gray-200 dark:border-[#2d2c2c]"
          >
            {/* Icon */}
            <div className="text-4xl mb-4">{feature.icon}</div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-blue-950 dark:text-white">
              {feature.title}
            </h3>
            {/* Description */}
            <p className="text-sm text-[#7a7a7a] dark:text-gray-200 mt-2">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Whychooseus
