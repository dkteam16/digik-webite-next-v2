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

const inputClass =
  "absolute bg-[#f5f5f5] rounded-[52px] px-[28px] font-rajdhani text-[18px] text-[#333] placeholder:text-[#a0a0a0] outline-none focus:ring-2 focus:ring-[#f4a31d] transition-all";

export function CareerForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [fileName, setFileName] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
    e.currentTarget.reset();
    setFileName(null);
    setTimeout(() => setStatus("idle"), 5000);
  }

  return (
    <form onSubmit={handleSubmit} className="contents">
      {/* Row 1 */}
      <input
        type="text"
        name="fullName"
        required
        placeholder="Full Name"
        className={`${inputClass} left-[364px] top-[1250px] w-[580px] h-[64px]`}
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className={`${inputClass} left-[976px] top-[1250px] w-[580px] h-[64px]`}
      />

      {/* Row 2 */}
      <input
        type="tel"
        name="mobileNumber"
        required
        placeholder="Mobile Number"
        className={`${inputClass} left-[364px] top-[1334px] w-[580px] h-[64px]`}
      />
      <div className="absolute left-[976px] top-[1334px] w-[580px] h-[64px]">
        <select
          name="areaOfInterest"
          required
          defaultValue=""
          className={`${inputClass} inset-0 size-full appearance-none pr-[48px] text-[#333] invalid:text-[#a0a0a0]`}
        >
          <option value="" disabled>
            Area Of Interest
          </option>
          {AREAS_OF_INTEREST.map((area) => (
            <option key={area} value={area} className="text-[#333]">
              {area}
            </option>
          ))}
        </select>
        <div className="absolute right-[24px] top-[26px] pointer-events-none text-[#333]">
          <svg className="w-[14px] h-[14px] fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>

      {/* Row 3 - File Upload Dropzone */}
      <label className="absolute left-[364px] top-[1418px] w-[1192px] h-[120px] bg-[#f5f5f5] rounded-[32px] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#eaeaea] transition-colors border border-dashed border-[#d0d0d0]">
        <div className="flex items-center gap-3">
          <span className="font-rajdhani font-medium text-[18px] text-[#666]">
            {fileName
              ? `Attached: ${fileName}`
              : status === "submitted"
              ? "CV Uploaded Successfully ✓"
              : "Upload Your CV"}
          </span>
          <svg
            className="w-[20px] h-[20px] text-[#555]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
        </div>
        <input
          type="file"
          name="cv"
          accept=".pdf,.doc,.docx"
          required
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setFileName(e.target.files[0].name);
            }
          }}
          className="sr-only"
        />
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="-translate-x-1/2 absolute bg-[#f4a31d] border-2 border-solid border-white h-[64px] left-1/2 rounded-[64px] top-[1568px] w-[304px] flex items-center justify-center font-rajdhani font-bold text-[22px] text-center text-white tracking-[-0.44px] uppercase hover:opacity-90 transition-opacity shadow-md cursor-pointer"
      >
        {status === "submitted" ? "APPLIED ✓" : "APPLY NOW"}
      </button>
    </form>
  );
}
