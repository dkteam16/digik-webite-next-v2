"use client";

import { useState, type FormEvent } from "react";
import { Upload, CheckCircle2, Send } from "lucide-react";

const AREAS_OF_INTEREST = [
  "Web Design",
  "Web Development",
  "SEO & Content",
  "Client Servicing",
  "Sales & Business Development",
  "Other",
];

export function CareerForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");
  const [fileName, setFileName] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("submitted");
      e.currentTarget.reset();
      setFileName(null);
      setTimeout(() => setStatus("idle"), 5000);
    }, 800);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
      {status === "submitted" && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-2xl flex items-center gap-3 font-rajdhani font-semibold text-base">
          <CheckCircle2 className="size-5 text-green-600 shrink-0" />
          <span>Application received! We'll review your CV and contact you if there's a match.</span>
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
            placeholder="Your Full Name"
            className="w-full bg-[#f5f5f5] focus:bg-white border border-transparent focus:border-[#f4a31d] rounded-2xl h-14 px-5 font-rajdhani text-base text-[#333] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#f4a31d]/20 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-rajdhani font-bold text-gray-700 uppercase mb-1">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@email.com"
            className="w-full bg-[#f5f5f5] focus:bg-white border border-transparent focus:border-[#f4a31d] rounded-2xl h-14 px-5 font-rajdhani text-base text-[#333] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#f4a31d]/20 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-rajdhani font-bold text-gray-700 uppercase mb-1">
            Mobile Number *
          </label>
          <input
            type="tel"
            name="mobileNumber"
            required
            placeholder="+91 98765 43210"
            className="w-full bg-[#f5f5f5] focus:bg-white border border-transparent focus:border-[#f4a31d] rounded-2xl h-14 px-5 font-rajdhani text-base text-[#333] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#f4a31d]/20 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-rajdhani font-bold text-gray-700 uppercase mb-1">
            Area of Interest *
          </label>
          <div className="relative">
            <select
              name="areaOfInterest"
              required
              defaultValue=""
              className="w-full bg-[#f5f5f5] focus:bg-white border border-transparent focus:border-[#f4a31d] rounded-2xl h-14 px-5 font-rajdhani text-base text-[#333] appearance-none pr-10 outline-none focus:ring-2 focus:ring-[#f4a31d]/20 transition-all"
            >
              <option value="" disabled>
                Select Area Of Interest
              </option>
              {AREAS_OF_INTEREST.map((area) => (
                <option key={area} value={area}>
                  {area}
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
      </div>

      {/* Dropzone File Upload */}
      <div>
        <label className="block text-xs font-rajdhani font-bold text-gray-700 uppercase mb-1">
          Upload CV / Resume (PDF or DOCX) *
        </label>
        <label className="w-full h-32 bg-[#f5f5f5] hover:bg-[#ebebeb] border-2 border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors p-4 text-center">
          <Upload className="size-6 text-[#f4a31d]" />
          <span className="font-rajdhani font-semibold text-base text-gray-700">
            {fileName ? (
              <span className="text-[#f4a31d] font-bold">Attached: {fileName}</span>
            ) : (
              "Click to choose or drag & drop your CV file"
            )}
          </span>
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
      </div>

      <div className="flex justify-center pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto min-w-[280px] bg-[#f4a31d] hover:bg-[#d98d12] text-white font-rajdhani font-bold text-lg h-14 px-8 rounded-full uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {status === "submitting" ? (
            "Submitting..."
          ) : status === "submitted" ? (
            <>
              Applied <CheckCircle2 className="size-5" />
            </>
          ) : (
            <>
              Apply Now <Send className="size-5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
