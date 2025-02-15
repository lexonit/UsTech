"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import emailjs from "emailjs-com";

const ContactUsPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_itrwygu", // Replace with your EmailJS service ID
        "template_dyny8bn", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: "info@ustechlightningsolutions.com",
        },
        "Wfob1iQGTWYEw6qKk" // Replace with your EmailJS user ID (public key)
      );
      console.log("Email sent successfully");
      router.push("/thank-you");
    } catch (error) {
      console.error("Email sending failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
        <p className="mt-4 text-lg text-gray-600">
          Reach out for inquiries or Salesforce solutions!
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Contact Form
          </h3>
          <form onSubmit={handleSubmit}>
            {["name", "email", "phone"].map((field) => (
              <div className="mb-4" key={field}>
                <label htmlFor={field} className="block text-gray-700 font-semibold capitalize">
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                  placeholder={`Your ${field}`}
                  required
                />
              </div>
            ))}

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                placeholder="Your Message"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="px-8 py-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md font-medium shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Location</h3>
          <p className="text-gray-700 mb-2">US Tech Lightning Solutions</p>
          <p className="text-gray-700 mb-2">4440 W Devon Ave</p>
          <p className="text-gray-700 mb-6">Lincolnwood, IL 60712</p>
          <Image
            src="https://img.freepik.com/free-photo/side-view-hand-holding-location-symbol_23-2149764143.jpg"
            alt="Our Location"
            width={400}
            height={250}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
