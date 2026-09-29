"use client";

import { useState } from "react";
// import "./careers.css";

export default function CareersPage() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  function validateForm(formData: FormData) {
    const newErrors: Record<string, string> = {};

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const mobile = String(formData.get("mobile") || "").trim();
    const interest = String(formData.get("interest") || "").trim();
    const cv = formData.get("cv") as File | null;

    // Name
    if (!name) {
      newErrors.name = "Please enter your full name.";
    }

    // Email
    if (!email) {
      newErrors.email = "Please enter your email.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

      if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    // Mobile
    if (!mobile) {
      newErrors.mobile = "Please enter your mobile number.";
    } else if (!/^[6-9]\d{9}$/.test(mobile)) {
      newErrors.mobile =
        "Please enter a valid 10-digit Indian mobile number.";
    }

    // Area of Interest
    if (!interest) {
      newErrors.interest = "Please select your area of interest.";
    }

    // CV
    if (!cv || cv.size === 0) {
      newErrors.cv = "Please upload your CV.";
    }

    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Validate
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Application submitted successfully!");
        form.reset();
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="career-apply">
      <div className="career-apply-inner">
        <span className="career-label">APPLY NOW</span>
        <h2>DON&apos;T WAIT FOR A JOB LISTING.</h2>
        <form onSubmit={handleSubmit} className="career-form">
          {/* Name + Email */}
            <div className="career-row">
                <div className="career-field">
                    <input  type="text"  name="name"  placeholder="Full Name" />
                    {errors.name && ( <span className="field-error"> {errors.name} </span> )}
                </div>
                <div className="career-field">
                <input type="email" name="email" placeholder="Email" />
                {errors.email && (<span className="field-error">  {errors.email}</span> )}
                </div>
            </div>
          {/* Mobile + Interest */}
          <div className="career-row">
            <div className="career-field">
              <input type="tel" name="mobile" placeholder="Mobile Number" maxLength={10} inputMode="numeric" />
              {errors.mobile && (<span className="field-error">  {errors.mobile}</span> )}
            </div>
            <div className="career-field">
              <select name="interest" defaultValue="">
                <option value="" disabled>Area Of Interest</option>
                <option value="Shopify Developer">Shopify Developer</option>
                <option value="Web Developer">Web Developer</option>
                <option value="WordPress Developer">WordPress Developer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Other">Other</option>
              </select>
              {errors.interest && (<span className="field-error">  {errors.interest}</span> )}
            </div>
          </div>  

          {/* CV */}
          <div className="career-field cv-field">

            <label className="cv-upload">
              <span>Upload Your CV</span>

              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 16V4" />
                <path d="M7 9l5-5 5 5" />
                <path d="M5 20h14" />
              </svg>

              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
              />
            </label>

            {errors.cv && (
              <span className="field-error cv-error">
                {errors.cv}
              </span>
            )}

          </div>

          <button type="submit" disabled={loading}>
            {loading ? "SUBMITTING..." : "APPLY NOW"}
          </button>

          {message && (
            <p className="career-message">
              {message}
            </p>
          )}

        </form>
      </div>
    </section>
  );
}