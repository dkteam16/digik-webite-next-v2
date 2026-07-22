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

const inputCls =
  "absolute bg-white border border-[rgba(0,0,0,0.14)] border-solid rounded-[13px] px-4 font-rajdhani text-[17px] text-[#333] placeholder:text-[rgba(0,0,0,0.28)] outline-none focus:border-[#f4a31d]";

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
      <input
        type="text"
        name="fullName"
        required
        placeholder="Full Name"
        className={`${inputCls} h-[48px] left-[calc(50%+36px)] top-[508px] w-[277px]`}
      />
      <input
        type="text"
        name="companyName"
        required
        placeholder="Company Name"
        className={`${inputCls} h-[48px] left-[calc(50%+323px)] top-[508px] w-[277px]`}
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className={`${inputCls} h-[48px] left-[calc(50%+36px)] top-[567px] w-[277px]`}
      />
      <input
        type="tel"
        name="mobileNumber"
        required
        placeholder="Mobile Number"
        className={`${inputCls} h-[48px] left-[calc(50%+323px)] top-[567px] w-[277px]`}
      />
      <select
        name="industry"
        required
        defaultValue=""
        className={`${inputCls} h-[48px] left-[calc(50%+36px)] top-[627px] w-[564px] appearance-none`}
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
      <textarea
        name="message"
        required
        placeholder="Tell us more"
        className={`${inputCls} h-[79px] left-[calc(50%+36px)] top-[686px] w-[564px] py-3 resize-none`}
      />
      <button
        type="submit"
        className="absolute bg-[#f4a31d] border-2 border-solid border-white h-[56px] left-[calc(50%+213px)] rounded-[16px] top-[780px] w-[187px] flex items-center justify-center font-rajdhani font-bold text-[20px] text-center text-white tracking-[-0.4px] uppercase hover:opacity-90 transition-opacity"
      >
        {status === "submitted" ? "Sent!" : "Send Message"}
      </button>
    </form>
  );
}
