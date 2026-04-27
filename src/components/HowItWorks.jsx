"use client";

import { useEffect, useRef } from "react";
import { FiSearch, FiPlay, FiHeadphones } from "react-icons/fi";

const steps = [
  {
    icon: FiSearch,
    step: "01",
    title: "Needs Assessment",
    desc: "We start by deeply understanding your organization's unique challenges, skill gaps, and strategic objectives to design a tailored learning roadmap.",
    details: [
      "Stakeholder interviews",
      "Skills gap analysis",
      "Custom curriculum design",
    ],
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
  },
  {
    icon: FiPlay,
    step: "02",
    title: "Interactive Learning",
    desc: "Immersive training delivery through live sessions, hands-on labs, real-world case studies, and collaborative projects with expert mentors.",
    details: [
      "Live expert-led sessions",
      "Hands-on projects",
      "Real-world case studies",
    ],
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
  },
  {
    icon: FiHeadphones,
    step: "03",
    title: "Post-Training Support",
    desc: "Sustained growth through ongoing mentorship, performance tracking, refresher modules, and continuous learning resources.",
    details: [
      "Ongoing mentorship",
      "Performance analytics",
      "Refresher modules",
    ],
    color: "from-orange-500 to-amber-600",
    bg: "bg-orange-50",
  },
];

export default function HowItWorks() {
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

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-500 text-sm font-semibold mb-4">
            Our Process
          </span>
          <h2 className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 delay-100 text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-900 mb-4">
            How We Deliver{" "}
            <span className="text-gradient">Results</span>
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 delay-200 text-gray-500 max-w-2xl mx-auto text-lg">
            A structured three-step process that ensures measurable outcomes and
            lasting impact for your organization.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-orange-200" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-600 relative"
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              {/* Step Number Circle */}
              <div className="flex justify-center mb-8">
                <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl z-10`}>
                  <step.icon className="w-8 h-8 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                    <span className="text-xs font-extrabold text-gray-700">
                      {step.step}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card */}
              <div className="bg-white rounded-3xl p-7 border border-gray-100 card-shadow hover-lift text-center">
                <h3 className="text-xl font-bold text-dark-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {step.desc}
                </p>

                {/* Details list */}
                <div className="space-y-2">
                  {step.details.map((detail, j) => (
                    <div
                      key={j}
                      className={`flex items-center gap-2 ${step.bg} rounded-xl px-4 py-2`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                      <span className="text-sm text-gray-600 font-medium">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
