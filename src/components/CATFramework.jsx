"use client";

import { useEffect, useRef } from "react";

const circles = [
  {
    label: "Concept",
    desc: "Build strong theoretical foundations with structured learning modules and expert instruction.",
    color: "from-blue-500 to-indigo-600",
    borderColor: "border-blue-400",
    textColor: "text-blue-600",
    bgLight: "bg-blue-50",
  },
  {
    label: "Application",
    desc: "Apply knowledge through real-world case studies, simulations, and hands-on projects.",
    color: "from-green-500 to-emerald-600",
    borderColor: "border-green-400",
    textColor: "text-green-600",
    bgLight: "bg-green-50",
  },
  {
    label: "Tools",
    desc: "Master industry-standard tools and technologies used by leading organizations worldwide.",
    color: "from-orange-500 to-amber-600",
    borderColor: "border-orange-400",
    textColor: "text-orange-600",
    bgLight: "bg-orange-50",
  },
];

export default function CATFramework() {
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
      id="framework"
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-500 text-sm font-semibold mb-4">
            Our Methodology
          </span>
          <h2 className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 delay-100 text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-900 mb-4">
            The <span className="text-gradient">CAT</span> Framework
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 delay-200 text-gray-500 max-w-2xl mx-auto text-lg">
            Our proven three-pillar approach ensures comprehensive skill
            development and lasting knowledge retention.
          </p>
        </div>

        {/* Visual */}
        <div className="max-w-5xl mx-auto">
          {/* Venn Diagram (Desktop) */}
          <div className="hidden lg:flex justify-center items-center mb-16 animate-on-scroll opacity-0 transition-all duration-700 delay-300">
            <div className="relative w-[500px] h-[400px]">
              {/* Circle 1 - Concept */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full bg-blue-500/10 border-2 border-blue-300/30 flex items-center justify-center animate-float">
                <div className="text-center">
                  <span className="text-4xl mb-2 block">📘</span>
                  <span className="font-bold text-blue-600 text-lg">Concept</span>
                </div>
              </div>

              {/* Circle 2 - Application */}
              <div className="absolute bottom-0 left-[15%] w-56 h-56 rounded-full bg-green-500/10 border-2 border-green-300/30 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-center">
                  <span className="text-4xl mb-2 block">🔧</span>
                  <span className="font-bold text-green-600 text-lg">Application</span>
                </div>
              </div>

              {/* Circle 3 - Tools */}
              <div className="absolute bottom-0 right-[15%] w-56 h-56 rounded-full bg-orange-500/10 border-2 border-orange-300/30 flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                <div className="text-center">
                  <span className="text-4xl mb-2 block">⚙️</span>
                  <span className="font-bold text-orange-600 text-lg">Tools</span>
                </div>
              </div>

              {/* Center CAT label */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center shadow-xl shadow-primary-500/30">
                  <span className="text-white font-extrabold text-lg">CAT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {circles.map((item, i) => (
              <div
                key={i}
                className={`animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 group relative bg-white rounded-3xl p-8 border border-gray-100 card-shadow-lg hover-lift overflow-hidden`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />

                <div className={`inline-flex w-14 h-14 rounded-2xl ${item.bgLight} items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">
                    {i === 0 ? "📘" : i === 1 ? "🔧" : "⚙️"}
                  </span>
                </div>

                <h3 className={`text-xl font-bold ${item.textColor} mb-3`}>
                  {item.label}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {item.desc}
                </p>

                {/* Step number */}
                <div className={`absolute top-6 right-6 w-8 h-8 rounded-full ${item.bgLight} flex items-center justify-center`}>
                  <span className={`text-sm font-bold ${item.textColor}`}>
                    {i + 1}
                  </span>
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
