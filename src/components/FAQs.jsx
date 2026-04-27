"use client";

import { useState, useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";

const categories = ["About Programs", "Delivery & Format", "Support & Outcomes"];

const faqData = {
  "About Programs": [
    {
      q: "What types of corporate training programs does Accredian offer?",
      a: "Accredian offers 50+ enterprise training programs spanning Data Science & AI, Business Analytics, Product Management, Cloud & DevOps, Cybersecurity, and Management & Leadership. Each program is customized to meet your organization's specific needs.",
    },
    {
      q: "Can programs be customized for our organization?",
      a: "Absolutely! Every training program is tailored based on a thorough needs assessment. We work closely with your leadership team to understand specific challenges, skill gaps, and strategic goals to design a curriculum that delivers maximum impact.",
    },
    {
      q: "What is the CAT Framework?",
      a: "The CAT Framework (Concept-Application-Tools) is our proprietary methodology that ensures deep learning. First, we build strong conceptual foundations, then apply knowledge through real-world projects, and finally master industry-standard tools used by leading organizations.",
    },
    {
      q: "Who are the instructors?",
      a: "Our instructors are industry practitioners with 15+ years of experience at Fortune 500 companies. They bring real-world expertise, current industry insights, and practical knowledge to every training session.",
    },
  ],
  "Delivery & Format": [
    {
      q: "What delivery modes are available?",
      a: "We offer flexible delivery options including fully online, in-person on-site, and hybrid modes. Programs can be scheduled according to your team's availability, including weekday, weekend, or intensive bootcamp formats.",
    },
    {
      q: "What is the typical duration of a training program?",
      a: "Program duration varies based on scope and depth. Short workshops run 2-5 days, standard programs span 4-8 weeks, and comprehensive certification programs can extend to 3-6 months. We customize the timeline to fit your operational needs.",
    },
    {
      q: "How many participants can join a single batch?",
      a: "We recommend batches of 15-30 participants for optimal interaction, but we can scale to accommodate larger groups. For organization-wide training, we design phased rollout plans to ensure quality delivery.",
    },
  ],
  "Support & Outcomes": [
    {
      q: "How do you measure training effectiveness?",
      a: "We track multiple metrics including skill assessments, project evaluations, participant feedback, and post-training performance analytics. We provide detailed ROI reports and recommend follow-up actions to sustain learning outcomes.",
    },
    {
      q: "Is there post-training support?",
      a: "Yes! Our engagement doesn't end with the training. We provide 3-6 months of post-training support including mentorship access, refresher modules, resource libraries, and performance tracking to ensure lasting impact.",
    },
    {
      q: "Do participants receive certifications?",
      a: "Yes, all participants who successfully complete the program receive an Accredian Enterprise certification. Our certifications are recognized across industries and can be verified through our online portal.",
    },
  ],
};

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setOpenIndex(0);
  };

  return (
    <section
      id="faqs"
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/20 to-white" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-500 text-sm font-semibold mb-4">
            Got Questions?
          </span>
          <h2 className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 delay-100 text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-900 mb-4">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 delay-200 text-gray-500 max-w-2xl mx-auto text-lg">
            Everything you need to know about our enterprise training programs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Category tabs */}
          <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 delay-300 flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-primary-500 to-blue-600 text-white shadow-lg shadow-primary-500/25"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-primary-300 hover:text-primary-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData[activeCategory].map((faq, i) => (
              <div
                key={`${activeCategory}-${i}`}
                className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 bg-white rounded-2xl border border-gray-100 card-shadow overflow-hidden"
                style={{ transitionDelay: `${400 + i * 80}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors duration-200"
                >
                  <span className="text-base font-semibold text-dark-900 pr-4">
                    {faq.q}
                  </span>
                  <FiChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180 text-primary-500" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="h-px bg-gray-100 mb-4" />
                    <p className="text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
