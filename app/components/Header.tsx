
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo1.png'
import { ModeToggle } from './ModeToggle'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full fixed z-50 py-2 px-4 backdrop-blur-sm bg-white/30 dark:bg-black/10 flex items-center justify-between">
      {/* Logo and Brand */}
      <div className="flex items-center gap-2">
        <Image src={logo} alt="Logo" width={30} height={30} />
        <h1 className="text-xl font-semibold text-[#1a1a1a] dark:text-white font-serif">SoftSell</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="flex gap-4 items-center">
        <nav className="hidden sm:flex space-x-6 text-blue-950 dark:text-white font-medium font-sans text-sm">
          <a href="#home" className="hover:underline hover:font-semibold transition">Home</a>
          <a href="#how-it-works" className="hover:underline hover:font-semibold transition">How it Works?</a>
          <a href="#choose-us" className="hover:underline hover:font-semibold transition">Choose Us</a>
          <a href="#contact" className="hover:underline hover:font-semibold transition">Contact Us</a>
        </nav>
        {/* Desktop Theme Toggle */}
        <div className="pn:max-sm:hidden">
          <ModeToggle />
        </div>
      </div>

      {/* Mobile Right Side: Theme Toggle + Hamburger Icon */}
      <div className="sm:hidden flex items-center gap-2">
        <ModeToggle />
        <button onClick={() => setIsOpen(!isOpen)} className="text-blue-950 dark:text-white focus:outline-none">
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-[#1E1D1D] shadow-md sm:hidden text-blue-950 dark:text-white font-medium font-sans text-sm px-4 py-3">
          <a href="#home" className="block py-2 hover:underline">Home</a>
          <a href="#how-it-works" className="block py-2 hover:underline">How it Works?</a>
          <a href="#choose-us" className="block py-2 hover:underline">Choose Us</a>
          <a href="#contact" className="block py-2 hover:underline">Contact Us</a>
        </div>
      )}
    </header>
  )
}

export default Header
