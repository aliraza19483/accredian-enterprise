"use client";

import {
  FiFacebook,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

const footerLinks = {
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  Programs: [
    { label: "Data Science", href: "#programs" },
    { label: "Business Analytics", href: "#programs" },
    { label: "Product Management", href: "#programs" },
    { label: "Cloud & DevOps", href: "#programs" },
  ],
  Resources: [
    { label: "Why Accredian", href: "#edge" },
    { label: "CAT Framework", href: "#framework" },
    { label: "FAQs", href: "#faqs" },
    { label: "Testimonials", href: "#testimonials" },
  ],
};

const socials = [
  { icon: FiFacebook, href: "#", label: "Facebook" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: FiYoutube, href: "#", label: "YouTube" },
];

export default function Footer({ onEnquireClick }) {
  return (
    <footer className="relative bg-dark-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight">
                  Accredian
                </span>
                <span className="block text-[10px] font-medium text-gray-500 -mt-1 tracking-widest uppercase">
                  Enterprise
                </span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-sm text-sm">
              Empowering enterprises with next-generation training solutions.
              Transform your workforce with industry-leading programs designed
              for measurable impact.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-primary-400 transition-colors cursor-pointer">
                <FiMail className="w-4 h-4" />
                <span>enterprise@accredian.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-primary-400 transition-colors cursor-pointer">
                <FiPhone className="w-4 h-4" />
                <span>+91 9876 543 210</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <FiMapPin className="w-4 h-4 flex-shrink-0" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500/20 hover:border-primary-500/30 transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-primary-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Accredian. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </a>
            <button
              onClick={onEnquireClick}
              className="px-5 py-2 bg-gradient-to-r from-primary-500 to-blue-600 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
