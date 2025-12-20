"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Who is eligible?",
    answer: "Indian nurses with a valid nursing degree (GNM, B.Sc Nursing, or equivalent) and relevant work experience are eligible to apply.",
  },
  {
    question: "What salary can I expect?",
    answer: "€2,300–€2,800 (pre-recognition) and €2,800–€3,500 (post-recognition).",
  },
  {
    question: "Do I need German skills before joining?",
    answer: "No prior German knowledge is required. We provide comprehensive German language training from A1 to B2 level as part of the program.",
  },
  {
    question: "How long does the process take?",
    answer: "The entire process typically takes 12-18 months, including language training, documentation, and visa processing.",
  },
  {
    question: "Is there a job guarantee?",
    answer: "Yes, we guarantee employer interviews and job placement assistance for all candidates who successfully complete the program.",
  },
  {
    question: "Can I take my family later?",
    answer: "Yes, once you are settled in Germany, you can apply for family reunification to bring your spouse and children.",
  },
  {
    question: "Is the training online or offline?",
    answer: "We offer both online and offline training options to suit your convenience and learning preferences.",
  },
  {
    question: "What if I fail an exam?",
    answer: "We provide additional support and re-training if needed. Our goal is to ensure your success throughout the program.",
  },
  {
    question: "Are there hidden charges?",
    answer: "No, we maintain complete transparency. All costs are communicated upfront with no hidden fees.",
  },
];

export default function FAQ() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-20">
        {/* Title */}
        <h2 className="mb-8 md:mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight text-gray-900 text-center md:text-left">
          Frequently Asked Questions
        </h2>

        {/* FAQ Content */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Questions List */}
          <div className="flex w-full lg:w-1/2 flex-col gap-0">
            <div className="flex flex-col bg-white rounded-xl border-2 border-gray-100">
              {displayedFaqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                className={`flex min-h-16 md:min-h-[72px] items-center justify-between px-3 md:px-4 py-3 cursor-pointer transition-all rounded-xl border-b-2 border-gray-100 ${selectedIndex === index
                  ? "bg-accent/10"
                  : "bg-white hover:bg-gray-100"
                  }`}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  {/* Circle bullet */}
                  <div
                    className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full shrink-0 ${selectedIndex === index
                      ? "bg-accent"
                      : "bg-accent/40"
                      }`}
                  />
                  {/* Question text */}
                  <span
                    className={`text-left text-sm md:text-base ${selectedIndex === index
                      ? "font-medium text-gray-900"
                      : "text-gray-900"
                      }`}
                  >
                    {faq.question}
                  </span>
                </div>
                {/* Arrow */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={selectedIndex === index ? "#3B5BDB" : "#B8C0E8"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            ))}
            </div>
            
            {/* Show More/Less Button */}
            {faqs.length > 5 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="mt-4 px-4 py-2 text-sm md:text-base font-medium text-accent hover:text-accent/80 transition-colors text-center"
              >
                {showAll ? "Show Less" : `Show ${faqs.length - 5} More Questions`}
              </button>
            )}
          </div>

          {/* Answer Panel */}
          {selectedIndex !== null && (
            <div className="h-fit w-full lg:w-1/2 rounded-xl md:rounded-2xl bg-card-bg p-6 md:p-8 lg:p-10 shadow-sm">
              <h3 className="mb-4 md:mb-5 text-lg md:text-xl font-semibold text-gray-900">
                {faqs[selectedIndex].question}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-900">
                {faqs[selectedIndex].answer}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
