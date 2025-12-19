"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-20">
        {/* Title */}
        <h2 className="mb-8 md:mb-10 text-2xl sm:text-3xl md:text-[32px] font-bold text-gray-900 text-center md:text-left">
          Get in Touch
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
          {/* Row 1: Name, Email, Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-12">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-900">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Rachel Joe"
                value={formData.name}
                onChange={handleChange}
                className="h-12 rounded-md border border-gray-300 bg-white px-4 md:px-5 text-base text-gray-900 placeholder:text-gray-500 focus:border-accent focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Rachel@domain.com"
                value={formData.email}
                onChange={handleChange}
                className="h-12 rounded-md border border-gray-300 bg-white px-4 md:px-5 text-base text-gray-900 placeholder:text-gray-500 focus:border-accent focus:outline-none"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-900">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+971...."
                value={formData.phone}
                onChange={handleChange}
                className="h-12 rounded-md border border-gray-300 bg-white px-4 md:px-5 text-base text-gray-900 placeholder:text-gray-500 focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          {/* Row 2: Subject, Message */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 md:gap-6 lg:gap-12">
            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-900">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="h-12 rounded-md border border-gray-300 bg-white px-4 md:px-5 text-base text-gray-900 placeholder:text-gray-500 focus:border-accent focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-900">
                Message
              </label>
              <input
                type="text"
                name="message"
                placeholder="Enter Query"
                value={formData.message}
                onChange={handleChange}
                className="h-12 rounded-md border border-gray-300 bg-white px-4 md:px-5 text-base text-gray-900 placeholder:text-gray-500 focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-2 md:mt-4 w-full sm:w-fit rounded-full bg-primary px-6 md:px-8 py-3 text-base font-medium text-white transition-all hover:bg-accent"
          >
            Send my message
          </button>
        </form>
      </div>
    </section>
  );
}
