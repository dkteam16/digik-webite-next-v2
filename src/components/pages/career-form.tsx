"use client";

import { useState, type FormEvent } from "react";

const AREAS_OF_INTEREST = [
  "Web Design",
  "Web Development",
  "SEO & Content",
  "Client Servicing",
  "Sales & Business Development",
  "Other",
];

const fieldCls =
  "absolute bg-[#f5f5f5] rounded-[13px] px-4 font-rajdhani text-[17px] text-[#333] placeholder:text-[rgba(0,0,0,0.28)] outline-none focus:ring-2 focus:ring-[#f4a31d]";

export function CareerForm() {
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
        className={`${fieldCls} h-12 left-91 top-320.5 w-146.5`}
      />
      <input
        type="tel"
        name="mobileNumber"
        required
        placeholder="Mobile Number"
        className={`${fieldCls} h-12 left-91 top-335.25 w-146.5`}
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className={`${fieldCls} h-12 left-1/2 top-320.5 w-149`}
      />
      <select
        name="areaOfInterest"
        required
        defaultValue=""
        className={`${fieldCls} h-12 left-1/2 top-335.25 w-149 appearance-none`}
      >
        <option value="" disabled>
          Area Of Interest
        </option>
        {AREAS_OF_INTEREST.map((area) => (
          <option key={area} value={area}>
            {area}
          </option>
        ))}
      </select>
      <label className={`${fieldCls} h-29.5 left-91 top-350.25 w-298 flex items-center cursor-pointer`}>
        <span className="pointer-events-none">
          {status === "submitted" ? "CV attached ✓" : "Upload Your CV"}
        </span>
        <input
          type="file"
          name="cv"
          accept=".pdf,.doc,.docx"
          required
          className="sr-only"
        />
      </label>
      <button
        type="submit"
        className="absolute bg-[#f4a31d] border-2 border-solid border-white h-14 left-216.75 rounded-[16px] top-388.25 w-46.75 flex items-center justify-center font-rajdhani font-bold text-[20px] text-center text-white tracking-[-0.4px] uppercase hover:opacity-90 transition-opacity"
      >
        {status === "submitted" ? "Applied!" : "Apply Now"}
      </button>
    </form>
  );
}
