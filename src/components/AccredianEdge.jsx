"use client";

import { useEffect, useRef } from "react";
import {
  FiTarget,
  FiCpu,
  FiLayers,
  FiRefreshCw,
  FiAward,
  FiZap,
  FiBarChart2,
} from "react-icons/fi";

const features = [
  {
    icon: FiTarget,
    title: "Tailored Solutions",
    desc: "Custom training programs designed to address your organization's specific challenges and goals.",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
  },
  {
    icon: FiCpu,
    title: "Innovative Framework",
    desc: "Our proprietary CAT framework ensures deep learning through Concepts, Application, and Tools.",
    color: "from-purple-500 to-pink-600",
    bg: "bg-purple-50",
  },
  {
    icon: FiLayers,
    title: "Diverse Offerings",
    desc: "From data science to leadership, we cover 50+ domains with industry-relevant curriculum.",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
  },
  {
    icon: FiRefreshCw,
    title: "Flexible Delivery",
    desc: "Choose from online, offline, or hybrid modes tailored to your team's schedule and preferences.",
    color: "from-orange-500 to-amber-600",
    bg: "bg-orange-50",
  },
  {
    icon: FiAward,
    title: "Expert Guidance",
    desc: "Learn from industry practitioners with 15+ years of experience in Fortune 500 companies.",
    color: "from-red-500 to-rose-600",
    bg: "bg-red-50",
  },
  {
    icon: FiZap,
    title: "Advanced Technology",
    desc: "Leverage AI-powered learning paths and real-time progress tracking for maximum efficiency.",
    color: "from-cyan-500 to-teal-600",
    bg: "bg-cyan-50",
  },
  {
    icon: FiBarChart2,
    title: "Proven Impact",
    desc: "Measurable outcomes with detailed analytics and ROI tracking for every training initiative.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
  },
];

export default function AccredianEdge() {
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
      id="edge"
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-500 text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 delay-100 text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-900 mb-4">
            The Accredian{" "}
            <span className="text-gradient">Edge</span>
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 delay-200 text-gray-500 max-w-2xl mx-auto text-lg">
            Key aspects of our strategic training approach that set us apart from
            conventional learning platforms.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 group relative bg-white rounded-3xl p-7 border border-gray-100 card-shadow hover-lift ${
                i === features.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ transitionDelay: `${100 + i * 80}ms` }}
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />

              <div className={`inline-flex p-3.5 rounded-2xl ${feature.bg} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-gray-700" />
              </div>

              <h3 className="text-lg font-bold text-dark-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.desc}
              </p>
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
