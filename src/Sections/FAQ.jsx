import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is a Visitor Management System?",
    answer:
      "A Visitor Management System helps organizations manage visitor check-ins, track entries, and improve security with digital records.",
  },
  {
    question: "Can I customize the check-in process?",
    answer:
      "Yes, you can fully customize visitor forms, workflows, and access permissions based on your business needs.",
  },
  {
    question: "Does it support QR code check-in?",
    answer:
      "Yes, visitors can check in quickly using QR codes for a seamless and contactless experience.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use enterprise-grade security and encryption to ensure your visitor data is fully protected.",
  },
  {
    question: "Do you provide support?",
    answer:
      "Yes, we offer 24/7 support for Professional and Enterprise plans.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-[#0A102A] to-[#0F1A3A] text-white">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-200">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Everything you need to know about our visitor management system.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl p-5 cursor-pointer 
            hover:border-purple-400 transition-all duration-300"
            onClick={() => toggleFAQ(index)}
          >
            
            {/* Question */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-200">
                {faq.question}
              </h3>

              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 
                ${openIndex === index ? "rotate-180 text-purple-400" : "text-gray-400"}`}
              />
            </div>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 
              ${openIndex === index ? "max-h-40 mt-3" : "max-h-0"}`}
            >
              <p className="text-gray-400 text-sm">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;