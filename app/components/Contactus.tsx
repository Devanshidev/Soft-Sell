"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import FloatingBoxes from "../animations/FloatingBoxes";
import { motion } from "framer-motion";
import {
  FaFacebookSquare,
  FaInstagram,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";

// Define types for form data and errors
type FormData = {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<FormData>;

const Contactus: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Validate form fields
  const validate = (): FormErrors => {
    const err: FormErrors = {};
    if (!form.fname.trim()) err.fname = "First name is required";
    if (!form.lname.trim()) err.lname = "Last name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      err.email = "Valid email is required";
    if (!form.phone.trim()) err.phone = "Phone is required";
    if (!form.message.trim()) err.message = "Message is required";
    return err;
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted! (This is a mock)");
      setForm({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  // Update form fields on change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#F1FBFF] dark:bg-[#1E1D1D] flex items-center justify-center px-4 relative overflow-hidden flex-col">
      <FloatingBoxes />

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-950 dark:text-white font-serif z-10">
        Contact Us
      </h2>

      {/* Contact Form */}
      <div className="w-full max-w-2xl z-10">
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-[#2a2a2a] shadow shadow-md p-8 rounded-b-lg -mt-4"
        >
          <h2 className="text-2xl font-bold mb-1 text-center text-blue-950 dark:text-white font-sans">
            Get in Touch
          </h2>
          <p className="text-center text-sm text-[#7a7a7a] dark:text-gray-200 mb-6">
            Let us know how we can help you
          </p>

          {/* First and Last Name */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1">
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                className="w-full border border-[#7a7a7a] rounded px-4 py-2 placeholder:text-sm placeholder:text-[#7a7a7a] text-black dark:text-white font-sans text-sm outline-none"
                value={form.fname}
                onChange={handleChange}
              />
              {errors.fname && (
                <p className="text-red-500 text-sm">{errors.fname}</p>
              )}
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                className="w-full border border-[#7a7a7a] rounded px-4 py-2 placeholder:text-sm placeholder:text-[#7a7a7a] text-black dark:text-white outline-none font-sans text-sm"
                value={form.lname}
                onChange={handleChange}
              />
              {errors.lname && (
                <p className="text-red-500 text-sm">{errors.lname}</p>
              )}
            </div>
          </div>

          {/* Email and Phone */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border border-[#7a7a7a] rounded px-4 py-2 placeholder:text-sm placeholder:text-[#7a7a7a] text-black dark:text-white outline-none font-sans text-sm"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="w-full border border-[#7a7a7a] rounded px-4 py-2 placeholder:text-sm placeholder:text-[#7a7a7a] text-black dark:text-white outline-none font-sans text-sm"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="mb-4 text-black font-sans text-sm">
            <textarea
              name="message"
              rows={4}
              placeholder="What do you have in mind?"
              className="w-full border border-[#7a7a7a] rounded px-4 py-2 placeholder:text-sm placeholder:text-[#7a7a7a] dark:text-white outline-none"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-950 dark:bg-[#1E1D1D] text-white py-2 rounded-xl hover:font-semibold hover:border-2 hover:border-blue-950 hover:text-blue-950 hover:bg-white dark:hover:text-white dark:hover:border-white transition"
          >
            Submit
          </button>

          {/* Social Icons */}
          <div className="flex justify-center space-x-10 mt-8 text-xl text-blue-950 dark:text-gray-200">
            <FaFacebookSquare />
            <FaInstagram />
            <FaGoogle />
            <FaTwitter />
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contactus;
