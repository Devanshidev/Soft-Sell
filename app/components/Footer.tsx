import React from 'react'
import { FaFacebookSquare,FaInstagram,FaGoogle,FaTwitter  } from "react-icons/fa";
const Footer = () => {
    return (
      <footer className="bg-[#09052d] text-white dark:bg-[#2a2a2a] p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2  gap-8 text-sm font-sans items-center">
          {/* Brand Info */}
          <div>
            <h4 className="text-lg font-semibold mb-3">SoftSell</h4>
            <p className="text-gray-300">
              Giving your unused software licenses a second life. Fast, secure, and transparent.
            </p>
          </div>
  
          {/* Links */}
          <div>
            <h5 className="font-semibold mb-3">Quick Links</h5>
            <ul className="space-x-6 flex pn:max-sm:flex-col pn:max-sm:space-y-3">
              <li><a href="#features" className="hover:underline ">Features</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
              <li><a href="#faq" className="hover:underline">FAQs</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h5 className="font-semibold mb-3">Contact</h5>
            <p className="text-gray-300">support@softsell.com</p>
            <p className="text-gray-300">+1 (555) 123-4567</p>
            <p className="text-gray-300">Mon - Fri, 9am - 5pm</p>
          </div>
  
          {/* Social Media */}
          <div>
            <h5 className="font-semibold mb-3">Follow Us</h5>
            <div className="flex space-x-6 text-xl">
            <FaFacebookSquare />
                      <FaInstagram />
                    <FaGoogle />
                        <FaTwitter />
            </div>
          </div>
        </div>
  
        {/* Bottom note */}
        <div className="text-center text-gray-400 text-xs mt-10 dark:text-gray-200">
          &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  