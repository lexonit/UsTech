 "use client"

import React, { useState } from "react";
import { motion } from "framer-motion"; // To handle animations

const FAQPage = () => {
  const faqData = [
    {
      heading: "Salesforce Consultation",
      faqs: [
        {
          question: "What is Salesforce consultation?",
          answer:
            "Salesforce consultation is a service offered by experts in the Salesforce platform who work with businesses to understand their needs and provide customized solutions for implementing and using the platform effectively.",
        },
        {
          question: "What are the benefits of Salesforce consultation?",
          answer:
            "The benefits of Salesforce consultation include tailored solutions for your business, improved processes, better customer relationships, and increased efficiency, which can drive growth and increase return on investment.",
        },
        {
          question: "Who should consider Salesforce consultation services?",
          answer:
            "Businesses of all sizes and industries that use the Salesforce platform can benefit from consultation services. This includes those looking to optimize their platform, those facing implementation challenges, or those looking to maximize their investment in Salesforce.",
        },
        {
          question: "What is included in a Salesforce consultation?",
          answer:
            "A Salesforce consultation typically includes an assessment of your business needs, a review of your existing Salesforce implementation, and a tailored implementation plan. The consultant will also provide recommendations and best practices for using the platform effectively.",
        },
        {
          question: "How much does Salesforce consultation cost?",
          answer:
            "The cost of Salesforce consultation varies depending on the scope of the project and the specific needs of the business. It's best to consult with a Salesforce consultant to determine the cost and potential return on investment for your specific needs.",
        },
      ],
    },
    {
      heading: "Salesforce Implementation",
      faqs: [
        {
          question: "What is Salesforce Implementation?",
          answer:
            "Salesforce Implementation refers to the process of setting up and customizing the Salesforce platform to meet the specific needs of a business.",
        },
        {
          question: "Why is Salesforce Implementation important for my business?",
          answer:
            "Salesforce Implementation is important because it helps businesses streamline operations, improve customer relationships, and make data-driven decisions, leading to increased efficiency, productivity, and growth.",
        },
        {
          question: "How long does Salesforce Implementation take?",
          answer:
            "The length of a Salesforce Implementation project varies depending on the complexity of the setup and customization required. On average, it can take anywhere from a few weeks to several months.",
        },
        {
          question: "What are the costs associated with Salesforce Implementation?",
          answer:
            "The cost of Salesforce Implementation depends on the size of the business, the complexity of the setup, and the extent of customization required. It can range from a few thousand dollars to several hundred thousand dollars.",
        },
        {
          question: "Do I need specialized expertise to implement Salesforce?",
          answer:
            "While businesses can implement Salesforce on their own, it is recommended to work with an experienced Salesforce Implementation Partner for best results. These partners bring a wealth of expertise and can help ensure a successful implementation.",
        },
        {
          question: "Can Salesforce be customized to meet my business needs?",
          answer:
            "Yes, Salesforce is highly customizable to meet the unique needs of businesses. With a wide range of customization options, businesses can tailor Salesforce to meet their specific requirements.",
        },
      ],
    },
    {
      heading: "Salesforce Support",
      faqs: [
        {
          question: "What services does Salesforce Support offer?",
          answer:
            "The support plans include various aspects of managing the Salesforce environment including users, access, data, issue fixes, enhancements etc.",
        },
        {
          question: "How can I opt for Anvisol’s Salesforce Support?",
          answer:
            "Anvisol will recommend the best plan that will fit your business needs based on various aspects such as the number of users, the total requests raised daily, issues, and the complexity of the business processes.",
        },
        {
          question: "What type of support is available through Salesforce Support?",
          answer:
            "Support includes activities that require ongoing oversight for smooth Salesforce usage. This includes user creation, access provisioning, data loads, enhancements, etc.",
        },
        {
          question: "What is the cost for subscribing to support?",
          answer:
            "Anvisol provides flexible options based on the type of support needed. Smaller businesses typically need flexi support on an on-demand basis, while larger firms require dedicated teams. We ensure the right blend of a cost-effective team that responds to customers on priority.",
        },
        {
          question: "Can the support team make minor changes that I need?",
          answer:
            "Yes, Anvisol ensures business operations are driven to the best user experience. If any minor enhancements or changes are needed, the team will assist as per the agreed terms.",
        },
      ],
    },
    {
      heading: "Salesforce Clouds",
      faqs: [
        {
          question: "What is Salesforce Sales Cloud?",
          answer:
            "Salesforce Sales Cloud is a cloud-based sales automation platform that provides businesses with a suite of tools to streamline their sales processes and maximize their sales potential.",
        },
        {
          question: "What are the key features of Salesforce Sales Cloud?",
          answer:
            "Some key features include lead and opportunity management, forecasting, account management, and reporting and analytics.",
        },
        {
          question: "How does Salesforce Sales Cloud integrate with other Salesforce products?",
          answer:
            "Salesforce Sales Cloud integrates with other Salesforce products, such as Marketing Cloud, Service Cloud, and Community Cloud, to provide a single source of truth for customer data and enable personalized experiences.",
        },
        {
          question: "Can Salesforce Sales Cloud be customized to meet my business needs?",
          answer:
            "Yes, Salesforce Sales Cloud is highly customizable and can be tailored to meet the specific needs of your business.",
        },
        {
          question: "How does Salesforce Sales Cloud improve sales performance?",
          answer:
            "Salesforce Sales Cloud improves sales performance by streamlining sales processes, empowering teams with tools for efficiency, and providing a 360-degree view of the customer to deliver personalized experiences.",
        },
      ],
    },
    {
      heading: "Service Cloud",
      faqs: [
        {
          question: "What is Service Cloud and what does it do?",
          answer:
            "Service Cloud is a platform for customer service that enables businesses to offer omnichannel support and resolve customer issues faster and more efficiently.",
        },
        {
          question: "How can Service Cloud improve my customer service operations?",
          answer:
            "Service Cloud improves operations by providing businesses with tools to streamline service processes, empower agents, and deliver valuable insights for data-driven decisions.",
        },
        {
          question: "Does Service Cloud provide omnichannel support?",
          answer:
            "Yes, Service Cloud provides omnichannel support, allowing customers to receive assistance via email, phone, chat, or social media, all through a unified platform.",
        },
        {
          question: "Can Service Cloud be integrated with other systems and tools I already use?",
          answer:
            "Yes, Service Cloud integrates with systems like CRM, analytics, and e-commerce platforms to provide a comprehensive view of customer data and support.",
        },
      ],
    },
    {
      heading: "Marketing Cloud",
      faqs: [
        {
          question: "What is Marketing Cloud and what does it do?",
          answer:
            "Marketing Cloud is a platform for digital marketing that allows businesses to engage with customers across various channels such as email, social media, mobile, and the web.",
        },
        {
          question: "How can Marketing Cloud help my business grow?",
          answer:
            "Marketing Cloud helps businesses grow by automating and personalizing marketing efforts, analyzing customer behavior, and optimizing campaigns for better results.",
        },
        {
          question: "Can I integrate Marketing Cloud with other systems and tools I already use?",
          answer:
            "Yes, Marketing Cloud integrates with CRM, analytics, and e-commerce platforms to unify all customer data and improve marketing efficiency.",
        },
        {
          question: "Is Marketing Cloud suitable for businesses of all sizes?",
          answer:
            "Yes, Marketing Cloud is flexible and scalable, suitable for businesses of all sizes, and can be tailored to meet the unique needs of each organization.",
        },
      ],
    },
    {
      heading: "Commerce Cloud",
      faqs: [
        {
          question: "What is Commerce Cloud?",
          answer:
            "Commerce Cloud is a cloud-based eCommerce platform designed to help businesses sell products and services online, offering personalized omnichannel shopping experiences.",
        },
        {
          question: "What are the key features of Commerce Cloud?",
          answer:
            "Commerce Cloud provides features like personalized product recommendations, targeted promotions, real-time order updates, and advanced analytics.",
        },
        {
          question: "How does Commerce Cloud help businesses drive customer engagement and conversion?",
          answer:
            "Commerce Cloud boosts engagement and conversion by providing businesses with personalized product recommendations, targeted promotions, and insights for optimizing eCommerce operations.",
        },
      ],
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-12 mb-12 bg-gray-50 text-gray-900">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
        Frequently Asked Questions
      </h1>

      {faqData.map((section, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">{section.heading}</h2>
          
          <div className="space-y-8">
            {section.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{faq.question}</h3>
                  <button
                    onClick={() => toggleAnswer(idx)}
                    className="text-lg font-bold text-gray-600 focus:outline-none"
                  >
                    {openIndex === idx ? "-" : "+"}
                  </button>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: openIndex === idx ? 1 : 0, x: openIndex === idx ? 0 : -50 }}
                  transition={{ duration: 0.5 }}
                >
                  {openIndex === idx && (
                    <p className="text-gray-600 text-sm leading-relaxed mt-4">{faq.answer}</p>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
