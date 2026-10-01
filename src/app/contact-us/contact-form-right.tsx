 
"use client";

import { FormEvent, useState } from "react";

type FormData = {
  fullName: string;
  companyName: string;
  email: string;
  mobileNumber: string;
  industry: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    mobileNumber: "",
    industry: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    const name = formData.fullName.trim();
    const company = formData.companyName.trim();
    const email = formData.email.trim();
    const mobile = formData.mobileNumber.trim();
    const message = formData.message.trim();

    // Full Name
    if (!name) {
      newErrors.fullName = "Full name is required.";
    } else if (name.length < 2) {
      newErrors.fullName = "Please enter a valid name.";
    }

    // Company Name
    if (!company) {
      newErrors.companyName = "Company name is required.";
    } else if (company.length < 2) {
      newErrors.companyName = "Please enter a valid company name.";
    }

    // Email
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Mobile Number
    if (!mobile) {
      newErrors.mobileNumber = "Mobile number is required.";
    } else if (!/^[+]?[0-9\s()-]{7,15}$/.test(mobile)) {
      newErrors.mobileNumber = "Please enter a valid mobile number.";
    }

    // Industry
    if (!formData.industry) {
      newErrors.industry = "Please select your industry.";
    }

    // Message
    if (!message) {
      newErrors.message = "Message is required.";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(false);

    // Validation
    if (!validateForm()) {
      return;
    }

    // Form data console me check karne ke liye
    console.log("Form submitted:", formData);

    // Success message
    setSubmitted(true);

    // 1 second ke baad page refresh
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <section className="contact-msg-section">
      <div className="contact-msg-wrapper">

        <h2 className="contact-msg-title">
          SEND US A MESSAGE
        </h2>

        <form
          className="contact-msg-form"
          onSubmit={handleSubmit}
          noValidate
        >

          {/* Name + Company */}
          <div className="contact-msg-row">

            {/* Full Name */}
            <div className="contact-msg-field">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className={
                  errors.fullName
                    ? "contact-msg-input contact-msg-input-error"
                    : "contact-msg-input"
                }
              />

              {errors.fullName && (
                <span className="contact-msg-error">
                  {errors.fullName}
                </span>
              )}
            </div>

            {/* Company Name */}
            <div className="contact-msg-field">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className={
                  errors.companyName
                    ? "contact-msg-input contact-msg-input-error"
                    : "contact-msg-input"
                }
              />

              {errors.companyName && (
                <span className="contact-msg-error">
                  {errors.companyName}
                </span>
              )}
            </div>

          </div>

          {/* Email + Mobile */}
          <div className="contact-msg-row">

            {/* Email */}
            <div className="contact-msg-field">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={
                  errors.email
                    ? "contact-msg-input contact-msg-input-error"
                    : "contact-msg-input"
                }
              />

              {errors.email && (
                <span className="contact-msg-error">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Mobile Number */}
            <div className="contact-msg-field">
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                className={
                  errors.mobileNumber
                    ? "contact-msg-input contact-msg-input-error"
                    : "contact-msg-input"
                }
              />

              {errors.mobileNumber && (
                <span className="contact-msg-error">
                  {errors.mobileNumber}
                </span>
              )}
            </div>

          </div>

          {/* Industry */}
          <div className="contact-msg-field contact-msg-full">
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className={
                errors.industry
                  ? "contact-msg-select contact-msg-input-error"
                  : "contact-msg-select"
              }
            >
              <option value="">Select Your Industry</option>
              <option value="IT">IT & Software</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
              <option value="Ecommerce">E-Commerce</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Other">Other</option>
            </select>

            {errors.industry && (
              <span className="contact-msg-error">
                {errors.industry}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="contact-msg-field contact-msg-full">
            <textarea
              name="message"
              placeholder="Tell us more"
              value={formData.message}
              onChange={handleChange}
              className={
                errors.message
                  ? "contact-msg-textarea contact-msg-input-error"
                  : "contact-msg-textarea"
              }
            />

            {errors.message && (
              <span className="contact-msg-error">
                {errors.message}
              </span>
            )}
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="contact-msg-success">
              ✓ Your message has been submitted successfully.
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="contact-msg-button"
          >
            SEND MESSAGE
          </button>

        </form>
      </div>
    </section>
  );
}
 
