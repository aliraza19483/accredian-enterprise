"use client";

import { useEffect, useRef } from "react";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

const checkItems = [
  "Tailored Enterprise Solutions",
  "Industry-Leading Expertise",
  "Measurable Business Impact",
];

export default function Hero({ onEnquireClick }) {
  const heroRef = useRef(null);

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

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-500/5 blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-400/5 blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-primary-500/20 animate-float" />
        <div className="absolute top-1/3 left-1/3 w-2 h-2 rounded-full bg-blue-400/20 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 rounded-full bg-primary-300/15 animate-float" style={{ animationDelay: "4s" }} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1a73e8 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-500 text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                Next-Gen Corporate Training
              </span>
            </div>

            <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-dark-900">
              Next-Gen{" "}
              <span className="text-gradient">Expertise</span>
              <br />
              For Your{" "}
              <span className="text-gradient">Enterprise</span>
            </h1>

            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg text-gray-600 max-w-lg leading-relaxed">
              Cultivate high-performance teams through expert-led learning
              programs. Transform your workforce with cutting-edge training
              solutions designed for the modern enterprise.
            </p>

            {/* Checklist */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 space-y-3">
              {checkItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-accent-green/10 flex items-center justify-center group-hover:bg-accent-green/20 transition-colors">
                    <FiCheckCircle className="w-4 h-4 text-accent-green" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-[400ms] flex flex-wrap gap-4">
              <button
                onClick={onEnquireClick}
                className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 text-white font-bold rounded-full shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Enquire Now
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#edge"
                className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-bold rounded-full hover:border-primary-300 hover:text-primary-500 hover:bg-primary-50/50 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-1000 delay-300 relative">
            <div className="relative">
              {/* Main visual card */}
              <div className="relative bg-gradient-to-br from-primary-500 via-blue-500 to-indigo-600 rounded-3xl p-1 shadow-2xl shadow-primary-500/20">
                <div className="bg-white rounded-[22px] p-8 space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center">
                      <span className="text-white text-xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-900">Enterprise Dashboard</h3>
                      <p className="text-sm text-gray-400">Training Analytics</p>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary-50 rounded-2xl p-4 hover-lift cursor-default">
                      <p className="text-3xl font-bold text-primary-500">95%</p>
                      <p className="text-xs text-gray-500 mt-1">Completion Rate</p>
                    </div>
                    <div className="bg-green-50 rounded-2xl p-4 hover-lift cursor-default">
                      <p className="text-3xl font-bold text-accent-green">4.8★</p>
                      <p className="text-xs text-gray-500 mt-1">Avg. Rating</p>
                    </div>
                    <div className="bg-orange-50 rounded-2xl p-4 hover-lift cursor-default">
                      <p className="text-3xl font-bold text-accent-orange">10K+</p>
                      <p className="text-xs text-gray-500 mt-1">Professionals</p>
                    </div>
                    <div className="bg-purple-50 rounded-2xl p-4 hover-lift cursor-default">
                      <p className="text-3xl font-bold text-purple-500">200+</p>
                      <p className="text-xs text-gray-500 mt-1">Programs</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Q4 Training Goal</span>
                      <span className="font-bold text-primary-500">87%</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full w-[87%] transition-all duration-1000" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl animate-float border border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="text-xs font-bold text-dark-900">Top Rated</p>
                    <p className="text-[10px] text-gray-400">Enterprise Training</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-xl animate-float border border-gray-100" style={{ animationDelay: "3s" }}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📈</span>
                  <div>
                    <p className="text-xs font-bold text-accent-green">+45%</p>
                    <p className="text-[10px] text-gray-400">Team Performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animate-in */}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) !important;
        }
      `}</style>
    </section>
  );
}
