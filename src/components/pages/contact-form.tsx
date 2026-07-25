"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const INDUSTRIES = [
  "Auto Parts & Engineering",
  "Cycle & Sports Equipment",
  "Hosiery & Textile Exporters",
  "Fasteners & Hardware",
  "Steel & Metal Fabrication",
  "Chemical & Pharmaceutical Manufacturers",
  "Packaging & Plastics",
  "Machine Tools & Precision",
  "Logistics & Industrial",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("submitted");
      e.currentTarget.reset();
      setTimeout(() => setStatus("idle"), 5000);
    }, 800);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "submitted" && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-2xl flex items-center gap-3 font-rajdhani font-semibold text-base">
          <CheckCircle2 className="size-5 text-green-600 shrink-0" />
          <span>Thank you! Your message has been sent. We'll get back to you within 24 hours.</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-rajdhani font-bold text-gray-700 uppercase mb-1">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            required
            placeholder="John Doe"
            className="w-full bg-white border border-gray-200 focus:border-[#f4a31d] rounded-2xl h-12 px-4 font-rajdhani text-base text-[#333] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#f4a31d]/20 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-rajdhani font-bold text-gray-700 uppercase mb-1">
            Company Name *
          </label>
          <input
            type="text"
            name="companyName"
            required
            placeholder="Industrial Enterprises"
            className="w-full bg-white border border-gray-200 focus:border-[#f4a31d] rounded-2xl h-12 px-4 font-rajdhani text-base text-[#333] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#f4a31d]/20 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-rajdhani font-bold text-gray-700 uppercase mb-1">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="john@company.com"
            className="w-full bg-white border border-gray-200 focus:border-[#f4a31d] rounded-2xl h-12 px-4 font-rajdhani text-base text-[#333] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#f4a31d]/20 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-rajdhani font-bold text-gray-700 uppercase mb-1">
            Mobile / Phone Number *
          </label>
          <input
            type="tel"
            name="mobileNumber"
            required
            placeholder="+91 98148 20845"
            className="w-full bg-white border border-gray-200 focus:border-[#f4a31d] rounded-2xl h-12 px-4 font-rajdhani text-base text-[#333] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#f4a31d]/20 transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-rajdhani font-bold text-gray-700 uppercase mb-1">
          Select Your Industry *
        </label>
        <div className="relative">
          <select
            name="industry"
            required
            defaultValue=""
            className="w-full bg-white border border-gray-200 focus:border-[#f4a31d] rounded-2xl h-12 px-4 font-rajdhani text-base text-[#333] appearance-none pr-10 outline-none focus:ring-2 focus:ring-[#f4a31d]/20 transition-all"
          >
            <option value="" disabled>
              Select Your Industry
            </option>
            {INDUSTRIES.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-rajdhani font-bold text-gray-700 uppercase mb-1">
          How can we help? *
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell us about your project, goals, or website challenges..."
          className="w-full bg-white border border-gray-200 focus:border-[#f4a31d] rounded-2xl p-4 font-rajdhani text-base text-[#333] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#f4a31d]/20 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 rounded-2xl uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        {status === "submitting" ? (
          "Sending..."
        ) : status === "submitted" ? (
          <>
            Message Sent <CheckCircle2 className="size-5" />
          </>
        ) : (
          <>
            Send Message <Send className="size-5" />
          </>
        )}
      </button>
    </form>
  );
}
