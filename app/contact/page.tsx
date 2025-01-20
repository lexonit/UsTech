// pages/contact.tsx
"use client"; // This marks the component as a Client Component

import React, { useState } from 'react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add form submission logic here (e.g., sending form data to a server or email)
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
        <p className="mt-4 text-lg text-gray-600">We’d love to hear from you! Whether you have questions or are ready to start your Salesforce journey, our team is here to help.</p>
      </div>

      <div className="max-w-screen-xl mx-auto px-4">
        {/* Contact Form and Location Section */}
        <div className="lg:flex lg:justify-between lg:space-x-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:w-1/2 mb-12 lg:mb-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-semibold">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Your Phone"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Your Message"
                  // rows="5"
                  required
                />
              </div>

              <button type="submit" className="w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Location Section */}
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Location</h3>
            <div className="mb-6">
              <p className="text-gray-700 mb-2">US Tech Lightning Solutions</p>
              <p className="text-gray-700 mb-2">4440 W Devon Ave</p>
              <p className="text-gray-700 mb-2">Lincolnwood, IL 60712</p>
            </div>
            {/* Location Image */}
            <div className="flex justify-center">
              <img
                src="https://img.freepik.com/free-photo/side-view-hand-holding-location-symbol_23-2149764143.jpg?t=st=1737173192~exp=1737176792~hmac=058560e3619699754675bcdd54be602500dfe32374f4e9bca7ca653bc6c11fe3&w=740"
                alt="Our Location"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
