"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "Accredian's training program transformed our data science team. The hands-on approach and expert mentorship resulted in a 40% improvement in project delivery speed.",
    author: "Priya Sharma",
    role: "VP of Engineering",
    company: "Reliance Industries",
    rating: 5,
  },
  {
    quote:
      "The customized curriculum perfectly aligned with our organizational goals. Our team's analytical capabilities improved dramatically within just 8 weeks.",
    author: "Rajesh Kumar",
    role: "Head of L&D",
    company: "HCL Technologies",
    rating: 5,
  },
  {
    quote:
      "Outstanding ROI from Accredian's enterprise programs. The CAT framework ensured our teams didn't just learn concepts but could immediately apply them to real projects.",
    author: "Anita Desai",
    role: "Chief People Officer",
    company: "IBM India",
    rating: 5,
  },
  {
    quote:
      "The post-training support was exceptional. Three months after the program, we're still seeing improvements in team performance and innovation metrics.",
    author: "Michael Chen",
    role: "Director of Operations",
    company: "ADP",
    rating: 5,
  },
  {
    quote:
      "Accredian understood our unique challenges in cybersecurity and delivered a program that was both comprehensive and immediately actionable. Highly recommended.",
    author: "Sanjay Patel",
    role: "CISO",
    company: "BAYER",
    rating: 5,
  },
];

export default function Testimonials({ onEnquireClick }) {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, nextSlide]);

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
      id="testimonials"
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-500 text-sm font-semibold mb-4">
            Success Stories
          </span>
          <h2 className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 delay-100 text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-900 mb-4">
            What Our{" "}
            <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 delay-200 text-gray-500 max-w-2xl mx-auto text-lg">
            Hear from enterprises that have transformed their teams with our
            training programs.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-300">
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Testimonial Card */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 card-shadow-lg relative overflow-hidden">
              {/* Quote decoration */}
              <div className="absolute top-6 left-8 text-8xl font-serif text-primary-100 leading-none select-none">
                &ldquo;
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {testimonials[current].author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-900">
                      {testimonials[current].author}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonials[current].role},{" "}
                      <span className="text-primary-500 font-medium">
                        {testimonials[current].company}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Gradient accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-indigo-500" />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 card-shadow"
              >
                <FiChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      current === i
                        ? "w-8 bg-gradient-to-r from-primary-500 to-blue-600"
                        : "w-2.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 card-shadow"
              >
                <FiChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-500">
          <div className="bg-gradient-to-r from-primary-500 via-blue-500 to-indigo-600 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Team?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                Join 10,000+ professionals who have elevated their skills with
                Accredian Enterprise training.
              </p>
              <button
                onClick={onEnquireClick}
                className="px-8 py-4 bg-white text-primary-500 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get Started Today →
              </button>
            </div>
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
