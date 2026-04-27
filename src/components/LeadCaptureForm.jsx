"use client";

import { useState } from "react";
import { FiX, FiCheck, FiLoader } from "react-icons/fi";

export default function LeadCaptureForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", phone: "", message: "" });
        setTimeout(() => {
          setStatus("idle");
          onClose();
        }, 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 modal-overlay animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 to-blue-600 p-6 text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative z-10">
            <button
              onClick={onClose}
              className="absolute top-0 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-bold mb-1">Get in Touch</h3>
            <p className="text-blue-100 text-sm">
              Tell us about your training needs and we&apos;ll get back to you within 24
              hours.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {status === "success" ? (
            <div className="py-10 text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <FiCheck className="w-8 h-8 text-accent-green" />
              </div>
              <h4 className="text-xl font-bold text-dark-900 mb-2">
                Thank You!
              </h4>
              <p className="text-gray-500">
                We&apos;ve received your enquiry and will get back to you shortly.
              </p>
            </div>
          ) : (
            <>
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Full Name *
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.name ? "border-red-300 bg-red-50" : "border-gray-200"
                  } focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Work Email *
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.email
                      ? "border-red-300 bg-red-50"
                      : "border-gray-200"
                  } focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Company & Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Company *
                  </label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Inc."
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.company
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200"
                    } focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm`}
                  />
                  {errors.company && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.company}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Phone *
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.phone
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200"
                    } focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your training requirements..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm resize-none"
                />
              </div>

              {/* Error message */}
              {status === "error" && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm text-center">
                  Something went wrong. Please try again.
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3.5 bg-gradient-to-r from-primary-500 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <FiLoader className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
