"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#stats" },
  { label: "Our Edge", href: "#edge" },
  { label: "Programs", href: "#programs" },
  { label: "Framework", href: "#framework" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar({ onEnquireClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group" onClick={(e) => handleNavClick(e, "#home")}>
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary-500/30 transition-shadow duration-300">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-dark-900 tracking-tight">
              Accredian
            </span>
            <span className="text-[10px] font-medium text-gray-400 -mt-1 tracking-widest uppercase">
              Enterprise
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-500 transition-colors duration-200 rounded-lg hover:bg-primary-50 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-2/3 rounded-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onEnquireClick}
            className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-blue-600 text-white font-semibold text-sm rounded-full shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileOpen ? (
            <HiX className="w-6 h-6 text-gray-700" />
          ) : (
            <HiMenu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[60px] bg-white/98 backdrop-blur-xl transition-all duration-500 ${
          isMobileOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-primary-50 rounded-xl transition-all duration-200"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <button
              onClick={() => {
                setIsMobileOpen(false);
                onEnquireClick();
              }}
              className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-blue-600 text-white font-semibold rounded-full shadow-lg"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
