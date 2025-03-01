// app/components/FAQsSection.js
"use client";

import { useState } from "react";

const faqsData = [
  {
    question: "Why are my plant's leaves yellowing?",
    answer:
      "Yellow leaves can indicate over watering, under watering, or insufficient sunlight. Our guides can help you diagnose the issue.",
  },
  {
    question: "How can I prevent pests from attacking my plants?",
    answer:
      "Regularly inspect your plants and use natural pest deterrents like neem oil or insecticidal soap.",
  },
  {
    question: "How often should I water my plants?",
    answer:
      "Plants have different watering needs based on their type, size, and environment. Learn how to tailor care for your plant.",
  },
  {
    question: "How do I protect my plants from pests?",
    answer:
      "Pests can harm your plants if left unchecked. Learn about effective and eco-friendly pest control options.",
  },
  {
    question: "What are the best practices for repotting plants?",
    answer:
      "Repotting is vital for plant health. Discover the signs your plant needs repotting and how to do it properly.",
  },
  {
    question: "What are the best plants for indoor spaces?",
    answer:
      "Some plants thrive indoors better than others. Find out which ones suit your space and lighting conditions.",
  },
];

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-300 mb-8">
          Frequently Asked Questions <br /> About Plant Care
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqsData.map((faq, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-4 flex items-center justify-between"
              >
                <span className="font-medium">{faq.question}</span>
                <i
                  className={`ri-${
                    openIndex === index ? "close-line" : "add-line"
                  } text-2xl`}
                ></i>
              </button>
              {openIndex === index && (
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
