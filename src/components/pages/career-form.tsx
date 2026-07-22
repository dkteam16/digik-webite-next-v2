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
        className={`${fieldCls} h-[48px] left-[364px] top-[1282px] w-[586px]`}
      />
      <input
        type="tel"
        name="mobileNumber"
        required
        placeholder="Mobile Number"
        className={`${fieldCls} h-[48px] left-[364px] top-[1341px] w-[586px]`}
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className={`${fieldCls} h-[48px] left-1/2 top-[1282px] w-[596px]`}
      />
      <select
        name="areaOfInterest"
        required
        defaultValue=""
        className={`${fieldCls} h-[48px] left-1/2 top-[1341px] w-[596px] appearance-none`}
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
      <label className={`${fieldCls} h-[118px] left-[364px] top-[1401px] w-[1192px] flex items-center cursor-pointer`}>
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
        className="absolute bg-[#f4a31d] border-2 border-solid border-white h-[56px] left-[867px] rounded-[16px] top-[1553px] w-[187px] flex items-center justify-center font-rajdhani font-bold text-[20px] text-center text-white tracking-[-0.4px] uppercase hover:opacity-90 transition-opacity"
      >
        {status === "submitted" ? "Applied!" : "Apply Now"}
      </button>
    </form>
  );
}
