import React, { useState } from "react";

const faqsData = [
  {
    question: "How can I track my order?",
    answer:
      "You can track your order by logging into your Binary Closet account and checking the 'My Orders' section. You’ll find real-time updates there.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 7-day easy return policy. Items must be unused, unwashed, and with original tags intact.",
  },
  {
    question: "Do you offer free shipping?",
    answer:
      "Yes! We offer free shipping on all prepaid orders above ₹999 across India.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach us at support@binarycloset.com or call our helpline between 10 AM - 6 PM (Mon-Sat).",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-24 bg-yellow-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-800">
        Frequently Asked Questions
      </h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-[1.01]"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg text-gray-800">{faq.question}</h3>
              <span className="text-xl text-yellow-600">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600 transition-all duration-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="/"
          className="inline-block bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition"
        >
          ← Back to Home
        </a>
      </div>
    </section>
  );
};

export default FAQs;
