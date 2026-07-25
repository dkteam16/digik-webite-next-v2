"use client";

import { useState, type FormEvent } from "react";

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

const inputClass =
  "absolute bg-white border border-[rgba(0,0,0,0.14)] rounded-[52px] px-[24px] font-rajdhani text-[18px] text-[#333] placeholder:text-[#a0a0a0] outline-none focus:ring-2 focus:ring-[#f4a31d] transition-all";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
    e.currentTarget.reset();
    setTimeout(() => setStatus("idle"), 5000);
  }

  return (
    <form onSubmit={handleSubmit} className="contents">
      {/* Row 1: Full Name & Company Name */}
      <input
        type="text"
        name="fullName"
        required
        placeholder="Full Name"
        className={`${inputClass} left-[1002px] top-[515px] w-[274px] h-[56px]`}
      />
      <input
        type="text"
        name="companyName"
        required
        placeholder="Company Name"
        className={`${inputClass} left-[1290px] top-[515px] w-[274px] h-[56px]`}
      />

      {/* Row 2: Email & Mobile Number */}
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className={`${inputClass} left-[1002px] top-[586px] w-[274px] h-[56px]`}
      />
      <input
        type="tel"
        name="mobileNumber"
        required
        placeholder="Mobile Number"
        className={`${inputClass} left-[1290px] top-[586px] w-[274px] h-[56px]`}
      />

      {/* Row 3: Industry Select */}
      <div className="absolute left-[1002px] top-[657px] w-[562px] h-[56px]">
        <select
          name="industry"
          required
          defaultValue=""
          className={`${inputClass} inset-0 size-full appearance-none pr-[48px] text-[#333] invalid:text-[#a0a0a0]`}
        >
          <option value="" disabled>
            Select Your Industry
          </option>
          {INDUSTRIES.map((industry) => (
            <option key={industry} value={industry} className="text-[#333]">
              {industry}
            </option>
          ))}
        </select>
        <div className="absolute right-[24px] top-[22px] pointer-events-none text-[#333]">
          <svg className="w-[14px] h-[14px] fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>

      {/* Row 4: Message Textarea */}
      <textarea
        name="message"
        required
        placeholder="Tell us more"
        className={`${inputClass} left-[1002px] top-[728px] w-[562px] h-[135px] rounded-[24px] py-[16px] resize-none`}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="absolute bg-[#f4a31d] border-2 border-solid border-white h-[64px] left-[1100px] rounded-[64px] top-[883px] w-[366px] flex items-center justify-center font-rajdhani font-bold text-[22px] text-center text-white tracking-[-0.44px] uppercase hover:opacity-90 transition-opacity shadow-md cursor-pointer"
      >
        {status === "submitted" ? "MESSAGE SENT ✓" : "SEND MESSAGE"}
      </button>
    </form>
  );
}
