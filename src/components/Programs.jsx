"use client";

import { useEffect, useRef } from "react";
import {
  FiDatabase,
  FiBarChart,
  FiCode,
  FiCloud,
  FiBriefcase,
  FiShield,
} from "react-icons/fi";

const domains = [
  {
    icon: FiDatabase,
    title: "Data Science & AI",
    desc: "Machine Learning, Deep Learning, NLP, Computer Vision, and GenAI",
    programs: "15+ Programs",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: FiBarChart,
    title: "Business Analytics",
    desc: "Data-driven decision making, BI tools, and strategic analytics",
    programs: "10+ Programs",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: FiCode,
    title: "Product & Technology",
    desc: "Product management, full-stack development, and agile methodologies",
    programs: "12+ Programs",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: FiCloud,
    title: "Cloud & DevOps",
    desc: "AWS, Azure, GCP, containerization, and infrastructure automation",
    programs: "8+ Programs",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: FiBriefcase,
    title: "Management & Leadership",
    desc: "Executive leadership, strategic thinking, and organizational growth",
    programs: "10+ Programs",
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: FiShield,
    title: "Cybersecurity",
    desc: "Threat analysis, ethical hacking, compliance, and risk management",
    programs: "6+ Programs",
    color: "from-red-500 to-rose-600",
  },
];

export default function Programs() {
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
      id="programs"
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 inline-block px-4 py-1.5 rounded-full bg-white/10 text-primary-300 text-sm font-semibold mb-4 border border-white/10">
            Domain Expertise
          </span>
          <h2 className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 delay-100 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Programs Across{" "}
            <span className="bg-gradient-to-r from-primary-300 to-blue-400 bg-clip-text text-transparent">
              Key Domains
            </span>
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 delay-200 text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive training solutions spanning technology, analytics,
            management, and beyond.
          </p>
        </div>

        {/* Domain Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {domains.map((domain, i) => (
            <div
              key={i}
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 group relative bg-white/5 backdrop-blur-sm rounded-3xl p-7 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${100 + i * 80}ms` }}
            >
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${domain.color} mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <domain.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {domain.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {domain.desc}
              </p>

              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${domain.color} text-white`}>
                {domain.programs}
              </span>
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
