"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who is eligible to apply for this Germany nursing program?",
    answer:
      "GNM, BSc, Post BSc and MSc Nursing graduates with valid nursing registration in India are eligible to apply. Both freshers and experienced nurses can join, though at least 1 year of clinical experience is preferred for some German employers and states.",
  },
  {
    question: "Do I need German language skills before joining Taldo?",
    answer:
      "No, you do not need any prior German knowledge to start. Taldo provides structured German language training from A1 up to B2 level, which is the level generally required to work as a registered nurse in Germany.",
  },
  {
    question: "What German level do I need to work as a nurse in Germany?",
    answer:
      "Most German employers and state authorities require at least B2 level German for full nursing registration, although some allow you to travel with B1 and complete B2 or an adaptation program there. Taldo’s program is designed to take you from beginner to B2 so you meet these requirements.",
  },
  {
    question: "How long does the overall process take from India to Germany?",
    answer:
      "On average, the journey takes around 9–14 months from joining the program to reaching Germany, depending on your pace in German language learning, exam completion, document recognition and visa processing. Fast movers who clear B2 quickly may finish sooner, while delays in exams or documentation can extend timelines slightly.",
  },
  {
    question: "Do I need work experience, or can fresh nursing graduates also apply?",
    answer:
      "Fresh GNM and BSc Nursing graduates can apply as long as they hold recognised nursing qualifications and valid registration. However, having 1–2 years of clinical experience can improve your profile and is preferred by many German employers.",
  },
  {
    question: "What salary can I expect as an Indian nurse in Germany?",
    answer:
      "Typical entry-level salaries for nurses in Germany range from about ₹2.5–3 lakh per month before full recognition, increasing to around ₹3.5–4 lakh or more after recognition, depending on region and employer. In addition, nurses usually receive overtime pay, night shift allowance, health insurance, pension and paid leave, which further increases total earnings.",
  },
  {
    question: "Is there a job guarantee with Taldo?",
    answer:
      "Taldo offers guaranteed employer interviews and end-to-end job placement support for candidates who complete the program and clear the required German level (typically B2). Final hiring decisions are always made by German hospitals or care facilities, but the program is built to guide you until you secure an offer and relocate.",
  },
  {
    question: "What kind of support do I get for visa and documentation?",
    answer:
      "You receive guidance for document collection, translations, recognition (Anerkennung) process, visa file preparation and embassy appointments so your application matches German requirements. This includes support in understanding checklists, timelines and any additional proofs requested by the embassy or authorities.",
  },
  {
    question: "Can I take my family to Germany later?",
    answer:
      "Yes, after you are settled and meet income and housing requirements, you can apply for a German family reunification visa to bring your spouse and dependent children. Your spouse usually needs at least A1-level German, and children above certain ages may also need language proof as per German rules.",
  },
  {
    question: "Is the training online or offline?",
    answer:
      "Taldo offers a blend of online classes and offline training at select centres so you can choose what suits your work schedule and location. Live online sessions, recorded lectures and practice tests make it possible to learn German and prepare for Germany even while working full-time.",
  },
  {
    question: "What happens if I fail a German exam?",
    answer:
      "If you do not clear an exam on the first attempt, you can reattempt after additional classes, doubt-clearing sessions and targeted practice support from the training team. The focus is on helping you understand mistakes, strengthen weak areas and pass with confidence rather than rushing you through the process.",
  },
  {
    question: "Are there any hidden charges in the program?",
    answer:
      "Reputable Germany-nursing programs are expected to be transparent about all fees, including training, exams, documentation and visa-related costs. Taldo follows a clear, upfront pricing structure so that you know your financial commitment in advance, with no hidden charges later in the journey.",
  },
  {
    question: "Do I have to pay any recruitment commission to German hospitals?",
    answer:
      "Ethical recruitment guidelines in Germany discourage charging nurses placement commissions, and many compliant agencies highlight that candidates do not pay recruitment fees to employers. Taldo’s model is aligned with fair-recruitment practices, so you do not pay separate commission to hospitals for your job.",
  },
  {
    question: "Can I change hospitals or cities in Germany later?",
    answer:
      "After you complete your initial contract and achieve full recognition as a registered nurse, you are usually free to switch employers or move to other German states subject to notice periods and contract terms. Many Indian nurses use this flexibility to move to cities that better match their family, salary or lifestyle preferences over time.",
  },
  {
    question: "Is Germany safe for Indian nurses, especially women?",
    answer:
      "Germany is widely regarded as a safe country with strong labour laws, regulated working hours and clear employee rights for healthcare workers. Hospitals and care facilities operate under strict standards, and Indian nurses often highlight professional work environments and better work-life balance compared to many local settings.",
  },
];

export default function FAQ() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-12">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-20 flex flex-col items-center">
        {/* Title */}
        <h2 className="mb-8 md:mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight text-gray-900 text-center">
          Frequently Asked Questions
        </h2>

        {/* FAQ Content */}
        <motion.div
          layout
          className="flex flex-col lg:flex-row gap-4 md:gap-6 justify-center w-full"
        >
          {/* Questions List */}
          <motion.div layout className="flex w-full lg:w-1/2 flex-col gap-0 items-center">
            <div className="flex flex-col bg-white rounded-xl border-2 border-gray-100 w-full max-w-xl">
              {displayedFaqs.map((faq, index) => (
                <div key={index} className="border-b-2 border-gray-100">
                  <button
                    onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                    className={`flex w-full min-h-16 md:min-h-[72px] items-center justify-between px-3 md:px-4 py-3 cursor-pointer transition-all ${selectedIndex === index
                      ? "bg-accent/10"
                      : "bg-white hover:bg-gray-100"
                      }`}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div
                        className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full shrink-0 ${selectedIndex === index
                          ? "bg-accent"
                          : "bg-accent/40"
                          }`}
                      />
                      <span
                        className={`text-left text-base md:text-lg ${selectedIndex === index
                          ? "font-medium text-gray-900"
                          : "text-gray-900"
                          }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={selectedIndex === index ? "#3B5BDB" : "#B8C0E8"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`shrink-0 transition-transform duration-300 ease-out
 ${selectedIndex === index ? "rotate-90" : ""
                        }`}
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>

                  {/* ✅ Mobile inline answer */}
                  <AnimatePresence>
                    {selectedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="block lg:hidden overflow-hidden px-4"
                      >
                        <div className="pb-4 pt-4 text-sm leading-relaxed text-gray-900">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              ))}

            </div>

            {/* Show More/Less Button */}
            {faqs.length > 5 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="mt-4 px-4 py-2 text-sm md:text-base font-medium text-accent hover:text-accent/80 transition-colors text-center self-center">
                {showAll ? "Show Less" : `Show ${faqs.length - 5} More Questions`}
              </button>
            )}
          </motion.div>

          {/* Answer Panel */}
          <AnimatePresence mode="popLayout">
  {selectedIndex !== null && (
    <motion.div
      layout
      key="answer-panel"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 0.2 },
        layout: {
          duration: 0.45,
          ease: [0.25, 0.1, 0.25, 1],
        },
      }}
      className="hidden lg:block h-fit w-full lg:w-1/2 rounded-xl md:rounded-2xl bg-card-bg p-6 md:p-8 lg:p-10 shadow-sm text-center"
    >
      <h3 className="mb-4 md:mb-5 text-lg md:text-xl font-semibold text-gray-900">
        {faqs[selectedIndex].question}
      </h3>
      <p className="text-sm md:text-base leading-relaxed text-gray-900">
        {faqs[selectedIndex].answer}
      </p>
    </motion.div>
  )}
</AnimatePresence>

      </motion.div>
    </div>
    </section >
  );
}
