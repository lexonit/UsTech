"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // To handle animations

interface FAQ {
  question: string;
  answer: string;
}

const FAQs = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Track the open question index
  const cardsPerPage: number = 4;

  const faqData: FAQ[] = [
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
      question: "What are the costs associated with Salesforce Implementation?",
      answer:
        "The cost of Salesforce Implementation depends on the size of the business, the complexity of the setup, and the extent of customization required. It can range from a few thousand dollars to several hundred thousand dollars.",
    },
    {
      question: "Do I need specialized expertise to implement Salesforce?",
      answer:
        "While businesses can implement Salesforce on their own, it is recommended to work with an experienced Salesforce Implementation Partner for best results. These partners bring a wealth of expertise and can help ensure a successful implementation.",
    },
  ];

  const showMore = (): void => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const lastCardIndex: number = currentPage * cardsPerPage;
  const visibleFaqs: FAQ[] = faqData.slice(0, lastCardIndex);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle answer visibility
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-10 mb-11 bg-gray-50 text-gray-900">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        Frequently Asked Questions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleFaqs.map((faq: FAQ, index: number) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">
                {faq.question}
              </h3>
              <button
                onClick={() => toggleAnswer(index)}
                className="text-lg font-bold text-gray-600 focus:outline-none"
              >
                {openIndex === index ? "-" : "+"}
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: openIndex === index ? 1 : 0, x: openIndex === index ? 0 : -50 }}
              transition={{ duration: 0.5 }}
            >
              {openIndex === index && (
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </motion.div>
          </div>
        ))}
      </div>

      {lastCardIndex < faqData.length && (
        <div className="text-center mt-10">
          <button
            onClick={showMore}
            type="button"
            className="px-8 mb-5 py-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md font-medium shadow-md"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};


export default FAQs;
